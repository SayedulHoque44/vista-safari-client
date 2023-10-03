'use client';

import { createContext, useContext } from 'react';

export interface ScrollContextType {
  isScrolled: boolean;
}

const ScrollContext = createContext<ScrollContextType | undefined>(undefined);

export const useScrollContext = (): ScrollContextType => {
  const context = useContext(ScrollContext);

  if (context === undefined) {
    throw new Error('useScrollContext must be used in a ScrollProvider');
  }

  return context;
};

export default ScrollContext;
