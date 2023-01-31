import Image from 'next/image';
import { Text } from '@nextui-org/react';
import { useState } from 'react';
import { motion } from 'framer-motion';
import HeroImage from './HeroImage';

const Hero = () => {
  // ? needs gif image
  const [isGif, setIsGif] = useState(false);
  return (
    <div>
      <Text
        h1
        size={70}
        css={{
          textGradient: '45deg, $blue600 -20%, $pink600 50%',
        }}
        className='pl-8 absolute z-50 md:left-0.5 md:static'
        weight='bold'
        id='About'
      >
        Ishan
      </Text>
      <HeroImage />
    </div>
  );
};

export default Hero;
