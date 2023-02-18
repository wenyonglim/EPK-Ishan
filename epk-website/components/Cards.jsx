import { Grid } from '@nextui-org/react';
import { CardComponent } from './CardComponent';

export default function Cards() {
  return (
    <Grid.Container gap={2} justify='center'>
      <Grid xs={12} sm={6}>
        <CardComponent
          src='https://i.ytimg.com/vi_webp/Kzq6vIZ-5rE/maxresdefault.webp?v=633b46c0'
          title='I think you gotta go'
          description='Music Video'
          link='https://youtu.be/Kzq6vIZ-5rE'
        />
      </Grid>
      <Grid xs={12} sm={6}>
        <CardComponent
          src='https://i.postimg.cc/cdsNhST6/Do-you-wanna-chill-logo.png'
          title=' Do you wanna chill?'
          description='Music Video'
          link='https://youtu.be/D7n04b54g4E'
          dark={true}
        />
      </Grid>
      <Grid xs={12} sm={4}>
        <CardComponent
          src='https://i.ytimg.com/vi_webp/fPOWbf8S6Iw/maxresdefault.webp?v=60157084'
          title='Playground'
          description='Video'
          link='https://youtu.be/fPOWbf8S6Iw'
        />
      </Grid>
      <Grid xs={12} sm={4}>
        <CardComponent
          src='https://i.ytimg.com/vi/JubDA4i65uA/maxresdefault.jpg'
          title='Weekend.'
          description='Video'
          link='https://youtu.be/JubDA4i65uA'
        />
      </Grid>
      <Grid xs={12} sm={4}>
        <CardComponent
          src='https://i.ytimg.com/vi_webp/akVnfJXDpxE/maxresdefault.webp?v=628a153f'
          title='ep.1 get 2 know u'
          description='Uni vlogs + nightlife & studio moments'
          link='https://youtu.be/akVnfJXDpxE'
        />
      </Grid>
      <Grid xs={12} sm={4}>
        <CardComponent
          src='https://i.ytimg.com/vi_webp/x3RfwF_D5N8/maxresdefault.webp?v=629a013d'
          title='ep.2 company'
          description='Uni vlogs, studio sessions & nightlife'
          link='https://youtu.be/x3RfwF_D5N8'
        />
      </Grid>
      <Grid xs={12} sm={4}>
        <CardComponent
          src='https://i.ytimg.com/vi_webp/YNtoJZlnQc8/maxresdefault.webp?v=62ab09dc'
          title='ep.3 I don’t do it for you'
          description=' Paris vlog, graduation, reunion + more!'
          link='https://youtu.be/YNtoJZlnQc8'
        />
      </Grid>
    </Grid.Container>
  );
}
