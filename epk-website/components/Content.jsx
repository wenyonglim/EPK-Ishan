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
    <Media />
  </div>
);
