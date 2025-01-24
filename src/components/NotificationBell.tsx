import React, { useState, useEffect, useContext, useRef } from 'react';
import { Bell, MessageSquare, Trash2 } from 'lucide-react';
import { ChatContext } from '../context/ChatContext';

export default function NotificationBell() {
  const [notifications, setNotifications] = useState([]);
  const [showNotifications, setShowNotifications] = useState(false);
  const notificationRef = useRef(null);
  const currentUser = JSON.parse(localStorage.getItem('currentUser') || '{}');
  const { startChat } = useContext(ChatContext);

  useEffect(() => {
    const loadNotifications = () => {
      if (currentUser?.name) {
        const savedNotifications = localStorage.getItem(`notifications_${currentUser.name}`);
        if (savedNotifications) {
          setNotifications(JSON.parse(savedNotifications));
        }
      }
    };

    loadNotifications();
    const interval = setInterval(loadNotifications, 5000);
    return () => clearInterval(interval);
  }, [currentUser?.name]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (notificationRef.current && !notificationRef.current.contains(event.target)) {
        setShowNotifications(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleStartChat = (username) => {
    startChat(username);
    setShowNotifications(false);
  };

  const clearNotifications = () => {
    if (window.confirm('Tüm bildirimleri silmek istediğinize emin misiniz?')) {
      localStorage.setItem(`notifications_${currentUser.name}`, '[]');
      setNotifications([]);
    }
  };

  // Rest of the component remains the same, just add a clear notifications button
  return (
    <div className="relative" ref={notificationRef}>
      {/* Existing notification bell button */}
      
      {showNotifications && (
        <div className="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-lg z-50">
          <div className="p-4">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold text-gray-900">Bildirimler</h3>
              <button
                onClick={clearNotifications}
                className="text-red-500 hover:text-red-700"
                title="Bildirimleri Temizle"
              >
                <Trash2 className="h-5 w-5" />
              </button>
            </div>
            {/* Rest of the notifications list */}
          </div>
        </div>
      )}
    </div>
  );
}