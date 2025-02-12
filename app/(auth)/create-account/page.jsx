"use client";
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import Image from 'next/image'
import React from 'react'
import { useState } from 'react'

function CreateAccount() {
    const [userName, setUserName] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

const onCreateAccount=()=>{
    // console.log(firstName,lastName,email,password)
}
  return (
    <div className='flex items-baseline justify-center my-10'>
        <div className='flex flex-col items-center justify-center p-10 bg-slate-200 border border-gray-200 rounded-md w-full max-w-md'>
            <Image src="/logo.png" alt="logo" width={200} height={200} />

            <h2 className='text-3xl font-bold'>Create an Account</h2>
            <p className='text-gray-500 text-sm'>Create a new account to get started</p>

            <div className='w-full flex flex-col gap-5 mt-7 '>
                <Input type='text' placeholder='Username' onChange={(e) => setUserName(e.target.value)} />  
                <Input type='email' placeholder='Email' onChange={(e) => setEmail(e.target.value)}/>
                <Input type='password' placeholder='Password' onChange={(e) => setPassword(e.target.value)}/>
                <Button onClick={()=>onCreateAccount()}>Create Account</Button>
                <p className='text-center text-sm'>Already have an account ? <a href={'sign-in'} className='text-blue-500'>Sign In</a></p>
            </div>

        </div>
    </div>
  )
}

export default CreateAccount