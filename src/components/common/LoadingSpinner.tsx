import { motion } from 'framer-motion';

/** Suspense fallback shown while a lazily loaded route chunk arrives. */
const LoadingSpinner = () => (
  <div className="flex min-h-screen items-center justify-center bg-gray-50 dark:bg-gray-900">
    <div className="text-center">
      <motion.div
        className="inline-block h-16 w-16 rounded-full border-4 border-primary-200 border-t-primary-600"
        animate={{ rotate: 360 }}
        transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
      />
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="mt-4 text-gray-600 dark:text-gray-400"
      >
        Loading experience...
      </motion.p>
    </div>
  </div>
);

export default LoadingSpinner;
