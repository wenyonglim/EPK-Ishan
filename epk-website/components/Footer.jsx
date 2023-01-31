import { FaApple, FaSpotify, FaYoutube } from 'react-icons/fa';
import { Link, Text } from '@nextui-org/react';

const Footer = () => {
  return (
    <footer className=' overflow-auto footer items-center p-4 bg-neutral text-neutral-content'>
      <div className='items-center grid-flow-col'>
        <p>Copyright © 2023 - All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
