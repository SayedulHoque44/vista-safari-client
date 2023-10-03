'use client';

import DestinationDetails from '@/components/destinations/destination-details';
import Error from '@/components/shared/error';
import FooterMini from '@/components/shared/footer/footer-mini';
import Loading from '@/components/shared/loading';
import NavbarFull from '@/components/shared/navbar/navbar-full';
import Button from '@/components/ui/button';
import { useScrollContext } from '@/contexts/scroll-context';
import useFetch from '@/hooks/useFetch';
import { cn } from '@/lib/utils';
import { useRouter } from 'next/navigation';

const DestinationDetailsPage = ({ params }: { params: { id: string } }) => {
  const { isScrolled } = useScrollContext();

  const router = useRouter();

  const {
    data: destination,
    isLoading,
    error,
  } = useFetch(`/api/locations/${params.id}`);

  return (
    <>
      <NavbarFull />
      <main className={cn(isScrolled ? 'mt-20' : 'mt-0')}>
        {isLoading && (
          <div className='flex h-[calc(100vh-5rem)] items-center justify-center'>
            <Loading isLoading={isLoading} />
          </div>
        )}

        {error && (
          <div className='flex h-[calc(100vh-5rem)] flex-col items-center justify-center gap-5'>
            <Error bigFont error={error.message} />
            <Button onClick={() => router.back()} variant='danger'>
              Go Back
            </Button>
          </div>
        )}

        {destination && <DestinationDetails destination={destination} />}
      </main>
      <FooterMini />
    </>
  );
};

export default DestinationDetailsPage;
