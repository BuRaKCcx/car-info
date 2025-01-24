import React from 'react';
import { useParams } from 'react-router-dom';
import { carParts } from '../data/carParts';
import BackButton from '../components/BackButton';
import { Wrench, Info } from 'lucide-react';

export default function PartDetail() {
  const { id } = useParams();
  const part = carParts.find(p => p.id === id);

  if (!part) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-8">
        <BackButton />
        <div className="text-center text-gray-600">Parça bulunamadı.</div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <BackButton />
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <img
          src={part.image}
          alt={part.name}
          className="w-full h-96 object-cover"
        />
        
        <div className="p-6">
          <div className="flex justify-between items-start mb-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">{part.name}</h1>
              <p className="text-3xl font-bold text-blue-600">
                {part.price.toLocaleString('tr-TR')} ₺
              </p>
            </div>
            <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full">
              {part.category}
            </span>
          </div>

          <div className="mt-8">
            <h2 className="text-xl font-semibold mb-4 flex items-center text-gray-900">
              <Info className="h-5 w-5 mr-2 text-blue-600" />
              Parça Detayları
            </h2>
            <p className="text-gray-700 mb-6">{part.description}</p>

            {part.specifications && part.specifications.length > 0 && (
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-2 text-gray-900">Teknik Özellikler</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  {part.specifications.map((spec, index) => (
                    <li key={index}>{spec}</li>
                  ))}
                </ul>
              </div>
            )}

            {part.compatibility && part.compatibility.length > 0 && (
              <div>
                <h3 className="text-lg font-semibold mb-2 text-gray-900">Uyumlu Araçlar</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  {part.compatibility.map((vehicle, index) => (
                    <li key={index}>{vehicle}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}