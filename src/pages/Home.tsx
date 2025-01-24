import React from 'react';
import { Link } from 'react-router-dom';
import CarSlider from '../components/CarSlider';
import { Star, MapPin, Car, Wrench, Shield, Award } from 'lucide-react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function Home() {
  const features = [
    {
      icon: <Car className="h-8 w-8 text-blue-600" />,
      title: "Geniş Araç Yelpazesi",
      description: "Yüzlerce farklı marka ve model arasından size en uygun aracı bulun."
    },
    {
      icon: <Wrench className="h-8 w-8 text-blue-600" />,
      title: "Detaylı Parça Bilgileri",
      description: "Tüm araç parçaları hakkında kapsamlı teknik bilgiler."
    },
  ];

  return (
    <div className="bg-white">
      <CarSlider />
      
      {/* Features Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-black mb-12">
            Neden Bizi Tercih Etmelisiniz?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-black">{feature.title}</h3>
                <p className="text-black">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="bg-blue-600 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-white mb-2">28,000+</div>
              <div className="text-white">Kayıtlı Araç</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white mb-2">5,000+</div>
              <div className="text-white">Mutlu Müşteri</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white mb-2">15,000+</div>
              <div className="text-white">Parça Bilgisi</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}