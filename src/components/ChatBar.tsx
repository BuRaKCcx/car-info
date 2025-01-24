import React, { useState, useEffect, useRef } from 'react';
import { X, Send } from 'lucide-react';

interface Message {
  from: string;
  to: string;
  text: string;
  timestamp: number;
}

interface ChatBarProps {
  currentUser: string;
  otherUser: string;
  onClose: () => void;
}

export default function ChatBar({ currentUser, otherUser, onClose }: ChatBarProps) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [newMessage, setNewMessage] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const chatKey = [currentUser, otherUser].sort().join('-');
    const savedMessages = localStorage.getItem(`chat_${chatKey}`);
    if (savedMessages) {
      setMessages(JSON.parse(savedMessages));
    }
  }, [currentUser, otherUser]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSend = () => {
    if (!newMessage.trim()) return;

    const message: Message = {
      from: currentUser,
      to: otherUser,
      text: newMessage,
      timestamp: Date.now()
    };

    const chatKey = [currentUser, otherUser].sort().join('-');
    const updatedMessages = [...messages, message];
    setMessages(updatedMessages);
    localStorage.setItem(`chat_${chatKey}`, JSON.stringify(updatedMessages));

    // Add notification for recipient
    const notifications = JSON.parse(localStorage.getItem(`notifications_${otherUser}`) || '[]');
    notifications.unshift({
      from: currentUser,
      text: newMessage,
      timestamp: Date.now(),
      read: false
    });
    localStorage.setItem(`notifications_${otherUser}`, JSON.stringify(notifications));

    setNewMessage('');
  };

  return (
    <div className="fixed bottom-4 right-4 w-80 bg-white rounded-lg shadow-lg">
      <div className="flex justify-between items-center p-3 border-b">
        <h3 className="font-semibold text-gray-900">{otherUser}</h3>
        <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
          <X className="h-5 w-5" />
        </button>
      </div>

      <div className="h-96 overflow-y-auto p-4">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`mb-2 ${msg.from === currentUser ? 'text-right' : 'text-left'}`}
          >
            <div
              className={`inline-block p-2 rounded-lg ${
                msg.from === currentUser
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-200 text-gray-900'
              }`}
            >
              {msg.text}
              <div className="text-xs opacity-75">
                {new Date(msg.timestamp).toLocaleTimeString()}
              </div>
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      <div className="p-3 border-t">
        <div className="flex gap-2">
          <input
            type="text"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Mesajınızı yazın..."
            className="flex-1 border rounded-lg px-3 py-2 text-gray-900"
          />
          <button
            onClick={handleSend}
            className="bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700"
          >
            <Send className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
}