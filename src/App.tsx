import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ChatProvider } from './context/ChatContext';
import Navbar from './components/Navbar';
import ChatSystem from './components/ChatSystem';
import PersistentChat from './components/PersistentChat';
import Parts from './pages/Parts';
import PartDetail from './pages/PartDetail';
// ... other imports

export default function App() {
  return (
    <ChatProvider>
      <Router>
        <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
          <Navbar />
          <Routes>
            <Route path="/" element={<Parts />} />
            <Route path="/parts" element={<Parts />} />
            <Route path="/part/:id" element={<PartDetail />} />
            {/* ... existing routes */}
          </Routes>
          <ChatSystem />
          <PersistentChat />
        </div>
      </Router>
    </ChatProvider>
  );
}