import { motion } from 'framer-motion';
import Image from 'next/image';
import artwork3 from '../public/Artwork3.jpeg';

const HeroLarge = () => {
  return <Image src={artwork3} alt='Portrait of Ishan' width={600} />;
};

export default HeroLarge;
