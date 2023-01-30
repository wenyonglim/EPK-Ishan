import Spotify from './Spotify';
import { Text } from '@nextui-org/react';
const Music = () => {
  return (
    <div className='overflow-auto'>
      <Spotify />
    </div>
  );
};

export default Music;
