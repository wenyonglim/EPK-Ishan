import { Text, Spacer, Divider } from '@nextui-org/react';
import About from './About.jsx';
import { Box } from './Box.jsx';
import Hero from './Hero.jsx';
import Carousel from '@/components/Carousel';

export const Content = () => (
  <div>
    <Hero />
    <About />
    <div className='md:hidden'>
      <Carousel />
    </div>
  </div>
);
