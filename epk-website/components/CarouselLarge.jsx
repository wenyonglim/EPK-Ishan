import Image from 'next/image';
import artwork1 from '../public/Artwork1.jpeg';
import artwork2 from '../public/Artwork2.jpeg';
import artwork3 from '../public/Artwork3.jpeg';
import artwork4 from '../public/Artwork4.jpeg';
import { motion } from 'framer-motion';

const CarouselLarge = () => {
  return (
    <motion.div
      className='carousel carousel-center max-w-md p-4 space-x-4 rounded-box'
      initial={{ y: -100, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 1.5 }}
    >
      <div className='carousel w-full'>
        <div id='item1' className='carousel-item w-full'>
          <Image
            src={artwork1}
            alt='Ishan press artwork'
            className='w-full'
          />
        </div>
        <div id='item2' className='carousel-item w-full'>
          <Image
            src={artwork2}
            alt='Ishan press artwork'
            className='w-full'
          />
        </div>
        <div id='item3' className='carousel-item w-full'>
          <Image
            src={artwork3}
            alt='Ishan press artwork'
            className='w-full'
          />
        </div>
        <div id='item4' className='carousel-item w-full'>
          <Image
            src={artwork4}
            alt='Ishan press artwork'
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
