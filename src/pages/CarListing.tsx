import React, { useState, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Star, MapPin, Info, Trash2 } from 'lucide-react';
import { carListings } from '../data/carListings';
import CommentSection from '../components/CommentSection';
import BackButton from '../components/BackButton';
import { CarComment } from '../types';
import { ChatContext } from '../context/ChatContext';

export default function CarListing() {
  const { id } = useParams();
  const navigate = useNavigate();
  const userListings = JSON.parse(localStorage.getItem('carListings') || '[]');
  const allListings = [...carListings, ...userListings];
  const car = allListings.find(c => c.id === id);
  const { startChat } = useContext(ChatContext);
  const currentUser = JSON.parse(localStorage.getItem('currentUser') || '{}');
  
  const [comments, setComments] = useState<CarComment[]>(() => {
    const savedComments = localStorage.getItem(`car_comments_${id}`);
    return savedComments ? JSON.parse(savedComments) : car?.comments || [];
  });

  if (!car) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-8">
        <BackButton />
        <div className="text-center text-black">İlan bulunamadı.</div>
      </div>
    );
  }

  const handleDeleteListing = () => {
    if (window.confirm('Bu ilanı silmek istediğinize emin misiniz?')) {
      const updatedListings = userListings.filter((listing: any) => listing.id !== id);
      localStorage.setItem('carListings', JSON.stringify(updatedListings));
      navigate('/cars');
    }
  };

  const handleAddComment = (newComment: Omit<CarComment, 'id'>) => {
    const comment = {
      ...newComment,
      id: Date.now()
    };
    const updatedComments = [...comments, comment];
    setComments(updatedComments);
    localStorage.setItem(`car_comments_${id}`, JSON.stringify(updatedComments));
  };

  const handleDeleteComment = (commentId: number) => {
    const updatedComments = comments.filter(comment => comment.id !== commentId);
    setComments(updatedComments);
    localStorage.setItem(`car_comments_${id}`, JSON.stringify(updatedComments));
  };

  const handleStartChat = (username: string) => {
    const currentUser = JSON.parse(localStorage.getItem('currentUser') || '{}');
    if (!currentUser?.name) {
      alert('Sohbet başlatmak için giriş yapmalısınız!');
      return;
    }
    if (username === currentUser.name) {
      alert('Kendinizle sohbet başlatamazsınız!');
      return;
    }
    startChat(username);
  };

  const isOwner = currentUser?.name === car.seller;

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <BackButton />
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <img
          src={car.image}
          alt={car.title}
          className="w-full h-96 object-cover"
        />
        
        <div className="p-6">
          <div className="flex justify-between items-start">
            <div>
              <h1 className="text-3xl font-bold mb-2 text-black">{car.title}</h1>
              <p className="text-3xl font-bold text-blue-600">
                {Number(car.price).toLocaleString('tr-TR')} ₺
              </p>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="flex items-center">
                <Star className="h-5 w-5 text-yellow-400" />
                <span className="ml-1 font-semibold text-black">{car.rating}</span>
              </div>
              {isOwner && (
                <button
                  onClick={handleDeleteListing}
                  className="text-red-500 hover:text-red-700 transition-colors"
                  title="İlanı Sil"
                >
                  <Trash2 className="h-5 w-5" />
                </button>
              )}
            </div>
          </div>

          <div className="mt-8 border-t pt-8">
            <h2 className="text-xl font-semibold mb-4 text-black flex items-center">
              <Info className="h-5 w-5 mr-2 text-blue-600" />
              Araç Detayları
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              <div>
                <p className="text-gray-600">Marka</p>
                <p className="font-semibold text-black">{car.brand}</p>
              </div>
              <div>
                <p className="text-gray-600">Model Yılı</p>
                <p className="font-semibold text-black">{car.year}</p>
              </div>
              <div>
                <p className="text-gray-600">Kilometre</p>
                <p className="font-semibold text-black">{Number(car.mileage).toLocaleString('tr-TR')} km</p>
              </div>
              <div>
                <p className="text-gray-600">Lokasyon</p>
                <button
                  onClick={() => window.open(`https://www.google.com/maps/search/${encodeURIComponent(car.location)}`, '_blank')}
                  className="font-semibold text-blue-600 hover:text-blue-800 flex items-center"
                >
                  <MapPin className="h-4 w-4 mr-1" />
                  {car.location}
                </button>
              </div>
              <div>
                <p className="text-gray-600">Değerlendirme</p>
                <p className="font-semibold text-black flex items-center">
                  <Star className="h-4 w-4 text-yellow-400 mr-1" />
                  {car.rating}/5
                </p>
              </div>
              <div>
                <p className="text-gray-600">Yakıt Tipi</p>
                <p className="font-semibold text-black">{car.fuelType}</p>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <CommentSection 
              comments={comments}
              onAddComment={handleAddComment}
              onDeleteComment={handleDeleteComment}
              onStartChat={handleStartChat}
            />
          </div>
        </div>
      </div>
    </div>
  );
}