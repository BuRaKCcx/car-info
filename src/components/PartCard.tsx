import React from 'react';
import { Link } from 'react-router-dom';

interface PartCardProps {
  id: string;
  name: string;
  image: string;
  price: number;
  category: string;
  description: string;
}

export default function PartCard({ id, name, image, price, category, description }: PartCardProps) {
  return (
    <Link to={`/parts/${id}`} className="block bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow">
      <img
        src={image}
        alt={name}
        className="w-full h-48 object-cover rounded-t-lg"
      />
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">{name}</h3>
        <p className="text-lg font-bold text-blue-600 dark:text-blue-400 mb-2">
          {price.toLocaleString('tr-TR')} ₺
        </p>
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">{category}</p>
        <p className="text-sm text-gray-500 dark:text-gray-300 line-clamp-2">{description}</p>
      </div>
    </Link>
  );
}