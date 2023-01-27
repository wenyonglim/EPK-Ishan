import { Navbar, Button, Link, Text } from '@nextui-org/react';
import { Layout } from '../pages/Layout.js';
import { AcmeLogo } from '../pages/AcmeLogo.js';
import { useTheme } from '@nextui-org/react';
import { AiOutlineMenu } from 'react-icons/ai';

const nav = () => {
  return (
    <Layout>
      <Navbar variant='floating' shouldHideOnScroll>
        <Navbar.Brand>
          <Text b color='inherit' hideIn='xs'>
            ELECTRONIC PRESS KIT
          </Text>
        </Navbar.Brand>
        <Navbar.Content hideIn='xs' variant='highlight-rounded'>
          <Navbar.Link isActive href='#'>
            Home
          </Navbar.Link>
          <Navbar.Link href='#'>Music</Navbar.Link>
          <Navbar.Link href='#'>Press</Navbar.Link>
        </Navbar.Content>

        <Navbar.Content>
          <Navbar.Item>
            <Button
              auto
              flat
              as={Link}
              href='#'
              className='lg:hidden md:hidden'
            >
              <AiOutlineMenu />
            </Button>
          </Navbar.Item>
        </Navbar.Content>
      </Navbar>
    </Layout>
  );
};

export default nav;
