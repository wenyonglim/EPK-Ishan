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
        transition={{ delay: 0.2, duration: 0.4 }}
        className='lg:pt-20'
      >
        <Text size='$xl' className='fontLarge'>
          Born and raised in London, England singer-songwriter Ishan immersed
          herself into her artistry from a young age. Equipped with a deep
          passion for performing and a desire to express herself through music
          and her craft, those aspects of Ishan’s artistry began to her sculpt
          her into the artist she is today.
        </Text>
      </motion.div>
      <Spacer y={1} />
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2, duration: 0.4 }}
      >
        <Text size='$lg' className='fontMedium'>
          Starting from Stagecoach, a performing arts network based in the UK,
          growing up Ishan was always her own local superstar in her own right.
          From being the star at numerous plays, being the queen of karaoke in
          her household, writing songs at every opportunity from the age of 8,
          Ishan was destined to have her voice heard.
        </Text>
      </motion.div>
      <Spacer y={1} />
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2, duration: 0.4 }}
      >
        <Text size='$lg' className='fontMedium'>
          Ishan attains a plethora of musical influences, ranging from the
          greatest divas; Lady Gaga, Beyoncé, Erykah Badu, Whitney Houston &
          Sade to the Pop Princesses of the late 2000s; Selena Gomez, Ariana
          Grande and Miley Cyrus to name a few. Her sound combined the nuances
          of her musical influences with her own individual spin to create a
          blend of R&B, Pop, Soul catered perfectly to Ishan’s own identity.
        </Text>
      </motion.div>
      <Spacer y={1} />
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2, duration: 0.4 }}
      >
        <div id='Music'></div>
        <Text size='$lg' className='fontMedium'>
          After a 2019 EP release and a string of singles in 2020, Ishan is
          gearing up to release more music in 2021. With a promising debut album
          in the works set to be released later on in 2022 destined to display a
          blend of her musical facets that undoubtedly will captivate her
          audience respectively. Ishan is one to keep an eye on in 2023!
        </Text>
      </motion.div>
      <Spacer y={1} />
    </Box>
  );
};

export default About;
