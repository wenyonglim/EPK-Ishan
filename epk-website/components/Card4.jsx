import { Card, Col, Text, Row, Button } from '@nextui-org/react';
import Image from '@nextui-org/react';

export const Card4 = () => (
  <Card css={{ w: '100%', h: '400px' }}>
    <Card.Header css={{ position: 'absolute', zIndex: 1, top: 5 }}>
      <Col>
        <Text
          size={12}
          weight='bold'
          transform='uppercase'
          color='#ffffffAA'
        ></Text>
        <Text h3 color='white'></Text>
      </Col>
    </Card.Header>
    <Card.Body css={{ p: 0 }}>
      <Card.Image
        src='https://i.ytimg.com/vi/JubDA4i65uA/maxresdefault.jpg'
        width='100%'
        height='100%'
        objectFit='cover'
        alt='Card example background'
      />
    </Card.Body>
    <Card.Footer
      isBlurred
      css={{
        position: 'absolute',
        bgBlur: '#ffffff66',
        borderTop: '$borderWeights$light solid rgba(255, 255, 255, 0.2)',
        bottom: 0,
        zIndex: 1,
      }}
    >
      <Row>
        <Col>
          <Text size={12} weight='bold' transform='uppercase' color='#ffffffAA'>
            Weekend.
          </Text>
          <Text h3 color='white'>
            Video
          </Text>
        </Col>
        <Col>
          <Row justify='flex-end'>
            <Button
              flat
              auto
              rounded
              color='secondary'
              onPress={() => {
                window.open('https://youtu.be/JubDA4i65uA');
              }}
            >
              <Text
                css={{ color: 'white' }}
                size={12}
                weight='bold'
                transform='uppercase'
              >
                Watch
              </Text>
            </Button>
          </Row>
        </Col>
      </Row>
    </Card.Footer>
  </Card>
);
