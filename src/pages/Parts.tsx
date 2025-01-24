import React from 'react';
import PartCard from '../components/PartCard';
import { carParts } from '../data/carParts';

export default function Parts() {
  const categories = [
    { id: 'all', name: 'Tümü' },
    { id: 'engine', name: 'Motor Parçaları' },
    { id: 'brake', name: 'Fren Sistemi' },
    { id: 'suspension', name: 'Süspansiyon' },
    { id: 'transmission', name: 'Şanzıman' },
    { id: 'electrical', name: 'Elektrik Sistemi' }
  ];

  const [selectedCategory, setSelectedCategory] = React.useState('all');

  const filteredParts = selectedCategory === 'all' 
    ? carParts 
    : carParts.filter(part => part.category === selectedCategory);

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8 text-black">Parça Bilgileri</h1>
      
      <div className="flex gap-4 mb-8 overflow-x-auto pb-4">
        {categories.map(category => (
          <button
            key={category.id}
            onClick={() => setSelectedCategory(category.id)}
            className={`px-6 py-3 rounded-full whitespace-nowrap transition-colors ${
              selectedCategory === category.id
                ? 'bg-blue-600 text-white'
                : 'bg-white text-black border border-gray-200 hover:bg-gray-50'
            }`}
          >
            {category.name}
          </button>
        ))}
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredParts.map(part => (
          <PartCard key={part.id} {...part} />
        ))}
      </div>
    </div>
  );
}