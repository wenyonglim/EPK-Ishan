import { Text, Spacer, Divider, Button, Grid, Link } from '@nextui-org/react';
import About from './About.jsx';
import { Box } from './Box.jsx';
import Hero from './Hero.jsx';
import Carousel from '@/components/Carousel';
import Music from './Music.jsx';
import Media from './Media.jsx';
import Footer from './Footer.jsx';
import HeroLarge from './HeroLarge.jsx';
import CarouselLarge from './CarouselLarge.jsx';
export const ContentHome = () => (
  <div>
    <div className='md:flex'>
      <Hero />
      <About />
    </div>
    <Music />
    <div id='Press Photos'></div>
    <div className='flex justify-center pt-8 lg:hidden'>
      <Text
        h1
        size={60}
        css={{
          textGradient: '45deg, $blue600 -20%, $pink600 50%',
        }}
        weight='bold'
        id='About'
        className='absolute z-50'
      >
        Press Photos
      </Text>
      <Carousel />
    </div>
    <div className='flex justify-center lg:hidden'>
      <Link
        target='_blank'
        href='https://drive.google.com/drive/folders/1EfyLZzjpIJMg-vnDGmYqp5ZNxkBCD4y8?usp=sharing'
      >
        <Button
          id='Media'
          shadow
          color='secondary'
          auto
          className='z-50'
          css={{
            borderRadius: '$xs', // radii.xs
            border: '$space$1 solid transparent',
            color: '$pink800',
            height: '$12', // space[12]
          }}
        >
          Download Press Photos
        </Button>
      </Link>
    </div>

    <div className='lg:hidden'>
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
    </div>
  </div>
);
