'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Space_Grotesk } from 'next/font/google';
import { FaMapLocationDot } from 'react-icons/fa6';

const spaceGrotesk = Space_Grotesk({ subsets: ['latin'] });

const Hero = () => {
  return (
    <section className='section-padding container relative grid min-h-screen grid-rows-2 gap-10'>
      {/* TOP */}
      <div className='grid h-full w-full grid-cols-[20rem_auto_30rem] gap-5'>
        {/* LEFT */}
        <div className='flex h-full w-full items-center'>
          <div className='eq group h-[15rem] w-[15rem] overflow-hidden rounded-full hover:scale-90'>
            <Image
              src='https://images.pexels.com/photos/697244/pexels-photo-697244.jpeg?auto=compress&cs=tinysrgb&w=1600'
              alt='Four Person Standing at Top of Grassy Mountain'
              width={640}
              height={640}
              priority
              className='eq h-full w-full object-cover group-hover:scale-125'
            />
          </div>
        </div>

        {/* MID */}
        <div className='flex h-full w-full flex-col justify-center gap-5'>
          <h1 className={spaceGrotesk.className}>Epic Journeys Await</h1>
          <h6>
            Explore captivating destinations, from ancient wonders to natural
            marvels. Our expertly crafted tours offer unforgettable adventures
            and cherished memories.
          </h6>
        </div>

        {/* RIGHT */}
        <div className='flex h-full w-full items-center'>
          <div className='eq group h-[30rem] w-full overflow-hidden rounded-full hover:scale-90'>
            <Image
              src='https://images.pexels.com/photos/2679814/pexels-photo-2679814.jpeg?auto=compress&cs=tinysrgb&w=1600'
              alt='Two Person Walking on Unpaved Road'
              width={768}
              height={768}
              priority
              className='eq h-full w-full object-cover group-hover:scale-125'
            />
          </div>
        </div>
      </div>

      {/* BOTTOM */}
      <div className='grid h-full w-full grid-cols-[20rem_auto] gap-5'>
        {/* LEFT */}
        <div className='flex h-full w-full flex-col justify-center gap-10'>
          <div>
            <h2>12.5K+</h2>
            <h6>Happy Customers</h6>
          </div>
          <div>
            <h2>64</h2>
            <h6>Locations</h6>
          </div>
          <div>
            <h2>15K+</h2>
            <h6>Followers</h6>
          </div>
        </div>

        {/* RIGHT */}
        <div className='grid h-full w-full grid-cols-2 gap-10'>
          <div className='grid h-full w-full grid-cols-2 gap-5'>
            <div className='eq group h-full w-full overflow-hidden rounded-[8.375rem] hover:scale-90'>
              <Image
                src='https://images.pexels.com/photos/7625040/pexels-photo-7625040.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                alt='People Hiking in a Forest'
                width={360}
                height={640}
                priority
                className='eq h-full w-full object-cover group-hover:scale-125'
              />
            </div>
            <div className='flex h-full w-full flex-col justify-center gap-5'>
              <h4 className={spaceGrotesk.className}>
                Adventure with Confidence
              </h4>
              <h6>Enjoy thrilling adventures with peace of mind.</h6>
            </div>
          </div>

          <div className='grid h-full w-full grid-cols-2 gap-5'>
            <div className='eq group h-full w-full overflow-hidden rounded-[8.375rem] hover:scale-90'>
              <Image
                src='https://images.pexels.com/photos/9586538/pexels-photo-9586538.jpeg?auto=compress&cs=tinysrgb&w=1600'
                alt='Women Running on a Field while Holding Hands'
                width={360}
                height={640}
                priority
                className='eq h-full w-full object-cover group-hover:scale-125'
              />
            </div>
            <div className='flex h-full w-full flex-col justify-center gap-5'>
              <h4 className={spaceGrotesk.className}>
                Unbeatable Value Adventures
              </h4>
              <h6>
                Discover incredible experiences without breaking the bank.
              </h6>
            </div>
          </div>
        </div>
      </div>

      {/* CTA BUTTON */}
      <Link
        href='/#destinations'
        className='eq group absolute left-1/2 top-1/2 z-[1] h-28 w-28 -translate-x-1/2 -translate-y-1/2 cursor-pointer overflow-hidden rounded-full bg-gradient-to-tr from-black to-black/80 hover:w-72'
      >
        <span className='eq absolute left-1/2 top-1/2 z-[2] -translate-x-1/2 -translate-y-1/2 text-5xl text-white group-hover:left-10 group-hover:text-3xl'>
          <FaMapLocationDot />
        </span>
        <span className='eq absolute left-full top-1/2 z-[2] -translate-y-1/2 whitespace-nowrap text-xl text-white group-hover:left-[4.5rem]'>
          Explore Destinations
        </span>
      </Link>
    </section>
  );
};

export default Hero;
