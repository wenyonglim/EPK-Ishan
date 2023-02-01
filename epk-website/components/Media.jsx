import Cards from './Cards.jsx';
import media1 from '../public/Media1.jpg';
import media2 from '../public/Media2.jpg';
import media3 from '../public/Media3.jpg';
import media4 from '../public/Media4.jpg';
import { motion } from 'framer-motion';
import { Text, Link } from '@nextui-org/react';

export default function Media() {
  return (
    <div>
      <Text
        h1
        size={60}
        css={{
          textGradient: '45deg, $blue600 -20%, $pink600 50%',
        }}
        weight='bold'
        id='About'
        className='lg:flex justify-center lg:pb-8 lg:pt-24 z-50 hidden'
      >
        Media
      </Text>
      <Cards></Cards>
    </div>
  );
}
