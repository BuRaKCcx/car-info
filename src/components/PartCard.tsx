import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Tag } from 'lucide-react';

interface PartCardProps {
  id: number;
  name: string;
  image: string;
  price: number;
  category: string;
  description: string;
}

const PartCard: React.FC<PartCardProps> = ({
  id,
  name,
  image,
  price,
  category,
  description
}) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden transition-transform hover:scale-[1.02] hover:shadow-xl">
      <div className="relative">
        <img
          src={image}
          alt={name}
          className="w-full h-48 object-cover"
        />
        <div className="absolute top-2 right-2">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
            <Tag className="w-3 h-3 mr-1" />
            {category}
          </span>
        </div>
      </div>

      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
          {name}
        </h3>
        <p className="text-sm text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">
          {description}
        </p>
        
        <div className="flex items-center justify-between">
          <span className="text-xl font-bold text-gray-900 dark:text-white">
            {price.toLocaleString('tr-TR', { 
              style: 'currency', 
              currency: 'TRY',
              minimumFractionDigits: 0,
              maximumFractionDigits: 0
            })}
          </span>
          
          <Link
            to={`/part/${id}`}
            className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            <ShoppingCart className="w-4 h-4 mr-2" />
            Detay
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PartCard;