import { useEffect, useState } from 'react';

/**
 * Reports whether the page has scrolled past `threshold` pixels.
 * Used by the sticky navbar (50px) and the back-to-top button (300px).
 */
export const useScrollPosition = (threshold = 50): boolean => {
  const [isScrolled, setIsScrolled] = useState(
    () => typeof window !== 'undefined' && window.scrollY > threshold,
  );

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > threshold);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [threshold]);

  return isScrolled;
};
