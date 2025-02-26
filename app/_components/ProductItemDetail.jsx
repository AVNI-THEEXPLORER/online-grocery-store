"use client"
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { ShoppingBasket, ShoppingCartIcon } from 'lucide-react'
import GlobalApi from '../_utils/GlobalApi'
import { toast } from 'sonner'


function ProductItemDetail({ product }) {
    // console.log(product)
    // console.log(product?.product?.categories);

    const jwt = sessionStorage.getItem('jwt')
    const user = JSON.parse(sessionStorage.getItem('user'));
    const [productTotalPrice, setProductTotalPrice] = useState(
        product?.product?.sellingPrice ?
            product?.product?.mrp :
            product?.product?.sellingPrice
    )
    const router = useRouter();
    const [quantity, setQuantity] = useState(1);

    const addToCart = () => {
        if (!jwt) {

            router.push('/sign-in')
            return;
        }

        const data = {
            data: {
                quantity: quantity,
                amount: (quantity * productTotalPrice).toFixed(2),
                products: product.product.id,
                users_permissions_users: user.id
            }

        }
        // console.log(data);
        GlobalApi.addToCart(data, jwt).then(resp => {
            console.log(resp);
            console.log('added to cart');
            toast('Added to cart')
        }, err => {
            toast('Error while adding to cart')
            console.log(err)
            console.log('not added to cart');
        })
    }

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 gap-3 p-7 bg-white text-black'>

            <Image src={process.env.NEXT_PUBLIC_BACKEND_BASE_URL + product?.product?.images[0].url} width={500} height={200} alt={product?.product?.name}

                className='bg-slate-200 p-5 h[320px] w-[400px] object-contain rounded-lg'

            />

            <div className='flex flex-col gap-3'>
                <h2 className='text-2xl font-bold'>{product?.product?.name}</h2>
                <h2 className='text-sm text-gray-500'>{product?.product?.description}</h2>


                <div className='flex gap-3'>

                    {product.product.sellingPrice &&
                        <h2 className={`${product.product.sellingPrice && 'line-through text-gray-500 text-lg'}`}>₹ {product?.product?.sellingPrice}</h2>}

                    <h2 className='font-bold text-lg'>₹{product?.product?.mrp}</h2>

                </div>

                <h2 className='text-lg font-medium'>Quantity - {product?.product?.itemQuantityType}</h2>

                <div className='flex flex-col items-baseline gap-3'>
                    <div className='flex gap-3 items-center'>
                        <div className='p-2 border flex gap-10 items-center px-5'>
                            <button disabled={quantity == 1} onClick={() => setQuantity(quantity - 1)}>-</button>
                            <h2>{quantity}</h2>
                            <button onClick={() => setQuantity(quantity + 1)}>+</button>
                        </div>
                        <h2 className='font-bold text-2xl'><span className='font-normal'>= </span>
                            ₹{(quantity * productTotalPrice).toFixed(2)}</h2>

                    </div>

                    <Button className='flex gap-3 items-center' onClick={() => addToCart()}>
                        <ShoppingCartIcon />
                        Add To Cart
                    </Button>

                </div>

                <h2><span className='font-bold'>Category : </span>{product?.product?.categories[0].name}</h2>



            </div>

        </div>
    )
}

export default ProductItemDetail