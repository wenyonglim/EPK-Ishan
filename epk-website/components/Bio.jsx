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
          initial={{ x: -20 }}
          whileInView={{ x: 0 }}
          transition={{ delay: 0.2, duration: 0.4 }}
        >
          <Text size='$lg' className='fontMedium p-24'>
            With a range of musical influences including Lady Gaga, Beyoncé,
            Ariana Grande, and Whitney Houston, Ishan blends elements of R&B,
            Pop, and Soul to create a sound that is uniquely her own. Since
            releasing her first EP in 2019 and a run of singles from 2020
            onward, she has continued to shape a catalog rooted in expressive
            vocals, intimate storytelling, and polished pop instincts.
          </Text>
        </motion.div>
        <Spacer y={1} />
        <motion.div
          initial={{ x: -20 }}
          whileInView={{ x: 0 }}
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
