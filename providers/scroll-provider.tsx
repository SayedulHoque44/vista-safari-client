'use client';

import { useState, useEffect } from 'react';
import ScrollContext, { ScrollContextType } from '@/contexts/scroll-context';

const ScrollProvider = ({ children }: { children: React.ReactNode }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const contextValue: ScrollContextType = { isScrolled };

  return (
    <ScrollContext.Provider value={contextValue}>
      {children}
    </ScrollContext.Provider>
  );
};

export default ScrollProvider;
