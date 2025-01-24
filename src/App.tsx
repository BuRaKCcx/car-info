import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ChatProvider } from './context/ChatContext';
import Navbar from './components/Navbar';
import ChatSystem from './components/ChatSystem';
import PersistentChat from './components/PersistentChat';
// ... other imports

export default function App() {
  return (
    <ChatProvider>
      <Router>
        <div className="min-h-screen bg-gray-900 dark:bg-gray-900 text-gray-100">
          <Navbar />
          <Routes>
            {/* ... existing routes */}
          </Routes>
          <ChatSystem />
          <PersistentChat />
        </div>
      </Router>
    </ChatProvider>
  );
}