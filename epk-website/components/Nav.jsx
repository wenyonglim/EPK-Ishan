import { Navbar, Button, Link, Text } from '@nextui-org/react';
import { Layout } from './Layout.jsx';
import { AcmeLogo } from './AcmeLogo.jsx';
import { useTheme } from '@nextui-org/react';
import { AiOutlineMenu } from 'react-icons/ai';
import { FaApple, FaSpotify, FaYoutube } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useState } from 'react';

const nav = ({ Home, About, Press, Media }) => {
  const collapseItems = ['Home', 'Music', 'Press Photos', 'Media'];
  const checkHome = (item) => {
    if (item === 'Home') {
      return '#';
    } else {
      return `#${item}`;
    }
  };

  return (
    <Navbar isBordered variant='floating'>
      <Navbar.Brand>
        <Navbar.Toggle aria-label='toggle navigation' className='md:hidden' />
        <Text b color='inherit' className='pl-2'>
          Electronic Press Kit
        </Text>
      </Navbar.Brand>

      {/* Links for Desktops */}
      <Navbar.Content enableCursorHighlight hideIn='xs' variant={Home}>
        <Navbar.Link isActive href='/'>
          Home
        </Navbar.Link>
      </Navbar.Content>
      <Navbar.Content enableCursorHighlight hideIn='xs' variant={About}>
        <Navbar.Link isActive href='/About'>
          About
        </Navbar.Link>
      </Navbar.Content>
      <Navbar.Content enableCursorHighlight hideIn='xs' variant={Press}>
        <Navbar.Link isActive href='/Press'>
          Press
        </Navbar.Link>
      </Navbar.Content>
      <Navbar.Content enableCursorHighlight hideIn='xs' variant={Media}>
        <Navbar.Link isActive href='/Media'>
          Media
        </Navbar.Link>
      </Navbar.Content>

      {/* Links for Mobile */}
      <Navbar.Content>
        <Navbar.Item>
          <Link
            target='_blank'
            href='https://music.apple.com/gb/artist/ishan/1450501527'
          >
            <FaApple />
          </Link>
        </Navbar.Item>
        <Navbar.Item>
          <Link
            target='_blank'
            href='https://open.spotify.com/artist/31H6pWphv3pWESSd03Ifyc?si=ET8qeQCrS3KUhPfSsg9x9A'
          >
            <FaSpotify />
          </Link>
        </Navbar.Item>
        <Navbar.Item>
          <Link
            target='_blank'
            className='pr-2'
            href='https://youtube.com/@sassyprincesss'
          >
            <FaYoutube />
          </Link>
        </Navbar.Item>
      </Navbar.Content>
    </Navbar>
  );
};

export default nav;
