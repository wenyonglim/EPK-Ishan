const Spotify = ({ playlist }) => {
  return (
    <div>
      <iframe
        className='spotify'
        src={playlist}
        width='100%'
        height='447'
        allowfullscreen=''
        allow='autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture'
        loading='lazy'
      ></iframe>
      <div id='Press Photos'></div>
    </div>
  );
};

export default Spotify;
