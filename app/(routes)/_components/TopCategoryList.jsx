import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function TopCategoryList({categoryList,selectedCategory}) {
  return (
    <div className='flex gap-5 mt-2 overflow-auto mx-7 md:mx-20 justify-center'>
                {categoryList.map((category, index) => (
                    <Link href={'/products-category/' + category.name} key={index}>
                        <div className={`flex flex-col items-center bg-green-50 gap-2 p-3 rounded-lg group cursor-pointer hover:bg-green-200 
                        w-[150px] min-w-[100px] ${selectedCategory === category.name ? 'bg-green-600' : ''}`}>
                            <Image 
                                src={process.env.NEXT_PUBLIC_BACKEND_BASE_URL + category?.icon[0].url} 
                                width={50}
                                height={50}
                                alt='icon' 
                                className='group-hover:scale-125 transition-all duration-300 ease-in-out'
                            />
                            <h2 className={`${selectedCategory === category.name ? 'text-white' : 'text-green-800'}`}>
              {category.name}
            </h2>
                        </div>
                    </Link>
                ))}
            </div>
  )
}

export default TopCategoryList