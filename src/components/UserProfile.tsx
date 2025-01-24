import React, { useContext } from 'react';
import { User, LogOut, Settings, MessageSquare, UserPlus } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { ChatContext } from '../context/ChatContext';

export default function UserProfile() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem('currentUser') || '{}');
  const { startChat } = useContext(ChatContext);

  const handleLogout = () => {
    localStorage.removeItem('currentUser');
    navigate('/register');
  };

  const handleSwitchUser = () => {
    localStorage.removeItem('currentUser');
    navigate('/login');
  };

  const handleMessages = () => {
    navigate('/messages');
  };

  return (
    <div className="relative group">
      <button className="flex items-center space-x-2 text-white">
        <User className="h-5 w-5" />
        <span>{user.name}</span>
      </button>
      
      <div className="absolute right-0 top-0 mt-10 w-48 bg-white rounded-md shadow-lg py-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
        <button
          onClick={() => navigate('/profile')}
          className="w-full flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
        >
          <Settings className="h-4 w-4 mr-2" />
          Profil Ayarları
        </button>
        <button
          onClick={handleMessages}
          className="w-full flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
        >
          <MessageSquare className="h-4 w-4 mr-2" />
          Mesajlar
        </button>
        <button
          onClick={handleSwitchUser}
          className="w-full flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
        >
          <UserPlus className="h-4 w-4 mr-2" />
          Kullanıcı Değiştir
        </button>
        <button
          onClick={handleLogout}
          className="w-full flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
        >
          <LogOut className="h-4 w-4 mr-2" />
          Çıkış Yap
        </button>
      </div>
    </div>
  );
}