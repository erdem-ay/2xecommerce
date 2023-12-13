import { useStore } from '@/stores';
import Link from 'next/link';
import React from 'react'


const Home = async () => {
  const { getProducts } = useStore.getState();
  const products = await getProducts();

  return (
    <div
      className="bg-black flex-1 flex justify-center items-center"
    >
      <div className="max-w-8xl w-10/12 my-8 ">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {products.map((product, index) => (
            <Link href={`/product/${product._id}`}
              className="flex flex-col border border-gray-700 bg-white p-12 mb-2 rounded-lg"
              key={index}
            >
              <h1 className="text-2xl font-bold">{product.title}</h1>
              <p>{product.description}</p>
              <p>{product.price}</p>
              <p>{product.brand}</p>
              {/* <img src={product.image_url || ecommerce} alt={product.title || 'Ürün Resmi'} /> */}
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Home