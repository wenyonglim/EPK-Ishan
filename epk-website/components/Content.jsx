import { Text, Spacer, Divider, Button, Grid } from '@nextui-org/react';
import About from './About.jsx';
import { Box } from './Box.jsx';
import Hero from './Hero.jsx';
import Carousel from '@/components/Carousel';
import Music from './Music.jsx';
import Media from './Media.jsx';
import Footer from './Footer.jsx';

export const Content = () => (
  <div>
    <Hero />
    <About />
    <Music />
    <div className='md:hidden flex justify-center pt-8'>
      <Text
        h1
        size={60}
        css={{
          textGradient: '45deg, $blue600 -20%, $pink600 50%',
        }}
        weight='bold'
        id='About'
        className='absolute'
      >
        Press Photos
      </Text>
      <Carousel />
    </div>
    <div className='flex justify-center'>
      <Button
        shadow
        color='secondary'
        auto
        className='z-0'
        css={{
          borderRadius: '$xs', // radii.xs
          border: '$space$1 solid transparent',
          color: '$pink800',
          height: '$12', // space[12]
        }}
      >
        Download Press Photos
      </Button>
    </div>

    <Text
      h1
      size={60}
      css={{
        textGradient: '45deg, $purple600 -20%, $pink600 100%',
      }}
      weight='bold'
      className='pt-12'
    >
      Media
    </Text>
    <Media />
    <Footer />
  </div>
);
