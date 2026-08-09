import { useContext } from 'react';
import { ChatContext } from '@/context/chat-context';
import type { ChatContextValue } from '@/context/chat-context';

export const useChat = (): ChatContextValue => {
  const context = useContext(ChatContext);
  if (!context) {
    throw new Error('useChat must be used within a ChatProvider');
  }
  return context;
};
