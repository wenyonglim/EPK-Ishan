import Nav from '@/components/Nav';
import { Text, Spacer } from '@nextui-org/react';
import { motion } from 'framer-motion';

export const Bio = () => {
  return (
    <div>
      <div className='flex justify-center pt-24'>
        <Text
          h1
          size={60}
          css={{
            textGradient: '45deg, $pink600 -20%, $purple700 50%',
          }}
          weight='bold'
          id='About'
          className='absolute z-50'
        >
          About
        </Text>
      </div>
      <div className='p-36'>
        <Spacer y={1} />
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.4 }}
        >
          <Text size='$lg' className='fontMedium p-24'>
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
          transition={{ delay: 0.2, duration: 0.4 }}
        >
          <div id='Music'></div>
          <Text size='$lg' className='fontMedium px-24'>
            Ishan is an artist on the rise, with a promising future ahead. Her
            blend of musical influences and her individual spin on R&B, Pop, and
            Soul music is sure to captivate audiences and establish her as a
            rising star in the industry.
          </Text>
        </motion.div>
      </div>
    </div>
  );
};

export default Bio;
