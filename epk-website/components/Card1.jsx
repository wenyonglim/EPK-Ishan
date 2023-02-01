import { Card, Col, Text } from '@nextui-org/react';
import Image from '@nextui-org/react';
import media1 from '../public/Artwork1.jpeg';

export const Card1 = () => (
  <Card>
    <Card.Header css={{ position: 'absolute', zIndex: 1, top: 5 }}>
      <Col>
        <Text size={12} weight='bold' transform='uppercase' color='#ffffffAA'>
          What to watch
        </Text>
        <Text h4 color='white'>
          I think you gotta go (music video)
        </Text>
      </Col>
    </Card.Header>
    <Card.Image
      src='https://i.ytimg.com/vi_webp/Kzq6vIZ-5rE/maxresdefault.webp?v=633b46c0'
      objectFit='cover'
      width='100%'
      height={340}
      alt='Card image background'
    />
  </Card>
);
