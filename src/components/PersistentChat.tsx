import React, { useState } from 'react';
import { MessageSquare, X, Send } from 'lucide-react';

export default function PersistentChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState<{ text: string; sent: boolean }[]>([]);

  const handleSend = () => {
    if (!message.trim()) return;
    
    setMessages([...messages, { text: message, sent: true }]);
    setMessage('');
    
    // Simulate response
    setTimeout(() => {
      setMessages(prev => [...prev, { 
        text: "Mesajınız alındı. En kısa sürede size dönüş yapacağız.", 
        sent: false 
      }]);
    }, 1000);
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {isOpen ? (
        <div className="bg-white rounded-lg shadow-lg w-80">
          <div className="flex justify-between items-center p-4 border-b">
            <h3 className="font-semibold text-black">Destek</h3>
            <button onClick={() => setIsOpen(false)}>
              <X className="h-5 w-5 text-gray-500" />
            </button>
          </div>
          
          <div className="h-96 overflow-y-auto p-4">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`mb-2 ${msg.sent ? 'text-right' : 'text-left'}`}
              >
                <div
                  className={`inline-block p-2 rounded-lg ${
                    msg.sent
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-black'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
          </div>
          
          <div className="p-4 border-t">
            <div className="flex gap-2">
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Mesajınızı yazın..."
                className="flex-1 border rounded-lg px-3 py-2 text-black"
              />
              <button
                onClick={handleSend}
                className="bg-blue-600 text-white p-2 rounded-lg"
              >
                <Send className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      ) : (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700"
        >
          <MessageSquare className="h-6 w-6" />
        </button>
      )}
    </div>
  );
}