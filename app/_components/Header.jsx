"use client"
import { Button } from '@/components/ui/button'
import { CircleUserRound, LayoutGrid, Search, ShoppingBagIcon } from 'lucide-react'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import GlobalApi from '../_utils/GlobalApi'
import Link from 'next/link'
import { useRouter } from 'next/navigation'




function Header() {

    const [categoryList, setCategoryList] = useState([]);
    const isLogin = sessionStorage.getItem('jwt') ? true : false;
    const router = useRouter();




    const onSignOut = () => {
        sessionStorage.clear();
        router.push('/sign-in')

    }







    useEffect(() => {
        getCategoryList();
    }, [])


    // Get getCategoryList
    const getCategoryList = () => {
        GlobalApi.getCategory().then(resp => {

            // comment this console log 

            // console.log("CategoryList Response:", resp.data.data);

            setCategoryList(resp.data.data);
        })
    }




    return (
        <div className="p-5 shadow-sm flex justify-between ">
            <div className="flex gap-8 items-center outline-none">
                <Link href="/">
                    <Image src="/logo.png" alt="logo" width={150} height={100} />
                </Link>
                
                <DropdownMenu>
                    <DropdownMenuTrigger aschild="true">

                        <h2 className=" hidden md:flex gap-2 items-center border rounded-full p-2 px-10 bg-slate-200 cursor-pointer outline-none">
                            <LayoutGrid className="h-5 w-5" />
                            Catagory
                        </h2>

                    </DropdownMenuTrigger>
                    <DropdownMenuContent >
                        <DropdownMenuLabel>Browse Category</DropdownMenuLabel>

                        <DropdownMenuSeparator />
                        {categoryList.map((category, index) => (
                            <Link key={category.id} href={'/products-category/' + category.name}>
                                <DropdownMenuItem key={index} className="flex gap-2 items-center cursor-pointer">

                                    {/* {console.log(`here is the result `+ process.env.NEXT_PUBLIC_BACKEND_BASE_URL + category?.icon[0].url)} */}

                                    <Image src={
                                        process.env.NEXT_PUBLIC_BACKEND_BASE_URL +
                                        category?.icon[0].url}

                                        unoptimized={true}

                                        alt="logo"
                                        width={30}
                                        height={30} />


                                    <h2 className="text-md">{category?.name}</h2>
                                </DropdownMenuItem>
                            </Link>
                        ))}


                    </DropdownMenuContent>
                </DropdownMenu>


                <div className="md:flex gap-3 items-center border rounded-full p-2 px-5 hidden">
                    <input type="text" placeholder="Search" className="outline-none" />
                    <Search />
                </div>
            </div>
            <div className="flex gap-5 items-center">
                <h2 className="flex gap-2 items-center text-lg"><ShoppingBagIcon /></h2>
                {!isLogin ? <Link href={'/sign-in'}>
                    <Button>Log In</Button>
                </Link>

                    :

                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>

                            <CircleUserRound className=" bg-green-100 p-1 rounded-full cursor-pointer text-primary h-10 w-10" />

                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                            <DropdownMenuLabel>My Account</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>Profile</DropdownMenuItem>
                            <DropdownMenuItem>My Order</DropdownMenuItem>
                            <DropdownMenuItem onClick={() => onSignOut()}>Log out</DropdownMenuItem>

                        </DropdownMenuContent>
                    </DropdownMenu>

                }

            </div>
        </div>
    )
}

export default Header