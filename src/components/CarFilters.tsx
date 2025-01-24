import React, { useState, useEffect } from 'react';
import { Search, Filter } from 'lucide-react';

interface CarFiltersProps {
  onFilterChange: (filters: any) => void;
  listings: any[];
}

export default function CarFilters({ onFilterChange, listings }: CarFiltersProps) {
  const brands = ['Tümü', ...new Set(listings.map(car => car.brand))].sort();
  const [selectedBrand, setSelectedBrand] = useState('Tümü');
  const [models, setModels] = useState<string[]>(['Tümü']);
  const years = ['Tümü', '2024', '2023', '2022', '2021', '2020'];
  const transmissions = ['Tümü', 'Otomatik', 'Manuel'];
  const fueltypes = ['Tümü', 'Benzin', 'Dizel', 'Hibrit', 'Elektrik'];

  useEffect(() => {
    if (selectedBrand === 'Tümü') {
      setModels(['Tümü']);
    } else {
      const brandModels = ['Tümü', ...new Set(
        listings
          .filter(car => car.brand === selectedBrand)
          .map(car => car.model)
      )].sort();
      setModels(brandModels);
    }
  }, [selectedBrand, listings]);

  const handleFilterChange = (name: string, value: string) => {
    if (name === 'brand') {
      setSelectedBrand(value);
    }
    onFilterChange({ [name]: value });
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
      <div className="flex items-center mb-6">
        <Filter className="h-6 w-6 text-blue-600 mr-2" />
        <h2 className="text-xl font-semibold text-black">Filtreleme Seçenekleri</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
        <div className="space-y-2">
          <label className="block text-sm font-medium text-black">
            Marka
          </label>
          <select
            name="brand"
            onChange={(e) => handleFilterChange('brand', e.target.value)}
            className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-colors text-black"
          >
            {brands.map(brand => (
              <option key={brand} value={brand}>{brand}</option>
            ))}
          </select>
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-medium text-black">
            Model
          </label>
          <select
            name="model"
            onChange={(e) => handleFilterChange('model', e.target.value)}
            className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-colors text-black"
          >
            {models.map(model => (
              <option key={model} value={model}>{model}</option>
            ))}
          </select>
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-medium text-black">
            Yıl
          </label>
          <select
            name="year"
            onChange={(e) => handleFilterChange('year', e.target.value)}
            className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-colors text-black"
          >
            {years.map(year => (
              <option key={year} value={year}>{year}</option>
            ))}
          </select>
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-medium text-black">
            Şanzıman
          </label>
          <select
            name="transmission"
            onChange={(e) => handleFilterChange('transmission', e.target.value)}
            className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-colors text-black"
          >
            {transmissions.map(transmission => (
              <option key={transmission} value={transmission}>{transmission}</option>
            ))}
          </select>
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-medium text-black">
            Yakıt Türü
          </label>
          <select
            name="fueltype"
            onChange={(e) => handleFilterChange('fueltype', e.target.value)}
            className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-colors text-black"
          >
            {fueltypes.map(fuel => (
              <option key={fuel} value={fuel}>{fuel}</option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
}