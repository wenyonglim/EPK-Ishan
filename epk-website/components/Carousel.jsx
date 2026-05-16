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

const Carousel = () => {
  return (
    <motion.div
      className='mobile-carousel mx-auto flex w-full max-w-sm snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-4'
      initial={{ y: 32, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.6 }}
    >
      <div className='carousel-item flex-none snap-center'>
        <Image
          src={artwork1}
          width={300}
          height={450} 
          alt='Ishan Artwork'
          className='w-[78vw] max-w-[300px] rounded-box'
        />
      </div>
      <div className='carousel-item flex-none snap-center'>
        <Image
          src={artwork2}
          width={300}
          height={450}
          alt='Ishan Artwork'
          className='w-[78vw] max-w-[300px] rounded-box'
        />
      </div>
      <div className='carousel-item flex-none snap-center'>
        <Image
          src={artwork3}
          width={300}
          height={450}
          alt='Ishan Artwork'
          className='w-[78vw] max-w-[300px] rounded-box'
        />
      </div>
      <div className='carousel-item flex-none snap-center'>
        <Image
          src={artwork5}
          width={300}
          height={450}
          alt='Ishan Artwork'
          className='w-[78vw] max-w-[300px] rounded-box'
        />
      </div>
      <div className='carousel-item flex-none snap-center'>
        <Image
          src={artwork6}
          width={300}
          height={450}
          alt='Ishan Artwork'
          className='w-[78vw] max-w-[300px] rounded-box'
        />
      </div>
      <div className='carousel-item flex-none snap-center'>
        <Image
          src={artwork7}
          width={300}
          height={450}
          alt='Ishan Artwork'
          className='w-[78vw] max-w-[300px] rounded-box'
        />
      </div>
      <div className='carousel-item flex-none snap-center'>
        <Image
          src={artwork8}
          width={300}
          height={450}
          alt='Ishan Artwork'
          className='w-[78vw] max-w-[300px] rounded-box'
        />
      </div>
    </motion.div>
  );
};

export default Carousel;
