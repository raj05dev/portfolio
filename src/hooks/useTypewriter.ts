import { useEffect, useState } from 'react';

interface UseTypewriterOptions {
  words: string[];
  typeSpeed?: number;
  deleteSpeed?: number;
  delayBetweenWords?: number;
}

interface UseTypewriterResult {
  text: string;
  showCursor: boolean;
}

/**
 * Types each word out one character at a time, pauses, deletes it, then moves
 * on to the next — looping forever. Also drives the blinking caret.
 */
export const useTypewriter = ({
  words,
  typeSpeed = 100,
  deleteSpeed = 50,
  delayBetweenWords = 2000,
}: UseTypewriterOptions): UseTypewriterResult => {
  const [wordIndex, setWordIndex] = useState(0);
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    if (!words || words.length === 0) return;

    const timeout = setTimeout(
      () => {
        const currentWord = words[wordIndex];

        if (isDeleting) {
          setText((previous) => previous.substring(0, previous.length - 1));
          if (text.length === 1) {
            setIsDeleting(false);
            setWordIndex((previous) => (previous + 1) % words.length);
          }
          return;
        }

        setText(currentWord.substring(0, text.length + 1));
        if (text.length === currentWord.length) {
          setTimeout(() => setIsDeleting(true), delayBetweenWords);
        }
      },
      isDeleting ? deleteSpeed : typeSpeed,
    );

    return () => clearTimeout(timeout);
  }, [text, isDeleting, wordIndex, words, typeSpeed, deleteSpeed, delayBetweenWords]);

  useEffect(() => {
    const interval = setInterval(() => setShowCursor((previous) => !previous), 500);
    return () => clearInterval(interval);
  }, []);

  return { text, showCursor };
};
