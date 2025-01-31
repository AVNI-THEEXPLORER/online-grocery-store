import { Button } from '@/components/ui/button'
import { LayoutGrid, Search, ShoppingBagIcon } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"


function Header() {
    return (
        <div className="p-5 shadow-sm flex justify-between ">
            <div className="flex gap-8 items-center outline-none">
                <Image src="/logo.png" alt="logo" width={150} height={100} />



                <DropdownMenu>
                    <DropdownMenuTrigger aschild="true">

                        <h2 className=" flex hiddenmd:flex gap-2 items-center border rounded-full p-2 px-10 bg-slate-200 cursor-pointer outline-none">
                            <LayoutGrid className="h-5 w-5" />
                            Catagory
                        </h2>


                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                        <DropdownMenuLabel>Browse Catagory</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>Profile</DropdownMenuItem>
                        <DropdownMenuItem>Billing</DropdownMenuItem>
                        <DropdownMenuItem>Team</DropdownMenuItem>
                        <DropdownMenuItem>Subscription</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>


                <div className="md:flex gap-3 items-center border rounded-full p-2 px-5 hidden">
                    <input type="text" placeholder="Search" className="outline-none" />
                    <Search />
                </div>
            </div>
            <div className="flex gap-5 items-center">
                <h2 className="flex gap-2 items-center text-lg"><ShoppingBagIcon /></h2>
                <Button>Log In</Button>
            </div>
        </div>
    )
}

export default Header