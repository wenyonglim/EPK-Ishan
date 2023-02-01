import { Card, Col, cssNoBlurriness, Text } from '@nextui-org/react';

export const Card5 = () => (
  <Card css={{ bg: '$black', w: '100%' }}>
    <Card.Header css={{ position: 'absolute', zIndex: 1, top: 5 }}>
      <Col>
        <Text
          size={12}
          weight=''
          className='pl-64'
          transform='uppercase'
          css={{
            textGradient: '45deg, $red200 -20%, $blue800 50%',
          }}
        >
          Playground (Video)
        </Text>
      </Col>
    </Card.Header>
    <Card.Image
      src='https://i.ytimg.com/vi_webp/fPOWbf8S6Iw/maxresdefault.webp?v=60157084'
      width='100%'
      className='lg:opacity-50 lg:hover:opacity-100'
      height={340}
      objectFit='cover'
      alt='Card image background'
    />
  </Card>
);
