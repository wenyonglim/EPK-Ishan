import Spotify from './Spotify';
import { Text } from '@nextui-org/react';
const Music = () => {
  return (
    <div className='overflow-auto space-y-4 '>
      <Spotify playlist='https://open.spotify.com/embed/artist/31H6pWphv3pWESSd03Ifyc?utm_source=generator' />
      <Spotify playlist='https://open.spotify.com/embed/album/30gsmPQkFadIp1rak2JlOy?utm_source=generator' />
      <Spotify playlist='https://open.spotify.com/embed/album/262pAwYFjbToc0AAFu9JV4?utm_source=generator' />
    </div>
  );
};

export default Music;
