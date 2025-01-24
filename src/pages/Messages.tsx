import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { MessageSquare, Trash2 } from 'lucide-react';
import BackButton from '../components/BackButton';

export default function Messages() {
  const navigate = useNavigate();
  const currentUser = JSON.parse(localStorage.getItem('currentUser') || '{}');
  const [conversations, setConversations] = useState<any[]>([]);

  useEffect(() => {
    if (!currentUser?.name) {
      navigate('/login');
      return;
    }

    // Load all conversations for current user
    const allKeys = Object.keys(localStorage);
    const chatKeys = allKeys.filter(key => key.startsWith('chat_'));
    const userConversations = chatKeys
      .filter(key => key.split('_')[1].split('-').includes(currentUser.name))
      .map(key => {
        const messages = JSON.parse(localStorage.getItem(key) || '[]');
        const otherUser = key.split('_')[1].split('-').find(u => u !== currentUser.name);
        const lastMessage = messages[messages.length - 1];
        return {
          otherUser,
          lastMessage,
          key
        };
      });

    setConversations(userConversations);
  }, [currentUser?.name, navigate]);

  const deleteConversation = (chatKey: string) => {
    if (window.confirm('Bu sohbeti silmek istediğinize emin misiniz?')) {
      localStorage.removeItem(chatKey);
      setConversations(prev => prev.filter(conv => conv.key !== chatKey));
    }
  };

  if (!currentUser?.name) {
    return null;
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <BackButton />
      <div className="bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-2xl font-bold text-gray-900 mb-6">Mesajlarım</h1>

        {conversations.length === 0 ? (
          <p className="text-gray-500 text-center py-4">Henüz hiç mesajınız yok.</p>
        ) : (
          <div className="space-y-4">
            {conversations.map((conv) => (
              <div
                key={conv.key}
                className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50"
              >
                <div className="flex items-center space-x-4">
                  <MessageSquare className="h-6 w-6 text-blue-600" />
                  <div>
                    <h3 className="font-medium text-gray-900">{conv.otherUser}</h3>
                    {conv.lastMessage && (
                      <p className="text-sm text-gray-500">
                        Son mesaj: {conv.lastMessage.text.substring(0, 50)}...
                      </p>
                    )}
                  </div>
                </div>
                <button
                  onClick={() => deleteConversation(conv.key)}
                  className="text-red-500 hover:text-red-700"
                >
                  <Trash2 className="h-5 w-5" />
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}