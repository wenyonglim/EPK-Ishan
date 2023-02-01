import { Card, Col, Text } from '@nextui-org/react';

export const Card4 = () => (
  <Card css={{ w: '100%' }}>
    <Card.Header css={{ position: 'absolute', zIndex: 1, top: 5 }}>
      <Col>
        <Text
          size={12}
          weight='bold'
          transform='uppercase'
          css={{
            textGradient: '45deg, $blue600 -20%, $pink600 50%',
          }}
        >
          Music Video
        </Text>
        <Text h4 color='white'>
          Do you wanna chill?
        </Text>
      </Col>
    </Card.Header>
    <Card.Image
      src='https://i1.ytimg.com/vi/D7n04b54g4E/hqdefault.jpg'
      width='100%'
      height={340}
      objectFit='cover'
      alt='Card image background'
    />
  </Card>
);
