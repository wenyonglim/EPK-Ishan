import Image from 'next/image';

export const Cards = ({ title, description, img }) => (
  <div className='card lg:card-side bg-base-100 shadow-xl'>
    <figure>
      <Image src={img} alt='Album' width={428} height={241} />
    </figure>
    <div className='card-body'>
      <h2 className='card-title'>New album is released!</h2>
      <p>Click the button to listen on Spotiwhy app.</p>
      <div className='card-actions justify-end'>
        <button className='btn btn-primary'>Listen</button>
      </div>
    </div>
  </div>
);
