import { Navbar, Button, Link, Text } from '@nextui-org/react';
import { Layout } from './Layout.js';
import { AcmeLogo } from './AcmeLogo.js';
import { useTheme } from '@nextui-org/react';
import { AiOutlineMenu } from 'react-icons/ai';
import { FaApple, FaSpotify, FaYoutube } from 'react-icons/fa';

const nav = () => {
  const collapseItems = ['About', 'Music', 'Media', 'Press Photos'];

  return (
    <Layout>
      <Navbar isBordered variant='floating'>
        <Navbar.Brand>
          <Navbar.Toggle aria-label='toggle navigation' />
          <Text b color='inherit' className='pl-2'>
            Electronic Press Kit
          </Text>
        </Navbar.Brand>

        {/* Links for Desktops */}
        <Navbar.Content enableCursorHighlight hideIn='xs' variant='underline'>
          <Navbar.Link isActive href='#'>
            Home
          </Navbar.Link>
        </Navbar.Content>

        {/* Links for Mobile */}
        <Navbar.Content>
          {/* // ! Social Media Links */}
          <Navbar.Item>
            <Link>
              <FaApple />
            </Link>
          </Navbar.Item>
          <Navbar.Item>
            <Link>
              <FaSpotify />
            </Link>
          </Navbar.Item>
          <Navbar.Item>
            <Link className='pr-2'>
              <FaYoutube />
            </Link>
          </Navbar.Item>
        </Navbar.Content>

        <Navbar.Collapse>
          {collapseItems.map((item, index) => (
            <Navbar.CollapseItem key={item}>
              <Link
                color='inherit'
                css={{
                  textGradient: '45deg, $blue600 -20%, $pink600 50%',
                }}
                href='#'
              >
                {item}
              </Link>
            </Navbar.CollapseItem>
          ))}
        </Navbar.Collapse>
      </Navbar>
    </Layout>
  );
};

export default nav;
