import { Suspense } from 'react';
import { AnimatePresence } from 'framer-motion';
import ChatWidget from '@/components/chat/ChatWidget';
import BackToTopButton from '@/components/common/BackToTopButton';
import LoadingSpinner from '@/components/common/LoadingSpinner';
import ScrollToTop from '@/components/common/ScrollToTop';
import Footer from '@/components/layout/Footer';
import Navbar from '@/components/layout/Navbar';
import AppRoutes from '@/routes/AppRoutes';

const App = () => (
  <div className="min-h-screen bg-gray-50 transition-colors duration-300 dark:bg-gray-900">
    <Navbar />
    <BackToTopButton />
    <ScrollToTop />
    <main>
      <AnimatePresence mode="wait">
        <Suspense fallback={<LoadingSpinner />}>
          <AppRoutes />
        </Suspense>
      </AnimatePresence>
    </main>
    <Footer />
    <ChatWidget />
  </div>
);

export default App;
