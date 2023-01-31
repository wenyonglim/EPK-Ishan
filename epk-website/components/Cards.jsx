import Image from 'next/image';
import { FaYoutube } from 'react-icons/fa';

export const Cards = ({ title, description, img, btn, link }) => (
  <div className='card lg:card-side bg-base-100 shadow-xl'>
    <figure>
      <Image src={img} alt='Video' width={428} height={241} />
    </figure>
    <div className='card-body'>
      <h2 className='card-title'>{title}</h2>
      <p>{description}</p>
      <div className='card-actions justify-end'>
        <button className='btn btn-primary' onClick={() => window.open(link)}>
          {btn}
        </button>
      </div>
    </div>
  </div>
);
