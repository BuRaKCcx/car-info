import React, { createContext, useState, useEffect } from 'react';

interface ChatContextType {
  activeChats: { username: string; isOpen: boolean }[];
  startChat: (username: string) => void;
  closeChat: (username: string) => void;
}

export const ChatContext = createContext<ChatContextType>({
  activeChats: [],
  startChat: () => {},
  closeChat: () => {},
});

export function ChatProvider({ children }: { children: React.ReactNode }) {
  const [activeChats, setActiveChats] = useState<{ username: string; isOpen: boolean }[]>([]);
  const currentUser = JSON.parse(localStorage.getItem('currentUser') || '{}');

  useEffect(() => {
    // Load active chats from localStorage when component mounts
    if (currentUser?.name) {
      const savedChats = localStorage.getItem(`active_chats_${currentUser.name}`);
      if (savedChats) {
        const chats = JSON.parse(savedChats);
        setActiveChats(chats.map((username: string) => ({ username, isOpen: true })));
      }
    }
  }, [currentUser?.name]);

  const startChat = (username: string) => {
    if (!currentUser?.name) {
      alert('Sohbet başlatmak için giriş yapmalısınız!');
      return;
    }

    if (username === currentUser.name) {
      alert('Kendinizle sohbet başlatamazsınız!');
      return;
    }

    setActiveChats(prev => {
      const existingChat = prev.find(chat => chat.username === username);
      if (existingChat) {
        return prev.map(chat =>
          chat.username === username ? { ...chat, isOpen: true } : chat
        );
      }
      const newChats = [...prev, { username, isOpen: true }];
      // Save to localStorage
      localStorage.setItem(
        `active_chats_${currentUser.name}`, 
        JSON.stringify(newChats.map(chat => chat.username))
      );
      return newChats;
    });
  };

  const closeChat = (username: string) => {
    setActiveChats(prev => {
      const newChats = prev.filter(chat => chat.username !== username);
      // Save to localStorage
      if (currentUser?.name) {
        localStorage.setItem(
          `active_chats_${currentUser.name}`, 
          JSON.stringify(newChats.map(chat => chat.username))
        );
      }
      return newChats;
    });
  };

  return (
    <ChatContext.Provider value={{ activeChats, startChat, closeChat }}>
      {children}
    </ChatContext.Provider>
  );
}