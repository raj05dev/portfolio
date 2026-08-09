import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import type { ReactNode } from 'react';
import { CHAT_CLIENT_ID_KEY, ChatContext } from './chat-context';
import type { ChatContextValue } from './chat-context';
import { chatRules, errorReply, fallbackReply, greetingMessage } from '@/data/chatbot';
import type { ChatMessage } from '@/types';

const createGreeting = (): ChatMessage => ({
  id: '1',
  text: greetingMessage,
  isUser: false,
  timestamp: new Date(),
});

const escapeRegex = (value: string) => value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

/**
 * Pick the first rule whose keywords appear in the message. Keywords must start
 * on a word boundary so short ones ("hi") don't fire inside longer words
 * ("Sashi"); no trailing boundary, so stems like "technolog" still match.
 */
const resolveReply = (message: string): string => {
  const normalized = message.toLowerCase();
  const match = chatRules.find((rule) =>
    rule.keywords.some((keyword) => new RegExp(`\\b${escapeRegex(keyword)}`).test(normalized)),
  );
  return match ? match.reply : fallbackReply;
};

export const ChatProvider = ({ children }: { children: ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>(() => [createGreeting()]);
  const [input, setInput] = useState('');
  const [isSending, setIsSending] = useState(false);
  const [clientId, setClientId] = useState('');
  const replyTimer = useRef<number | undefined>(undefined);

  // The reference site treats the chat session as ephemeral — drop the id on unload.
  useEffect(() => {
    const clearClientId = () => window.localStorage.removeItem(CHAT_CLIENT_ID_KEY);
    window.addEventListener('beforeunload', clearClientId);
    return () => window.removeEventListener('beforeunload', clearClientId);
  }, []);

  useEffect(() => () => window.clearTimeout(replyTimer.current), []);

  const toggleChat = useCallback(() => {
    setIsOpen((wasOpen) => {
      if (wasOpen) {
        window.localStorage.removeItem(CHAT_CLIENT_ID_KEY);
        setClientId('');
      } else {
        const existing = window.localStorage.getItem(CHAT_CLIENT_ID_KEY);
        if (existing) {
          setClientId(existing);
        } else {
          const generated = crypto.randomUUID();
          window.localStorage.setItem(CHAT_CLIENT_ID_KEY, generated);
          setClientId(generated);
        }
      }
      return !wasOpen;
    });
  }, []);

  const closeChat = useCallback(() => {
    window.localStorage.removeItem(CHAT_CLIENT_ID_KEY);
    setClientId('');
    setIsOpen(false);
  }, []);

  const sendMessage = useCallback(
    (text?: string) => {
      const content = (text ?? input).trim();
      if (content === '' || isSending) return;

      const userMessage: ChatMessage = {
        id: Date.now().toString(),
        text: content,
        isUser: true,
        timestamp: new Date(),
      };
      setMessages((current) => [...current, userMessage]);
      setInput('');
      setIsSending(true);

      // Simulated round-trip so the typing state behaves like the live site.
      replyTimer.current = window.setTimeout(() => {
        try {
          const botMessage: ChatMessage = {
            id: (Date.now() + 1).toString(),
            text: resolveReply(content),
            isUser: false,
            timestamp: new Date(),
          };
          setMessages((current) => [...current, botMessage]);
        } catch {
          setMessages((current) => [
            ...current,
            {
              id: (Date.now() + 1).toString(),
              text: errorReply,
              isUser: false,
              timestamp: new Date(),
            },
          ]);
        } finally {
          setIsSending(false);
        }
      }, 700);
    },
    [input, isSending],
  );

  const resetConversation = useCallback(() => {
    setMessages([createGreeting()]);
    setInput('');
  }, []);

  const value = useMemo<ChatContextValue>(
    () => ({
      isOpen,
      messages,
      input,
      isSending,
      clientId,
      setInput,
      toggleChat,
      closeChat,
      sendMessage,
      resetConversation,
    }),
    [isOpen, messages, input, isSending, clientId, toggleChat, closeChat, sendMessage, resetConversation],
  );

  return <ChatContext.Provider value={value}>{children}</ChatContext.Provider>;
};
