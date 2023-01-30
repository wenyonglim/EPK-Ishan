import Image from 'next/image';
import artwork1 from '../public/Artwork1.jpeg';
import { Card, Grid, Row, Text } from '@nextui-org/react';

export default function Media() {
  const list = [
    {
      title: 'Orange',
      img: '/images/fruit-1.jpeg',
      price: '$5.50',
    },
    {
      title: 'Tangerine',
      img: '/images/fruit-2.jpeg',
      price: '$3.00',
    },
    {
      title: 'Cherry',
      img: '/images/fruit-3.jpeg',
      price: '$10.00',
    },
    {
      title: 'Lemon',
      img: '/images/fruit-4.jpeg',
      price: '$5.30',
    },
  ];

  return (
    <div className='overflow-auto flex justify-center py-8'>
      <Grid.Container gap={2} justify='flex-start'>
        {list.map((item, index) => (
          <Grid xs={6} sm={3} key={index}>
            <Card isPressable>
              <Card.Body css={{ p: 0 }}>
                <Card.Image
                  src={'https://nextui.org' + item.img}
                  objectFit='cover'
                  width='100%'
                  height={140}
                  alt={item.title}
                />
              </Card.Body>
              <Card.Footer css={{ justifyItems: 'flex-start' }}>
                <Row wrap='wrap' justify='space-between' align='center'>
                  <Text b>{item.title}</Text>
                  <Text
                    css={{
                      color: '$accents7',
                      fontWeight: '$semibold',
                      fontSize: '$sm',
                    }}
                  >
                    {item.price}
                  </Text>
                </Row>
              </Card.Footer>
            </Card>
          </Grid>
        ))}
      </Grid.Container>
    </div>
  );
}
