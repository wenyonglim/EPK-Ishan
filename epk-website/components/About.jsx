import { Spacer } from '@nextui-org/react';
import { Box } from './Box.jsx';
import { motion } from 'framer-motion';
import Carousel from './Carousel.jsx';
import CarouselLarge from './CarouselLarge.jsx';

const About = () => {
  return (
    <Box css={{ px: '$12', mt: '$8', '@xsMax': { px: '$10' } }}>
      <motion.div
        initial={{ x: -20 }}
        whileInView={{ x: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        className='lg:pt-20'
      >
        <p className='lg:text-4xl fontSmall text-2xl'>
          Born and raised in London, England, Ishan is a gifted
          singer-songwriter who honed her skills from a young age. Starting at
          Stagecoach, a performing arts network, Ishan always had a natural
          talent for the stage. She captivated her audiences in plays, dominated
          karaoke nights in her household, and wrote her first songs at the age
          of eight.
        </p>
      </motion.div>
      <Spacer y={1} />
      <div className='lg:hidden'>
        <motion.div
          initial={{ x: -20 }}
          whileInView={{ x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          <p className='fontMedium fontSmall text-xl'>
            With a range of musical influences including Lady Gaga, Beyoncé,
            Ariana Grande, and Whitney Houston, Ishan blends elements of R&B,
            Pop, and Soul to create a sound that is uniquely her own. Since
            releasing her first EP in 2019 and a run of singles from 2020
            onward, she has continued to shape a catalog rooted in expressive
            vocals, intimate storytelling, and polished pop instincts.
          </p>
        </motion.div>
        <Spacer y={1} />
        <motion.div
          initial={{ x: -20 }}
          whileInView={{ x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          <p className='fontMedium fontSmall text-xl'>
            Ishan is an artist on the rise, with a promising future ahead. Her
            blend of musical influences and her individual spin on R&B, Pop, and
            Soul music is sure to captivate audiences and establish her as a
            rising star in the industry.
          </p>
        </motion.div>
        <Spacer y={1} />
      </div>
      <Spacer y={1} />
    </Box>
  );
};

export default About;
