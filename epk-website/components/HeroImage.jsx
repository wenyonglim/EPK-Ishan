import Image from 'next/image';
import { motion } from 'framer-motion';
import artwork3 from '../public/Artwork3.jpeg';

const HeroImage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.8 }}
      className='w-full overflow-hidden lg:hidden md:hidden'
    >
      <Image
        src={artwork3}
        alt='Portrait of Ishan'
        width={600}
        className='h-auto w-full'
      />
    </motion.div>
  );
};

export default HeroImage;
