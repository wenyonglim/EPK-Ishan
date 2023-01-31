import Image from 'next/image';
import { motion } from 'framer-motion';
import artwork3 from '../public/Artwork3.jpeg';

const HeroImage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 100 }}
      transition={{ duration: 1.61803398875 }}
      className='lg:hidden md:hidden'
    >
      <Image src={artwork3} alt='Portrait of Ishan' width={600} />
    </motion.div>
  );
};

export default HeroImage;
