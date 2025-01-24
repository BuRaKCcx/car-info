import React, { useContext, useEffect } from 'react';
import ChatBar from './ChatBar';
import { ChatContext } from '../context/ChatContext';

export default function ChatSystem() {
  const { activeChats, closeChat } = useContext(ChatContext);
  const currentUser = JSON.parse(localStorage.getItem('currentUser') || '{}');

  useEffect(() => {
    const savedChats = localStorage.getItem(`active_chats_${currentUser?.name}`);
    if (savedChats) {
      const chats = JSON.parse(savedChats);
      chats.forEach((chat: string) => {
        if (!activeChats.find(c => c.username === chat)) {
          // Re-open saved chats
        }
      });
    }
  }, [currentUser?.name]);

  if (!currentUser?.name) return null;

  return (
    <div className="fixed bottom-0 right-4 flex gap-4 z-50">
      {activeChats.map((chat) => (
        chat.isOpen && (
          <ChatBar
            key={chat.username}
            currentUser={currentUser.name}
            otherUser={chat.username}
            onClose={() => {
              closeChat(chat.username);
              const updatedChats = activeChats
                .filter(c => c.username !== chat.username)
                .map(c => c.username);
              localStorage.setItem(`active_chats_${currentUser.name}`, JSON.stringify(updatedChats));
            }}
          />
        )
      ))}
    </div>
  );
}