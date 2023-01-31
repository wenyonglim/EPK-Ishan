import Image from 'next/image';
import artwork1 from '../public/Artwork1.jpeg';
import artwork2 from '../public/Artwork2.jpeg';
import artwork3 from '../public/Artwork3.jpeg';
import artwork4 from '../public/Artwork4.jpeg';
import artwork5 from '../public/Artwork5.jpeg';
import artwork6 from '../public/Artwork6.jpeg';
import artwork7 from '../public/Artwork7.jpeg';
import artwork8 from '../public/Artwork8.jpg';
import { Button } from '@nextui-org/react';
import { Text } from '@nextui-org/react';
import { motion } from 'framer-motion';

const CarouselLarge = () => {
  return (
    <motion.div
      className='carousel carousel-center max-w-md p-4 space-x-4 rounded-box'
      initial={{ y: -100, opacity: 0 }}
      whileInView={{ y: 0, opacity: 100 }}
      transition={{ duration: 1.5 }}
    >
      <div className='carousel w-full'>
        <div id='item1' className='carousel-item w-full'>
          <Image
            src='/images/stock/photo-1625726411847-8cbb60cc71e6.jpg'
            className='w-full'
          />
        </div>
        <div id='item2' className='carousel-item w-full'>
          <Image
            src='/images/stock/photo-1609621838510-5ad474b7d25d.jpg'
            className='w-full'
          />
        </div>
        <div id='item3' className='carousel-item w-full'>
          <Image
            src='/images/stock/photo-1414694762283-acccc27bca85.jpg'
            className='w-full'
          />
        </div>
        <div id='item4' className='carousel-item w-full'>
          <Image
            src='/images/stock/photo-1665553365602-b2fb8e5d1707.jpg'
            className='w-full'
          />
        </div>
      </div>
      <div className='flex justify-center w-full py-2 gap-2'>
        <a href='#item1' className='btn btn-xs'>
          1
        </a>
        <a href='#item2' className='btn btn-xs'>
          2
        </a>
        <a href='#item3' className='btn btn-xs'>
          3
        </a>
        <a href='#item4' className='btn btn-xs'>
          4
        </a>
      </div>
    </motion.div>
  );
};

export default CarouselLarge;
