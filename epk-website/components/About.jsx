import { Text, Spacer } from '@nextui-org/react';
import { Box } from './Box.jsx';
import { motion } from 'framer-motion';
import Carousel from './Carousel.jsx';
import CarouselLarge from './CarouselLarge.jsx';

const About = () => {
  return (
    <Box css={{ px: '$12', mt: '$8', '@xsMax': { px: '$10' } }}>
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        className='lg:pt-20'
      >
        <Text size='$xl' className='lg:text-4xl fontSmall text-2xl'>
          Born and raised in London, England, Ishan is a gifted
          singer-songwriter who honed her skills from a young age. Starting at
          Stagecoach, a performing arts network, Ishan always had a natural
          talent for the stage. She captivated her audiences in plays, dominated
          karaoke nights in her household, and wrote her first songs at the age
          of eight.
        </Text>
      </motion.div>
      <Spacer y={1} />
      <div className='lg:hidden'>
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          <Text size='$lg' className='fontMedium fontSmall text-xl'>
            With a range of musical influences including Lady Gaga, Beyoncé,
            Ariana Grande, and Whitney Houston, Ishan blends elements of R&B,
            Pop, and Soul to create a sound that is uniquely her own. In 2019,
            she released her first EP and continued to release singles
            throughout 2020, building momentum for her upcoming debut album set
            for release in 2022.
          </Text>
        </motion.div>
        <Spacer y={1} />
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          <Text size='$lg' className='fontMedium fontSmall text-xl'>
            Ishan is an artist on the rise, with a promising future ahead. Her
            blend of musical influences and her individual spin on R&B, Pop, and
            Soul music is sure to captivate audiences and establish her as a
            rising star in the industry.
          </Text>
        </motion.div>
        <Spacer y={1} />
      </div>
      <Spacer y={1} />
    </Box>
  );
};

export default About;
