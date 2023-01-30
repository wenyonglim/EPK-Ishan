import Image from 'next/image';
import artwork3 from '../public/Artwork3.jpeg';

const Hero = () => {
  return (
    <div>
      <Image className='' src={artwork3} alt='Photograph of Ishan' />
    </div>
  );
};

export default Hero;
