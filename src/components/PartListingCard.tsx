import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Star } from 'lucide-react';

interface PartListingCardProps {
  id: string;
  title: string;
  price: number;
  image: string;
  condition: string;
  seller: {
    name: string;
    location: string;
  };
  description: string;
}

export default function PartListingCard({
  id,
  title,
  price,
  image,
  condition,
  seller,
  description
}: PartListingCardProps) {
  return (
    <Link to={`/part-listings/${id}`} className="block bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow">
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover rounded-t-lg"
      />
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{title}</h3>
          <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm rounded">
            {condition}
          </span>
        </div>
        <p className="text-lg font-bold text-blue-600 dark:text-blue-400 mb-2">
          {price.toLocaleString('tr-TR')} ₺
        </p>
        <div className="flex items-center text-gray-600 dark:text-gray-400 mb-2">
          <MapPin className="h-4 w-4 mr-1" />
          {seller.location}
        </div>
        <p className="text-sm text-gray-500 dark:text-gray-300 line-clamp-2">{description}</p>
      </div>
    </Link>
  );
}