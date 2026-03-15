import React from 'react';

const CustomerCard = ({ customer, onDelete, onUpdateStatus }) => {
  return (
    <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100 flex justify-between items-center mb-4 hover:shadow-md transition-shadow">
      <div>
        <h3 className="text-lg font-bold text-gray-800">{customer.companyName}</h3>
        <p className="text-gray-500 text-sm mt-1">İletişim: {customer.contactPerson}</p>
        <span className={`inline-block mt-3 px-3 py-1 text-xs font-semibold rounded-full 
          ${customer.status === 'Kazanıldı' ? 'bg-green-100 text-green-700' : 
            customer.status === 'Teklif Verildi' ? 'bg-blue-100 text-blue-700' : 
            'bg-yellow-100 text-yellow-700'}`}>
          {customer.status}
        </span>
      </div>
      
      <div className="flex gap-2">
        <button 
          onClick={() => onUpdateStatus(customer.id)}
          className="bg-indigo-50 text-indigo-600 px-4 py-2 text-sm font-medium rounded-lg hover:bg-indigo-100 transition duration-200"
        >
          Durum Güncelle
        </button>
        <button 
          onClick={() => onDelete(customer.id)}
          className="bg-red-50 text-red-600 px-4 py-2 text-sm font-medium rounded-lg hover:bg-red-100 transition duration-200"
        >
          Sil
        </button>
      </div>
    </div>
  );
};

export default CustomerCard;