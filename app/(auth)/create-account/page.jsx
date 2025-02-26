"use client";
import GlobalApi from '@/app/_utils/GlobalApi';
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import Image from 'next/image'
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react'
import { useState } from 'react'
import { toast } from 'sonner';

function CreateAccount() {
    const [userName, setUserName] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const router = useRouter()
    const [loder, setLoader] = useState(false)


    useEffect(() => {
        if (sessionStorage.getItem('jwt')) {
            router.push('/')
        }
    }, [])


    const onCreateAccount = () => {
        setLoader(true)
        GlobalApi.registerUser(userName, email, password).then(resp => {
            console.log(resp.data.user)
            console.log(resp.data.jwt)
            sessionStorage.setItem('user', JSON.stringify(resp.data.user));
            sessionStorage.setItem('jwt', resp.data.jwt);
            toast("Account Created Sucessfully")

            router.push('/')
            setLoader(false)

        }, (e) => {

            toast(e?.response?.data?.error?.message)
            setLoader(false)

        })

    }
    return (
        <div className='flex items-baseline justify-center my-20'>
            <div className='flex flex-col items-center justify-center p-10 bg-slate-200 border border-gray-200 rounded-md w-full max-w-md'>
                <Link href="/">
                    <Image src="/logo.png" alt="logo" width={200} height={200} />
                </Link>

                <h2 className='text-3xl font-bold'>Create an Account</h2>
                <p className='text-gray-500 text-sm'>Create a new account to get started</p>

                <div className='w-full flex flex-col gap-5 mt-7 '>
                    <Input type='text' placeholder='Username' onChange={(e) => setUserName(e.target.value)} />
                    <Input type='email' placeholder='Email' onChange={(e) => setEmail(e.target.value)} />
                    <Input type='password' placeholder='Password' onChange={(e) => setPassword(e.target.value)} />
                    <Button onClick={() => onCreateAccount()}
                        disabled={userName && email && password ? false : true}

                    >{loder ? <LoaderIcon className='animate-spin' /> : 'Create an Account'}</Button>
                    <p className='text-center text-sm'>Already have an account ? <Link href={'/sign-in'} className='text-blue-500'>Sign In</Link></p>
                </div>

            </div>
        </div>
    )
}

export default CreateAccount