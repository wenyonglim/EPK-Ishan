import HeroImage from '../public/Artwork1.jpeg';
import Image from 'next/image';
import artwork1 from '../public/Artwork1.jpeg';
import artwork2 from '../public/Artwork2.jpeg';
import artwork3 from '../public/Artwork3.jpeg';
import artwork4 from '../public/Artwork4.jpeg';
import artwork5 from '../public/Artwork5.jpeg';
import artwork6 from '../public/Artwork6.jpeg';
import artwork7 from '../public/Artwork7.jpeg';
import artwork8 from '../public/Artwork8.jpg';

const Gallery = () => {
  return (
    <section className='overflow-hidden text-gray-700 '>
      <div className='container px-5 py-2 mx-auto lg:pt-12 lg:px-32'>
        <div className='flex flex-wrap -m-1 md:-m-2'>
          <div className='flex flex-wrap w-1/3'>
            <div className='w-full p-1 md:p-2'>
              <Image
                alt='gallery'
                className='block object-cover object-center w-full h-full rounded-lg'
                src={HeroImage}
              />
            </div>
          </div>
          <div className='flex flex-wrap w-1/3'>
            <div className='w-full p-1 md:p-2'>
              <Image
                alt='gallery'
                className='block object-cover object-center w-full h-full rounded-lg'
                src={HeroImage}
              />
            </div>
          </div>
          <div className='flex flex-wrap w-1/3'>
            <div className='w-full p-1 md:p-2'>
              <Image
                alt='gallery'
                className='block object-cover object-center w-full h-full rounded-lg'
                src={HeroImage}
              />
            </div>
          </div>
          <div className='flex flex-wrap w-1/3'>
            <div className='w-full p-1 md:p-2'>
              <Image
                alt='gallery'
                className='block object-cover object-center w-full h-full rounded-lg'
                src={HeroImage}
              />
            </div>
          </div>
          <div className='flex flex-wrap w-1/3'>
            <div className='w-full p-1 md:p-2'>
              <Image
                alt='gallery'
                className='block object-cover object-center w-full h-full rounded-lg'
                src={HeroImage}
              />
            </div>
          </div>
          <div className='flex flex-wrap w-1/3'>
            <div className='w-full p-1 md:p-2'>
              <Image
                alt='gallery'
                className='block object-cover object-center w-full h-full rounded-lg'
                src={HeroImage}
              />
            </div>
          </div>
          <div className='flex flex-wrap w-1/3'>
            <div className='w-full p-1 md:p-2'>
              <Image
                alt='gallery'
                className='block object-cover object-center w-full h-full rounded-lg'
                src={HeroImage}
              />
            </div>
          </div>
          <div className='flex flex-wrap w-1/3'>
            <div className='w-full p-1 md:p-2'>
              <Image
                alt='gallery'
                className='block object-cover object-center w-full h-full rounded-lg'
                src={HeroImage}
              />
            </div>
          </div>
          <div className='flex flex-wrap w-1/3'>
            <div className='w-full p-1 md:p-2'>
              <Image
                alt='gallery'
                className='block object-cover object-center w-full h-full rounded-lg'
                src={HeroImage}
              />
            </div>
          </div>
          <div className='flex flex-wrap w-1/3'>
            <div className='w-full p-1 md:p-2'>
              <Image
                alt='gallery'
                className='block object-cover object-center w-full h-full rounded-lg'
                src={HeroImage}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
