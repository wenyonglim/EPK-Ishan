import Nav from '@/components/Nav';
import Image from 'next/image';
import Artwork1 from '../public/Artwork1.jpeg';
import MediaCard from '@/components/MediaCard';

const Media = () => {
  return (
    <div>
      <Nav Media={'underline'} />
      <div className='flex justify-center'>
        <div className='py-8 space-y-5 px-3'>
          <MediaCard />
          <MediaCard />
          <MediaCard />
        </div>
        <div className='py-8 space-y-5 px-3'>
          <MediaCard />
          <MediaCard />
          <MediaCard />
        </div>
      </div>
    </div>
  );
};

export default Media;
