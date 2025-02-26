"use client";
import React, { useEffect } from 'react'
import { Input } from '@/components/ui/input'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import Link from 'next/link';
import { useState } from 'react'
import GlobalApi from '@/app/_utils/GlobalApi';

import { toast } from 'sonner';
import { useRouter } from 'next/navigation';
import { LoaderIcon } from 'lucide-react';

function SignIn() {

    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const router = useRouter();
    const [loder, setLoader] = useState(false)


    useEffect(() => {
        if (sessionStorage.getItem('jwt')) {
            router.push('/')
        }
    }, [])

    const onSignIn = () => {
        setLoader(true)
        GlobalApi.SignIn(email, password).then(resp => {
            sessionStorage.setItem('user', JSON.stringify(resp.data.user));
            sessionStorage.setItem('jwt', resp.data.jwt);
            toast("Signed In Sucessfully")
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
                <h2 className='text-3xl font-bold'>Sign In to Account</h2>
                <p className='text-gray-500 text-sm'>Sign In to get started</p>

                <div className='w-full flex flex-col gap-5 mt-7 '>

                    <Input type='email' placeholder='Email' onChange={(e) => setEmail(e.target.value)} />
                    <Input type='password' placeholder='Password' onChange={(e) => setPassword(e.target.value)} />
                    <Button onClick={() => onSignIn()}
                        disabled={email && password ? false : true}

                    >{loder ? <LoaderIcon className='animate-spin' /> : 'Sign In'}</Button>
                    <p className='text-center text-sm'>Don't have an account ? <Link href={'/create-account'} className='text-blue-500'>Create an account</Link></p>
                </div>

            </div>
        </div>
    )
}

export default SignIn