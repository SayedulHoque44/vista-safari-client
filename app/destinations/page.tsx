'use client';

import Destinations from '@/components/destinations/destinations';
import FooterMini from '@/components/shared/footer/footer-mini';
import NavbarFull from '@/components/shared/navbar/navbar-full';
import { useScrollContext } from '@/contexts/scroll-context';
import { cn } from '@/lib/utils';

const DestinationsPage = () => {
  const { isScrolled } = useScrollContext();

  return (
    <>
      <NavbarFull />
      <main className={cn(isScrolled ? 'mt-20' : 'mt-0')}>
        <Destinations fromThePage />
      </main>
      <FooterMini />
    </>
  );
};

export default DestinationsPage;
