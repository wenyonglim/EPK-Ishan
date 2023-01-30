import { Text, Spacer, Divider } from '@nextui-org/react';
import About from './About.jsx';
import { Box } from './Box.jsx';
import Hero from './Hero.jsx';
import Carousel from '@/components/Carousel';
import Music from './Music.jsx';
import Media from './Media.jsx';

export const Content = () => (
  <div>
    <Hero />
    <About />
    <Music />
    <div className='md:hidden'>
      <Carousel />
    </div>
    <Text
      h1
      size={60}
      css={{
        textGradient: '45deg, $blue600 -20%, $pink600 50%',
      }}
      weight='bold'
    >
      Media
    </Text>
    <Media />
  </div>
);
