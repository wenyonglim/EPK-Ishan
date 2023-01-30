import { Navbar, Button, Link, Text } from '@nextui-org/react';
import { Layout } from './Layout.js';
import { AcmeLogo } from './AcmeLogo.js';
import { useTheme } from '@nextui-org/react';
import { AiOutlineMenu } from 'react-icons/ai';

const nav = () => {
  const collapseItems = ['About', 'Music', 'Media', 'Press Photos'];

  return (
    <Layout>
      <Navbar isBordered variant='sticky'>
        <Navbar.Brand>
          <Navbar.Toggle aria-label='toggle navigation' />
          <AcmeLogo />
          <Text b color='inherit' hideIn='xs'>
            Electronic Press Kit
          </Text>
        </Navbar.Brand>
        <Navbar.Content enableCursorHighlight hideIn='xs' variant='underline'>
          <Navbar.Link isActive href='#'>
            Home
          </Navbar.Link>
        </Navbar.Content>

        <Navbar.Content>
          {/* // ! Social Media Links */}
          <Navbar.Item>
            <Button auto as={Link} href='#'>
              Sign Up
            </Button>
          </Navbar.Item>
          <Navbar.Item>
            <Button auto as={Link} href='#'>
              Sign Up
            </Button>
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
