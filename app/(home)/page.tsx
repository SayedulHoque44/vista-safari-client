'use client';

import Destinations from '@/components/destinations/destinations';
import Hero from '@/components/home/hero';
import FooterFull from '@/components/shared/footer/footer-full';
import NavbarFull from '@/components/shared/navbar/navbar-full';
import { useScrollContext } from '@/contexts/scroll-context';
import { cn } from '@/lib/utils';

const HomePage = () => {
  const { isScrolled } = useScrollContext();

  return (
    <>
      <NavbarFull />
      <main className={cn(isScrolled ? 'mt-20' : 'mt-0')}>
        <Hero />
        <Destinations />
      </main>
      <FooterFull />
    </>
  );
};

export default HomePage;
