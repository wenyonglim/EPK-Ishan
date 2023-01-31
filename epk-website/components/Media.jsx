import { Cards } from './Cards';
import media1 from '../public/Media1.jpg';
import media2 from '../public/Media2.jpg';
import media3 from '../public/Media3.jpg';
import media4 from '../public/Media4.jpg';
import { motion } from 'framer-motion';

export default function Media() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -200 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
    >
      <Cards
        title='I think you gotta go'
        description='Music Video'
        btn='Watch'
        img={media1}
        link='https://youtu.be/Kzq6vIZ-5rE'
      />
      <Cards
        title='Do you wanna chill?'
        description='Music Video'
        btn='Watch'
        img={media2}
        link='https://youtu.be/D7n04b54g4E'
      />
      <Cards
        title='Playground'
        description='Music Video'
        btn='Watch'
        img={media3}
        link='https://youtu.be/fPOWbf8S6Iw'
      />
      <Cards
        title='Weekend.'
        description='Music Video'
        btn='Watch'
        img={media4}
        link='https://youtu.be/JubDA4i65uA'
      />
    </motion.div>
  );
}
