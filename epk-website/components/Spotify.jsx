const Spotify = ({ playlist }) => {
  return (
    <div>
      <iframe
        src={playlist}
        width='100%'
        className='spotify'
        height='152'
        frameBorder='0'
        allowfullscreen=''
        allow='autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture'
        loading='lazy'
      ></iframe>
    </div>
  );
};

export default Spotify;
