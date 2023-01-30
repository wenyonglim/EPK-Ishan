import Spotify from './Spotify';
import { Text } from '@nextui-org/react';
const Music = () => {
  return (
    <div>
      <Text
        h1
        size={60}
        css={{
          textGradient: '45deg, $blue600 -20%, $pink600 50%',
        }}
        weight='bold'
        id='Press Photos'
      >
        Music
      </Text>
      <Spotify />
    </div>
  );
};

export default Music;
