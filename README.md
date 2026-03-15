# 🚀 Mini CRM - SaaS Satış ve Müşteri Takip Paneli

Bu proje, modern web geliştirme teknolojileri kullanılarak hazırlanmış, temel CRUD (Ekle, Listele, Güncelle, Sil) işlemlerini barındıran tek sayfalık bir web uygulamasıdır (SPA). Klasik bir "Yapılacaklar (TODO)" uygulamasının mantığı, B2B ve SaaS satış süreçlerine uyarlanarak profesyonel bir müşteri takip paneline dönüştürülmüştür.

🔗 **Canlı Demo:** [Netlify Linkin Buraya Gelecek]

## 📸 Ekran Görüntüsü
![Mini CRM Ekran Görüntüsü](Ekran-Goruntusu-Linkin-Buraya-Gelecek.png)

## 🛠️ Kullanılan Teknolojiler

* **Framework:** React.js (Vite ile oluşturuldu)
* **Stil (Styling):** Tailwind CSS
* **Durum Yönetimi (State Management):** React Hooks (`useState`)
* **Dağıtım (Deployment):** Netlify

## ✨ Proje Özellikleri (CRUD İşlemleri)

* **Ekleme (Create):** Yeni potansiyel firma adı ve iletişim kişisi ekleyerek portföy genişletilebilir.
* **Listeleme (Read):** Eklenen tüm müşteriler ve güncel durumları dinamik olarak listelenir.
* **Güncelleme (Update):** Müşteri görüşme durumları tek tıkla döngüsel olarak güncellenir (*Potansiyel ➔ Görüşme Bekliyor ➔ Teklif Verildi ➔ Kazanıldı*).
* **Silme (Delete):** Süreci olumsuz sonuçlanan veya hatalı girilen kayıtlar sistemden silinebilir.

## 📂 Dosya ve Klasör Yapısı

Proje, modüler ve sürdürülebilir bir mimari için şu şekilde yapılandırılmıştır:
* `/src/Pages`: Ana görünüm ve state yönetiminin yapıldığı bileşenler (`Dashboard.jsx`).
* `/src/Components`: Tekrar kullanılabilir, bağımsız arayüz elemanları (`CustomerCard.jsx`).
* `/src/Interfaces`: Başlangıç verileri ve veri yapısı şablonları (`CustomerData.js`).

## 💻 Kurulum ve Çalıştırma

Projeyi kendi bilgisayarınızda yerel olarak çalıştırmak için aşağıdaki adımları izleyebilirsiniz:

1. Projeyi klonlayın:
   ```bash
   git clone [https://github.com/KULLANICI-ADIN/mini-crm.git](https://github.com/KULLANICI-ADIN/mini-crm.git)
