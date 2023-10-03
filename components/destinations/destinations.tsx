import useFetch from '@/hooks/useFetch';
import SectionTitle from '../shared/section-title';
import Loading from '../shared/loading';
import Error from '../shared/error';
import LocationCard from './location-card';
import { locationType } from '@/types/location';
import Link from 'next/link';
import { buttonVariants } from '../ui/button';

interface DestinationsProps {
  fromThePage?: boolean;
}

const Destinations: React.FC<DestinationsProps> = ({ fromThePage }) => {
  const { data: destinations, isLoading, error } = useFetch('/api/locations');

  return (
    <section id='destinations' className='section-padding container'>
      <SectionTitle title='Find your destiny' subtitle='Destinations' />

      {isLoading && <Loading isLoading={isLoading} />}

      {error && <Error error={error.message} />}

      {destinations && destinations.length > 0 && (
        <div className='grid grid-cols-1 gap-10 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4'>
          {!fromThePage &&
            destinations
              .slice(0, 8)
              .map((location: locationType, index: number) => (
                <LocationCard
                  key={location._id}
                  location={location}
                  index={index}
                />
              ))}

          {fromThePage &&
            destinations.map((location: locationType, index: number) => (
              <LocationCard
                key={location._id}
                location={location}
                index={index}
              />
            ))}
        </div>
      )}

      {!fromThePage && destinations && destinations.length > 0 && (
        <div className='mt-10 flex justify-center'>
          <Link
            href='/destinations'
            className={buttonVariants({ variant: 'secondary' })}
          >
            View All Destinations
          </Link>
        </div>
      )}
    </section>
  );
};

export default Destinations;
