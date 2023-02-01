import { Card, Col, Row, Button, Text } from '@nextui-org/react';

export const Card2 = () => (
  <Card css={{ w: '100%', h: '400px' }}>
    <Card.Header css={{ position: 'absolute', zIndex: 1, top: 5 }}>
      <Col>
        <Text size={12} weight='bold' transform='uppercase' color='#9E9E9E'>
          Do you wanna chill?
        </Text>
        <Text h3 color='black'>
          Music Video
        </Text>
      </Col>
    </Card.Header>
    <Card.Body css={{ p: 0 }}>
      <Card.Image
        src='https://i.postimg.cc/cdsNhST6/Do-you-wanna-chill-logo.png'
        objectFit='cover'
        width='100%'
        height='100%'
        alt='Relaxing app background'
      />
    </Card.Body>
    <Card.Footer
      isBlurred
      css={{
        position: 'absolute',
        bgBlur: '#0f111466',
        borderTop: '$borderWeights$light solid $gray800',
        bottom: 0,
        zIndex: 1,
      }}
    >
      <Row>
        <Col>
          <Row>
            <Col>
              <Text color='black' size={12}></Text>
              <Text color='black' size={12}></Text>
            </Col>
          </Row>
        </Col>
        <Col>
          <Row justify='flex-end'>
            <Button flat auto rounded css={{ color: 'white', bg: '#94f9f026' }}>
              <Text
                css={{ color: 'inherit' }}
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
