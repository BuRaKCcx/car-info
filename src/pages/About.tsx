import React from 'react';
import { Car, Book, Users, Globe } from 'lucide-react';

export default function About() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <Car className="h-16 w-16 mx-auto text-blue-600 mb-4" />
        <h1 className="text-4xl font-bold text-white mb-4">Hakkımızda</h1>
        <p className="text-xl text-white">Türkiye'nin En Kapsamlı Araç Bilgi Platformu</p>
      </div>

      <div className="prose prose-lg mx-auto text-white">
        <p className="mb-6">
          CAR INFO olarak, 2024 yılından bu yana Türkiye'nin en kapsamlı araç bilgi platformu olarak hizmet vermekteyiz. Amacımız, araç sahiplerine ve otomobil tutkunlarına detaylı teknik bilgiler, bakım tavsiyeleri ve güncel otomotiv haberleri sunmaktır.
        </p>

        <h2 className="text-2xl font-bold mb-4 text-white">Misyonumuz</h2>
        <p className="mb-6">
          Kullanıcılarımıza araçlar hakkında doğru, güncel ve detaylı bilgiler sunarak bilinçli kararlar almalarına yardımcı olmak. Otomotiv dünyasındaki son gelişmeleri ve teknolojik yenilikleri takip ederek, bu bilgileri anlaşılır bir şekilde sizlerle paylaşmak.
        </p>

        <h2 className="text-2xl font-bold mb-4 text-white">Vizyonumuz</h2>
        <p className="mb-6">
          Türkiye'nin en güvenilir ve kapsamlı araç bilgi kaynağı olmak. Teknolojik altyapımız ve uzman ekibimizle otomotiv sektöründe referans noktası haline gelmek.
        </p>

        <h2 className="text-2xl font-bold mb-4 text-white">Değerlerimiz</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="flex items-start space-x-3">
            <Book className="h-6 w-6 text-blue-600 mt-1" />
            <div>
              <h3 className="font-semibold mb-1 text-white">Doğruluk ve Güvenilirlik</h3>
              <p className="text-white">Tüm bilgiler uzman ekibimiz tarafından doğrulanır</p>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <Users className="h-6 w-6 text-blue-600 mt-1" />
            <div>
              <h3 className="font-semibold mb-1 text-white">Kullanıcı Odaklılık</h3>
              <p className="text-white">Kullanıcılarımızın ihtiyaçları önceliğimizdir</p>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <Globe className="h-6 w-6 text-blue-600 mt-1" />
            <div>
              <h3 className="font-semibold mb-1 text-white">Sürekli Güncelleme</h3>
              <p className="text-white">Bilgilerimizi sürekli güncel tutarız</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}