import { motion } from 'framer-motion';
import { useTypewriter } from '@/hooks/useTypewriter';

interface TypewriterTextProps {
  words: string[];
  className?: string;
  typeSpeed?: number;
  deleteSpeed?: number;
  delayBetweenWords?: number;
}

const TypewriterText = ({
  words,
  className = '',
  typeSpeed = 100,
  deleteSpeed = 50,
  delayBetweenWords = 2000,
}: TypewriterTextProps) => {
  const { text, showCursor } = useTypewriter({
    words,
    typeSpeed,
    deleteSpeed,
    delayBetweenWords,
  });

  return (
    <span className={className}>
      <span className="inline-block min-w-[4ch]">{text}</span>
      <motion.span
        animate={{ opacity: showCursor ? 1 : 0 }}
        transition={{ duration: 0.2 }}
        className="text-primary-600 dark:text-primary-400"
      >
        |
      </motion.span>
    </span>
  );
};

export default TypewriterText;
