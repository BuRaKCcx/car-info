import React from 'react';
import { Link } from 'react-router-dom';
import { Star, MapPin } from 'lucide-react';
import { CarComment } from '../types';

interface CarCardProps {
  id: string;
  title: string;
  price: number;
  image: string;
  location: string;
  year: number;
  mileage: number;
  fueltype: string;
  brand: string;
  model: string;
  information: string;
  rating: number;
  comments: CarComment[];
  createdAt: string;
}

export default function CarCard({
  id,
  title,
  price,
  image,
  location,
  year,
  mileage,
  fueltype,
  brand,
  model,
  information,
  rating,
  comments,
  createdAt
}: CarCardProps) {
  const formattedDate = new Date(createdAt).toLocaleDateString('tr-TR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  });

  return (
    <Link to={`/car/${id}`} className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover rounded-t-lg"
      />
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-semibold text-black">{title}</h3>
          <span className="text-sm text-gray-500">{formattedDate}</span>
        </div>
        <p className="text-2xl font-bold text-blue-600 mb-4">
          {price.toLocaleString('tr-TR')} ₺
        </p>
        <div className="flex items-center space-x-4 text-gray-600">
          <div className="flex items-center">
            <Star className="h-4 w-4 mr-1 text-yellow-400" />
            {rating}
          </div>
        </div>
        <div className="mt-4 text-sm text-gray-600">
          <p>Marka: {brand}</p>
          <p>Model: {model}</p>
          <p>Bilgi: {information}</p>
          <p>Yıl: {year}</p>
          <p>Yakıt Türü: {fueltype}</p>
          <p>Kilometre: {mileage.toLocaleString('tr-TR')} km</p>
        </div>
        <div className="mt-4 border-t pt-4">
          <p className="text-sm font-semibold text-black">Son Yorumlar ({comments.length}):</p>
          {comments.slice(0, 2).map((comment) => (
            <div key={comment.id} className="mt-2 text-sm text-gray-600">
              <div className="flex items-center">
                <Star className="h-3 w-3 text-yellow-400 mr-1" />
                <span>{comment.rating}</span>
              </div>
              <p>"{comment.text}" - {comment.user}</p>
            </div>
          ))}
        </div>
      </div>
    </Link>
  );
}