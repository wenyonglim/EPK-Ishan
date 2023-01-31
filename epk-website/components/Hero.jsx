import Image from 'next/image';
import artwork3 from '../public/Artwork3.jpeg';
import { Text } from '@nextui-org/react';
import { useState } from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  // ? needs gif image
  const [isGif, setIsGif] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 100 }}
      transition={{ duration: 2 }}
    >
      <Text
        h1
        size={70}
        css={{
          textGradient: '45deg, $blue600 -20%, $pink600 50%',
        }}
        className='pl-8 absolute'
        weight='bold'
        id='About'
      >
        Ishan
      </Text>
      <Image
        onClick={console.log('clicked image')}
        src={artwork3}
        alt='Portrait of Ishan'
      />
    </motion.div>
  );
};

export default Hero;
