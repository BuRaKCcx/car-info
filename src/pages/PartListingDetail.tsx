import React from 'react';
import { useParams } from 'react-router-dom';
import { MapPin, Phone, Wrench } from 'lucide-react'; // Changed Tool to Wrench
import { partListings } from '../data/partListings';
import BackButton from '../components/BackButton';

export default function PartListingDetail() {
  const { id } = useParams();
  const part = partListings.find(p => p.id === id);

  if (!part) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-8">
        <BackButton />
        <div className="text-center text-gray-600">İlan bulunamadı.</div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <BackButton />
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <img
          src={part.image}
          alt={part.title}
          className="w-full h-96 object-cover"
        />
        
        <div className="p-6">
          <div className="flex justify-between items-start mb-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">{part.title}</h1>
              <p className="text-3xl font-bold text-blue-600">
                {part.price.toLocaleString('tr-TR')} ₺
              </p>
            </div>
            <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full">
              {part.condition}
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-xl font-semibold mb-4 flex items-center text-gray-900">
                <Wrench className="h-5 w-5 mr-2 text-blue-600" /> {/* Changed Tool to Wrench */}
                Parça Detayları
              </h2>
              {/* Rest of the component remains the same */}
            </div>
            {/* Rest of the component remains the same */}
          </div>
        </div>
      </div>
    </div>
  );
}