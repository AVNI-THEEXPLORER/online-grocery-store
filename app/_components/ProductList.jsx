import React from 'react'
import ProductItem from './ProductItem'

function ProductList(productList) {
    return (
        <div className='mt-10'>

            <h2 className='text-2xl font-bold text-green-600'>Our Popular Products</h2>

            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-6'>
                {productList.productList.map((product, index) => (
                    <ProductItem product={product} />
                ))}

            </div>

        </div>
    )
}

export default ProductList