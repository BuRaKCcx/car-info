import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import BackButton from '../components/BackButton';

export default function CreateCarListing() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: '',
    brand: '',
    model: '',
    year: '',
    mileage: '',
    fuelType: '',
    price: '',
    image: '',
    rating: '',
    description: '', // Added description field
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const currentUser = JSON.parse(localStorage.getItem('currentUser') || '{}');
    if (!currentUser?.name) {
      alert('İlan oluşturmak için giriş yapmalısınız!');
      navigate('/login');
      return;
    }

    const listing = {
      id: Date.now().toString(),
      ...formData,
      seller: currentUser.name,
      comments: [],
      createdAt: new Date().toISOString()
    };

    const existingListings = JSON.parse(localStorage.getItem('carListings') || '[]');
    localStorage.setItem('carListings', JSON.stringify([listing, ...existingListings]));

    alert('İlanınız başarıyla oluşturuldu!');
    navigate('/cars');
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <BackButton />
      <div className="bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-2xl font-bold text-black mb-6">Yeni Araç İlanı Oluştur</h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Existing fields */}
            
            {/* Add description field */}
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-black">Araç Açıklaması</label>
              <textarea
                required
                rows={4}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 text-black"
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                placeholder="Araç hakkında detaylı bilgi verin..."
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
          >
            İlanı Yayınla
          </button>
        </form>
      </div>
    </div>
  );
}