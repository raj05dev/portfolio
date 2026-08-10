import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { ChatProvider } from '@/context/ChatContext';
import { ThemeProvider } from '@/context/ThemeContext';
import './index.css';
import emailjs from '@emailjs/browser';
import { EMAILJS_PUBLIC_KEY } from '@/lib/environment';


emailjs.init({
  publicKey: EMAILJS_PUBLIC_KEY,
  limitRate: { throttle: 10000 },
});


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider>
      <ChatProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ChatProvider>
    </ThemeProvider>
  </StrictMode>,
);
