import { useEffect, useRef } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { MessageSquare, Send, X } from 'lucide-react';
import { chatSuggestions } from '@/data/chatbot';
import { useChat } from '@/hooks/useChat';
import MarkdownText from './MarkdownText';

const ChatWidget = () => {
  const { isOpen, messages, input, isSending, setInput, toggleChat, closeChat, sendMessage } =
    useChat();
  const endOfMessagesRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Keep the newest message in view and focus the field when the panel opens.
  useEffect(() => {
    endOfMessagesRef.current?.scrollIntoView({ behavior: 'smooth' });
    if (isOpen) inputRef.current?.focus();
  }, [messages, isOpen]);

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-20 right-8 z-50 w-80 overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-2xl md:w-96 dark:border-gray-700 dark:bg-gray-800"
          >
            <div className="flex items-center justify-between bg-gradient-to-r from-primary-600 to-secondary-600 p-4">
              <h3 className="font-medium text-white">Chat with Raj's Assistant</h3>
              <button
                onClick={closeChat}
                aria-label="Close chat"
                className="rounded-full p-1 text-white transition-colors hover:bg-white/20"
              >
                <X size={18} />
              </button>
            </div>

            <div className="h-80 overflow-y-auto bg-gray-50 p-4 dark:bg-gray-900">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`mb-4 flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[80%] break-words rounded-lg px-4 py-2 ${
                      message.isUser
                        ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-left text-white'
                        : 'bg-gray-200 dark:bg-gray-700 dark:text-gray-100'
                    }`}
                  >
                    {message.isUser ? (
                      <span className="block">{message.text}</span>
                    ) : (
                      <div className="markdown-content prose prose-sm max-w-none dark:prose-invert">
                        <MarkdownText>{message.text}</MarkdownText>
                      </div>
                    )}
                  </div>
                </div>
              ))}

              {isSending && (
                <div className="mb-4 flex justify-start">
                  <div className="loading-dots rounded-lg bg-gray-200 px-4 py-3 dark:bg-gray-700">
                    <span className="mx-0.5 inline-block h-2 w-2 rounded-full bg-gray-500 dark:bg-gray-300" />
                    <span className="mx-0.5 inline-block h-2 w-2 rounded-full bg-gray-500 dark:bg-gray-300" />
                    <span className="mx-0.5 inline-block h-2 w-2 rounded-full bg-gray-500 dark:bg-gray-300" />
                  </div>
                </div>
              )}

              {messages.length === 1 && !isSending && (
                <div className="flex flex-wrap gap-2">
                  {chatSuggestions.map((suggestion) => (
                    <button
                      key={suggestion}
                      onClick={() => sendMessage(suggestion)}
                      className="rounded-full border border-primary-200 bg-white px-3 py-1.5 text-xs text-primary-700 transition-colors hover:bg-primary-50 dark:border-primary-800 dark:bg-gray-800 dark:text-primary-300 dark:hover:bg-gray-700"
                    >
                      {suggestion}
                    </button>
                  ))}
                </div>
              )}

              <div ref={endOfMessagesRef} />
            </div>

            <div className="flex items-center border-t border-gray-200 bg-white p-3 dark:border-gray-700 dark:bg-gray-800">
              <input
                ref={inputRef}
                type="text"
                placeholder="Type your message..."
                value={input}
                onChange={(event) => setInput(event.target.value)}
                onKeyDown={(event) => {
                  if (event.key === 'Enter') sendMessage();
                }}
                disabled={isSending}
                className="flex-1 rounded-full border-none bg-gray-100 px-4 py-2 text-gray-900 focus:ring-2 focus:ring-primary-500 disabled:opacity-70 dark:bg-gray-700 dark:text-white dark:focus:ring-primary-400"
              />
              <button
                onClick={() => sendMessage()}
                disabled={input.trim() === '' || isSending}
                aria-label="Send message"
                className={`ml-2 rounded-full p-2 ${
                  input.trim() === '' || isSending
                    ? 'bg-gray-200 text-gray-400 dark:bg-gray-700 dark:text-gray-500'
                    : 'bg-gradient-to-r from-primary-600 to-secondary-600 text-white'
                }`}
              >
                {isSending ? (
                  <div className="h-[18px] w-[18px] animate-spin rounded-full border-2 border-white border-t-transparent" />
                ) : (
                  <Send size={18} />
                )}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={toggleChat}
        aria-label={isOpen ? 'Close assistant' : 'Open assistant'}
        className="fixed bottom-8 right-8 z-50 rounded-full bg-gradient-to-r from-primary-600 to-secondary-600 p-4 text-white shadow-lg transition-all duration-300 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900"
      >
        {isOpen ? <X size={24} /> : <MessageSquare size={24} />}
      </motion.button>
    </>
  );
};

export default ChatWidget;
