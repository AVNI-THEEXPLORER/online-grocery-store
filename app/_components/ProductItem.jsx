import React from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'

function ProductItem(product) {
  console.log(product)
  return (
    <div className='p-2 md:p-6 flex flex-col items-center justify-center gap-3 border rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-300 ease-in-out cursor-pointer'>
      <Image src={process.env.NEXT_PUBLIC_BACKEND_BASE_URL + product?.product?.images[0].url} width={500} height={200} alt={product?.product?.name}
        className='h-[180px] w-[200px]' />


      <h2 className='text-lg font-bold'>{product?.product?.name}</h2>
      <div className='flex gap-3'>

        {product.product.sellingPrice &&
          <h2 className={`${product.product.sellingPrice && 'line-through text-gray-500'}`}>₹ {product?.product?.sellingPrice}</h2>}

        <h2 className='font-bold'>₹{product?.product?.mrp}</h2>

      </div>


      <Button variant='outline' className='text-primary hover:bg-primary hover:text-white'>Add to Cart</Button>
    </div>
  )
}

export default ProductItem