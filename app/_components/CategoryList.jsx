import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

function CategoryList({ categoryList }) {
    return (
        <div className='mt-5'>
            <h2 className='text-2xl font-bold text-green-600'>Shop by Category</h2>
            <div className='grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-6 gap-5 mt-2'>
                {categoryList.map((category, index) => (
                    <Link href={'/products-category/' + category.name} key={index}>
                        <div className='flex flex-col items-center bg-green-50 gap-2 p-3 rounded-lg group cursor-pointer hover:bg-green-200'>
                            <Image 
                                src={process.env.NEXT_PUBLIC_BACKEND_BASE_URL + category?.icon[0].url} 
                                width={50}
                                height={50}
                                alt='icon' 
                                className='group-hover:scale-125 transition-all duration-300 ease-in-out'
                            />
                            <h2 className='text-green-800'>{category.name}</h2>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default CategoryList