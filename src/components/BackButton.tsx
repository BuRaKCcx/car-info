import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export default function BackButton() {
  const navigate = useNavigate();
  
  return (
    <button
      onClick={() => navigate(-1)}
      className="flex items-center text-white hover:text-blue-600 transition-colors mb-4"
    >
      <ArrowLeft className="h-5 w-5 mr-1" />
      <span>Geri Dön</span>
    </button>
  );
}