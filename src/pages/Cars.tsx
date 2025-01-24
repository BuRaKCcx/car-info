import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Plus } from 'lucide-react';
import CarCard from '../components/CarCard';
import CarFilters from '../components/CarFilters';
import { carListings } from '../data/carListings';

export default function Cars() {
  const [filters, setFilters] = useState({
    brand: 'Tümü',
    model: 'Tümü',
    year: 'Tümü',
    transmission: 'Tümü',
    fuelType: 'Tümü'
  });

  const currentUser = JSON.parse(localStorage.getItem('currentUser') || '{}');
  const userListings = JSON.parse(localStorage.getItem('carListings') || '[]');
  const allListings = [...carListings, ...userListings].sort((a, b) => 
    new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  );

  const filteredCars = allListings.filter(car => {
    return (
      (filters.brand === 'Tümü' || car.brand === filters.brand) &&
      (filters.model === 'Tümü' || car.model === filters.model) &&
      (filters.year === 'Tümü' || car.year.toString() === filters.year) &&
      (filters.transmission === 'Tümü' || car.transmission === filters.transmission) &&
      (filters.fuelType === 'Tümü' || car.fuelType === filters.fuelType)
    );
  });

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold dark:text-white">Araçlar</h1>
        {currentUser?.name && (
          <Link
            to="/create-car-listing"
            className="flex items-center bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
          >
            <Plus className="h-5 w-5 mr-2" />
            Yeni İlan Ekle
          </Link>
        )}
      </div>
      
      <CarFilters 
        onFilterChange={(newFilters) => {
          setFilters(prev => ({ ...prev, ...newFilters }));
        }}
        listings={allListings}
      />
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredCars.map((car) => (
          <CarCard key={car.id} {...car} />
        ))}
      </div>
    </div>
  );
}