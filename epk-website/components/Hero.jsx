import Image from 'next/image';
import artwork3 from '../public/Artwork3.jpeg';
import { Text } from '@nextui-org/react';

const Hero = () => {
  return (
    <div>
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
      <Image className='' src={artwork3} alt='Photograph of Ishan' />
    </div>
  );
};

export default Hero;
