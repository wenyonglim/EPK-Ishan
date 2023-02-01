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
import artwork9 from '../public/Artwork9.jpeg';
import artwork10 from '../public/Artwork10.jpg';
import { Text, Link } from '@nextui-org/react';

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
                src={artwork1}
              />
            </div>
          </div>
          <div className='flex flex-wrap w-1/3'>
            <div className='w-full p-1 md:p-2'>
              <Image
                alt='gallery'
                className='block object-cover object-center w-full h-full rounded-lg'
                src={artwork2}
              />
            </div>
          </div>
          <div className='flex flex-wrap w-1/3'>
            <div className='w-full p-1 md:p-2'>
              <Image
                alt='gallery'
                className='block object-cover object-center w-full h-full rounded-lg'
                src={artwork3}
              />
            </div>
          </div>
          <div className='flex flex-wrap w-1/3'>
            <div className='w-full p-1 md:p-2'>
              <Image
                alt='gallery'
                className='block object-cover object-center w-full h-full rounded-lg'
                src={artwork4}
              />
            </div>
          </div>
          <div className='flex flex-wrap w-1/3'>
            <div className='w-full p-1 md:p-2'>
              <Image
                alt='gallery'
                className='block object-cover object-center w-full h-full rounded-lg'
                src={artwork5}
              />
            </div>
          </div>
          <div className='flex flex-wrap w-1/3'>
            <div className='w-full p-1 md:p-2'>
              <Image
                alt='gallery'
                className='block object-cover object-center w-full h-full rounded-lg'
                src={artwork6}
              />
            </div>
          </div>
          <div className='flex flex-wrap w-1/3'>
            <div className='w-full p-1 md:p-2'>
              <Image
                alt='gallery'
                className='block object-cover object-center w-full h-full rounded-lg'
                src={artwork7}
              />
            </div>
          </div>
          <div className='flex flex-wrap w-1/3'>
            <div className='w-full p-1 md:p-2'>
              <Image
                alt='gallery'
                className='block object-cover object-center w-full h-full rounded-lg'
                src={artwork8}
              />
            </div>
          </div>
          <div className='flex flex-wrap w-1/3'>
            <div className='w-full p-1 md:p-2'>
              <Image
                alt='gallery'
                className='block object-cover object-center w-full h-full rounded-lg'
                src={artwork9}
              />
            </div>
          </div>
          <div className='flex flex-wrap w-1/3'>
            <div className='w-full p-1 md:p-2'>
              <Image
                alt='gallery'
                className='block object-cover object-center w-full h-full rounded-lg'
                src={artwork10}
              />
            </div>
            <div className='w-full p-1 md:p-2'>
              <Link
                target='_blank'
                href='https://drive.google.com/drive/folders/1EfyLZzjpIJMg-vnDGmYqp5ZNxkBCD4y8?usp=sharing'
                isExternal
              >
                <Text
                  h1
                  size={30}
                  css={{
                    textGradient: '45deg, $yellow600 -20%, $red600 100%',
                  }}
                  weight='bold'
                >
                  Download Photos
                </Text>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
