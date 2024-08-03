import React from 'react'
import Image from 'next/image'

import NewButton from '@components/NewButton';

const Card = ({ product }) => {
  return (
    <div className="border-2 bg-white shadow-md rounded-md p-4 flex justify-between items-center m-4 hover:shadow-lg transition-shadow duration-300 w-full max-w-sm">
      <div className='flex items-center'>
        <Image
          src={product.img}
          alt={product.name}
          height={60}
          width={60}
          className='rounded-full'
        />
        <div className='ml-4'>
          <h1 className='text-gray-800 font-bold text-lg'>{product.name}</h1>
          <p className='text-gray-600 font-medium'>${product.price}</p>
        </div>
      </div>
      <NewButton />
    </div>
  );
}

export default Card;
