import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Tag, Tool, MapPin, Wrench } from 'lucide-react';
import { carParts } from '../data/carParts';

export default function PartDetail() {
  const { id } = useParams();
  const part = carParts.find(p => p.id === id);

  if (!part) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Parça bulunamadı
          </h2>
          <Link
            to="/parts"
            className="inline-flex items-center text-blue-600 hover:text-blue-700"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Parçalara geri dön
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <Link
        to="/parts"
        className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-6"
      >
        <ArrowLeft className="w-4 h-4 mr-2" />
        Parçalara geri dön
      </Link>

      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
        <div className="md:flex">
          {/* Sol taraf - Resim */}
          <div className="md:w-1/2">
            <img
              src={part.image}
              alt={part.name}
              className="w-full h-96 object-cover"
            />
          </div>

          {/* Sağ taraf - Detaylar */}
          <div className="md:w-1/2 p-6">
            <div className="flex items-center justify-between mb-4">
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
                {part.name}
              </h1>
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                <Tag className="w-4 h-4 mr-2" />
                {part.category}
              </span>
            </div>

            <div className="mb-6">
              <span className="text-3xl font-bold text-gray-900 dark:text-white">
                {part.price.toLocaleString('tr-TR', {
                  style: 'currency',
                  currency: 'TRY',
                  minimumFractionDigits: 0,
                  maximumFractionDigits: 0
                })}
              </span>
            </div>

            <p className="text-gray-600 dark:text-gray-300 mb-6">
              {part.description}
            </p>

            {/* Özellikler */}
            <div className="mb-6">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 flex items-center">
                <Tool className="w-5 h-5 mr-2" />
                Teknik Özellikler
              </h2>
              <ul className="space-y-2">
                {part.specifications.map((spec, index) => (
                  <li
                    key={index}
                    className="text-gray-600 dark:text-gray-300 flex items-center"
                  >
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                    {spec}
                  </li>
                ))}
              </ul>
            </div>

            {/* Konum */}
            <div className="mb-6">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 flex items-center">
                <MapPin className="w-5 h-5 mr-2" />
                Araçtaki Konumu
              </h2>
              <p className="text-gray-600 dark:text-gray-300">{part.location}</p>
            </div>

            {/* Bakım */}
            <div>
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 flex items-center">
                <Wrench className="w-5 h-5 mr-2" />
                Bakım Bilgisi
              </h2>
              <p className="text-gray-600 dark:text-gray-300">{part.maintenance}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}