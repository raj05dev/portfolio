import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import SEO from '@/components/common/SEO';

const NotFound = () => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="flex min-h-screen items-center justify-center bg-gradient-to-br from-primary-50 to-secondary-50 pt-20 dark:from-gray-900 dark:to-gray-800"
  >
    <SEO title="Page not found | Raj Kumar" canonical="https://www.rajkumar.dev/" />
    <div className="container-custom text-center">
      <h1 className="gradient-text mb-4 text-7xl font-bold md:text-9xl">404</h1>
      <h2 className="mb-4 text-3xl font-bold text-gray-900 dark:text-white">Page not found</h2>
      <p className="mx-auto mb-8 max-w-md text-lg text-gray-600 dark:text-gray-400">
        The page you're looking for doesn't exist or has been moved.
      </p>
      <Link to="/" className="btn-primary inline-flex items-center">
        <ArrowLeft className="mr-2" size={20} />
        Back to Home
      </Link>
    </div>
  </motion.div>
);

export default NotFound;
