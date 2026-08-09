import { createContext } from 'react';
import type { ChatMessage } from '@/types';

export const CHAT_CLIENT_ID_KEY = 'sky_portfolio_chat_client_id';

export interface ChatContextValue {
  isOpen: boolean;
  messages: ChatMessage[];
  input: string;
  isSending: boolean;
  clientId: string;
  setInput: (value: string) => void;
  toggleChat: () => void;
  closeChat: () => void;
  sendMessage: (text?: string) => void;
  resetConversation: () => void;
}

export const ChatContext = createContext<ChatContextValue | undefined>(undefined);
