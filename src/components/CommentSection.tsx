import React, { useState } from 'react';
import { Star, Trash2, MessageSquare } from 'lucide-react';
import { CarComment } from '../types';

interface CommentSectionProps {
  comments: CarComment[];
  onAddComment: (comment: Omit<CarComment, 'id'>) => void;
  onDeleteComment?: (commentId: number) => void;
  onStartChat: (username: string) => void;
}

export default function CommentSection({ comments, onAddComment, onDeleteComment, onStartChat }: CommentSectionProps) {
  const [newComment, setNewComment] = useState('');
  const [rating, setRating] = useState(5);
  const currentUser = JSON.parse(localStorage.getItem('currentUser') || '{}');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!currentUser?.name) {
      alert('Yorum yapabilmek için giriş yapmalısınız!');
      return;
    }
    
    onAddComment({
      user: currentUser.name,
      text: newComment,
      rating
    });
    setNewComment('');
    setRating(5);
  };

  const handleStartChat = (username: string) => {
    if (!currentUser?.name) {
      alert('Sohbet başlatmak için giriş yapmalısınız!');
      return;
    }
    if (username === currentUser.name) {
      alert('Kendinizle sohbet başlatamazsınız!');
      return;
    }
    onStartChat(username);
  };

  return (
    <div className="mt-8">
      <h3 className="text-xl font-semibold mb-4 text-black">Yorumlar</h3>
      
      <div className="space-y-4 mb-8">
        {comments.map((comment) => (
          <div key={comment.id} className="bg-gray-50 p-4 rounded-lg">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center space-x-2">
                <span 
                  className="font-semibold text-black cursor-pointer hover:text-blue-600"
                  onClick={() => handleStartChat(comment.user)}
                >
                  {comment.user}
                </span>
                {currentUser?.name && currentUser.name !== comment.user && (
                  <button
                    onClick={() => handleStartChat(comment.user)}
                    className="text-blue-600 hover:text-blue-700 flex items-center space-x-1"
                  >
                    <MessageSquare className="h-4 w-4" />
                    <span className="text-sm">Sohbet Başlat</span>
                  </button>
                )}
              </div>
              <div className="flex items-center space-x-4">
                <div className="flex items-center">
                  <Star className="h-4 w-4 text-yellow-400" />
                  <span className="ml-1 text-black">{comment.rating}</span>
                </div>
                {currentUser?.name === comment.user && (
                  <button
                    onClick={() => onDeleteComment?.(comment.id)}
                    className="text-red-500 hover:text-red-700 transition-colors"
                    title="Yorumu Sil"
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
                )}
              </div>
            </div>
            <p className="text-black">{comment.text}</p>
          </div>
        ))}
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-black mb-2">
            Değerlendirme
          </label>
          <select
            value={rating}
            onChange={(e) => setRating(Number(e.target.value))}
            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-black"
          >
            {[5, 4, 3, 2, 1].map((value) => (
              <option key={value} value={value}>
                {value} Yıldız
              </option>
            ))}
          </select>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-black mb-2">
            Yorumunuz
          </label>
          <textarea
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-black"
            rows={3}
            placeholder={currentUser?.name ? "Yorumunuzu buraya yazın..." : "Yorum yapmak için giriş yapmalısınız"}
            disabled={!currentUser?.name}
          />
        </div>

        <button
          type="submit"
          disabled={!currentUser?.name}
          className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Yorum Yap
        </button>
      </form>
    </div>
  );
}