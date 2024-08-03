import React from 'react'
import Card from '@components/Card'
import Rope from '/public/rope.png'
import Poison from '/public/poison.png'
import Gun from '/public/gun.png'

const products = [
  {
    name: 'Rope',
    price: '10',
    img: Rope,
  },
  {
    name: 'Poison',
    price: '100',
    img: Poison,
  },
  {
    name: 'Gun',
    price: '300',
    img: Gun,
  }
]

const Home = () => {
  return (
    <div className='flex flex-col justify-center items-center p-4'>
      <h1 className='font-semibold m-4 text-3xl font-serif'>Our Products</h1>
      <div className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 w-full max-w-6xl'>
        {products.map((product, index) => (
          <Card key={index} product={product} />
        ))}
      </div>
    </div>
  )
}

export default Home
