import React from 'react';
import { Link } from 'react-router-dom';
import { Car, Info, LogIn, User, Bell } from 'lucide-react';
import UserProfile from './UserProfile';
import NotificationBell from './NotificationBell';
import { isAuthenticated } from '../utils/auth';

export default function Navbar() {
  const isLoggedIn = isAuthenticated();

  return (
    <nav className="bg-blue-600 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <Car className="h-8 w-8" />
            <span className="font-bold text-xl">CAR INFO</span>
          </Link>
          
          <div className="flex space-x-6 items-center">
            <Link to="/" className="hover:text-blue-200">
              <span>Anasayfa</span>
            </Link>
            <Link to="/cars" className="hover:text-blue-200">
              <span>Araba Bilgileri</span>
            </Link>
            <Link to="/parts" className="hover:text-blue-200">
              <span>Parça Bilgileri</span>
            </Link>
            <Link to="/about" className="hover:text-blue-200 flex items-center space-x-1">
              <Info className="h-5 w-5" />
              <span>Hakkımızda</span>
            </Link>
            
            {isLoggedIn && (
              <Link to="/messages" className="hover:text-blue-200">
                <Bell className="h-5 w-5" />
              </Link>
            )}
            
            {isLoggedIn ? (
              <div className="flex items-center space-x-4">
                <NotificationBell />
                <UserProfile />
              </div>
            ) : (
              <>
                <Link to="/register" className="hover:text-blue-200 flex items-center space-x-1">
                  <User className="h-5 w-5" />
                  <span>Kayıt Ol</span>
                </Link>
                <Link to="/login" className="hover:text-blue-200 flex items-center space-x-1">
                  <LogIn className="h-5 w-5" />
                  <span>Giriş</span>
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}