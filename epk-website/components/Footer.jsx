import { FaApple, FaSpotify, FaYoutube } from 'react-icons/fa';
import { Link, Text } from '@nextui-org/react';

const Footer = () => {
  return (
    <footer className=' overflow-auto footer items-center p-4 bg-neutral text-neutral-content'>
      <div className='items-center grid-flow-col'>
        <p>Copyright © 2023 - All rights reserved</p>
      </div>
      <div className='grid-flow-col gap-4 md:place-self-center md:justify-self-end'>
        <Link
          color='text'
          target='_blank'
          href='https://music.apple.com/gb/artist/ishan/1450501527'
        >
          <FaApple />
        </Link>
        <Link
          color='text'
          target='_blank'
          href='https://open.spotify.com/artist/31H6pWphv3pWESSd03Ifyc?si=ET8qeQCrS3KUhPfSsg9x9A'
        >
          <FaSpotify />
        </Link>
        <Link
          color='text'
          target='_blank'
          className='pr-2'
          href='https://youtube.com/@sassyprincesss'
        >
          <FaYoutube />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
