import React, { useState } from 'react';
import { initialCustomers } from '../Interfaces/CustomerData';
import CustomerCard from '../Components/CustomerCard';

const Dashboard = () => {
  const [customers, setCustomers] = useState(initialCustomers);
  const [newCompany, setNewCompany] = useState('');
  const [newContact, setNewContact] = useState('');

  // EKLE (Create)
  const handleAddCustomer = (e) => {
    e.preventDefault();
    if (!newCompany || !newContact) return;

    const newCustomer = {
      id: Date.now(),
      companyName: newCompany,
      contactPerson: newContact,
      status: 'Potansiyel', 
    };

    setCustomers([...customers, newCustomer]);
    setNewCompany('');
    setNewContact('');
  };

  // SİL (Delete)
  const handleDelete = (id) => {
    setCustomers(customers.filter(customer => customer.id !== id));
  };

  // GÜNCELLE (Update)
  const handleUpdateStatus = (id) => {
    const statuses = ["Potansiyel", "Görüşme Bekliyor", "Teklif Verildi", "Kazanıldı"];
    
    setCustomers(customers.map(customer => {
      if (customer.id === id) {
        const currentIndex = statuses.indexOf(customer.status);
        const nextStatus = statuses[(currentIndex + 1) % statuses.length];
        return { ...customer, status: nextStatus };
      }
      return customer;
    }));
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-extrabold text-gray-900 mb-8 border-b pb-4">SaaS Satış & Müşteri Paneli</h1>
      
      {/* Ekleme Formu */}
      <form onSubmit={handleAddCustomer} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 mb-8 flex gap-4 items-end">
        <div className="flex-1">
          <label className="block text-sm font-semibold text-gray-700 mb-2">Firma Adı</label>
          <input 
            type="text" 
            value={newCompany}
            onChange={(e) => setNewCompany(e.target.value)}
            className="w-full border border-gray-300 rounded-lg p-2.5 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
            placeholder="Örn: Tam Finans"
          />
        </div>
        <div className="flex-1">
          <label className="block text-sm font-semibold text-gray-700 mb-2">İletişim Kişisi</label>
          <input 
            type="text" 
            value={newContact}
            onChange={(e) => setNewContact(e.target.value)}
            className="w-full border border-gray-300 rounded-lg p-2.5 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
            placeholder="Örn: Ahmet Bey"
          />
        </div>
        <button type="submit" className="bg-indigo-600 text-white px-6 py-2.5 rounded-lg font-medium hover:bg-indigo-700 transition duration-200">
          Yeni Ekle
        </button>
      </form>

      {/* Listeleme Alanı */}
      <div>
        <h2 className="text-xl font-bold text-gray-800 mb-4">Mevcut Portföy ({customers.length})</h2>
        {customers.length === 0 ? (
          <p className="text-gray-500 text-center py-8 bg-gray-50 rounded-xl">Henüz kayıtlı müşteri yok.</p>
        ) : (
          customers.map(customer => (
            <CustomerCard 
              key={customer.id} 
              customer={customer} 
              onDelete={handleDelete}
              onUpdateStatus={handleUpdateStatus}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default Dashboard;