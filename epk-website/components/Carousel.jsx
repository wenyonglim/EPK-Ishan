import Image from 'next/image';
import artwork1 from '../public/Artwork1.jpeg';
import artwork2 from '../public/Artwork2.jpeg';
import artwork3 from '../public/Artwork3.jpeg';
import artwork4 from '../public/Artwork4.jpeg';
import artwork5 from '../public/Artwork5.jpeg';
import artwork6 from '../public/Artwork6.jpeg';
import artwork7 from '../public/Artwork7.jpeg';
import artwork8 from '../public/Artwork8.JPEG';
import { Button } from '@nextui-org/react';

const Carousel = () => {
  return (
    <div className='carousel carousel-center max-w-md p-4 space-x-4 rounded-box'>
      <div className='carousel-item'>
        <Image
          src={artwork1}
          width={300}
          height={450}
          alt='Ishan Artwork'
          className='rounded-box'
        />
      </div>
      <div className='carousel-item'>
        <Image
          src={artwork2}
          width={300}
          height={450}
          alt='Ishan Artwork'
          className='rounded-box'
        />
      </div>
      <div className='carousel-item'>
        <Image
          src={artwork3}
          width={300}
          height={450}
          alt='Ishan Artwork'
          className='rounded-box'
        />
      </div>
      <div className='carousel-item'>
        <Image
          src={artwork5}
          width={300}
          height={450}
          alt='Ishan Artwork'
          className='rounded-box'
        />
      </div>
      <div className='carousel-item'>
        <Image
          src={artwork6}
          width={300}
          height={450}
          alt='Ishan Artwork'
          className='rounded-box'
        />
      </div>
      <div className='carousel-item'>
        <Image
          src={artwork7}
          width={300}
          height={450}
          alt='Ishan Artwork'
          className='rounded-box'
        />
      </div>
      <div className='carousel-item'>
        <Image
          src={artwork8}
          width={300}
          height={450}
          alt='Ishan Artwork'
          className='rounded-box'
        />
      </div>
    </div>
  );
};

export default Carousel;
