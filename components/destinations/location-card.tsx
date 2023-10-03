'use client';

import { locationType } from '@/types/location';
import Image from 'next/image';
import Link from 'next/link';
import { buttonVariants } from '../ui/button';
import { motion } from 'framer-motion';
import { locationCardAnime } from '@/utils/anim';

interface LocationCardProps {
  location: locationType;
  index: number;
}

const LocationCard: React.FC<LocationCardProps> = ({ location, index }) => {
  return (
    <div className='w-full overflow-hidden'>
      <motion.div
        variants={locationCardAnime}
        custom={index}
        initial='intial'
        whileInView='enter'
        className='w-full overflow-hidden rounded-xl border border-cream bg-white p-5'
      >
        <div className='group h-[12rem] w-full overflow-hidden rounded-lg'>
          <Image
            src={location.photoUrl}
            alt={location.name}
            width={640}
            height={360}
            priority
            className='eq h-full w-full object-cover group-hover:scale-125'
          />
        </div>

        <div className='mt-5 flex flex-col gap-2.5'>
          <h5>{location.name}</h5>
          <hr />
          <p className='text-black/60'>
            {location.description.substring(0, 100)}...
          </p>
          <p className='font-semibold uppercase tracking-wider'>
            Tour Package{location.tourPackages.length > 1 ? 's' : null}:{' '}
            {location.tourPackages.length}
          </p>
          <Link
            href={`/destinations/${location._id}`}
            className={buttonVariants()}
          >
            View Details
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default LocationCard;
