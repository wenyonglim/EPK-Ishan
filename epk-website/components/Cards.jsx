import { Grid } from '@nextui-org/react';
import { CardComponent } from './CardComponent';
import { Card1 } from './Card1';
import { Card2 } from './Card2';
import { Card3 } from './Card3';
import { Card4 } from './Card4';
import { Card5 } from './Card5';
import { Card6 } from './Card6';
import { Card7 } from './Card7';

export default function Cards() {
  return (
    <Grid.Container gap={2} justify='center'>
      <Grid xs={12} sm={6}>
        <CardComponent
          src='https://i.ytimg.com/vi_webp/Kzq6vIZ-5rE/maxresdefault.webp?v=633b46c0'
          title='I think you gotta go'
          description='Music Video'
        />
      </Grid>
      <Grid xs={12} sm={6}>
        <Card2 />
      </Grid>
      <Grid xs={12} sm={4}>
        <Card3 />
      </Grid>
      <Grid xs={12} sm={4}>
        <Card4 />
      </Grid>
      <Grid xs={12} sm={4}>
        <Card5 />
      </Grid>
      <Grid xs={12} sm={4}>
        <Card6 />
      </Grid>
      <Grid xs={12} sm={4}>
        <Card7 />
      </Grid>
    </Grid.Container>
  );
}
