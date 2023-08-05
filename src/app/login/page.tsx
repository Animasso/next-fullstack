"use client"
import React, { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import axios from 'axios'

const LoginPage = () => {
    const [user, setUser] = useState({
        email: "",
        password: "",

    })
    const onLogin = async () => {

    }
    return (
        <div className="container bg-gray-700 max-w-full h-screen flex justify-center items-center ">
            <div className="max-w-sm mx-auto px-6">
                <div className="relative flex flex-wrap p-12 border border-white rounded-2xl drop-shadow-xl shadow-lg hover:shadow-2xl">
                    <div className="w-full relative">
                        <div className="md:mt-6">
                            <div className="text-center font-bold text-lg text-white">
                                Login
                            </div>

                            <form className="mt-8">
                                <div className="mx-auto max-w-lg ">
                                    <div className="py-1">
                                        <span className="px-1 text-sm text-white">Email</span>
                                        <input type="email" autoComplete='off' value={user.email} onChange={(e) => setUser({ ...user, email: e.target.value })} placeholder='email'
                                            className="text-md block px-3 py-2 rounded-lg w-full
                      bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none"/>
                                    </div>
                                    <div className="py-1">
                                        <span className="px-1 text-sm text-white">Password</span>
                                        <input type="password" autoComplete='off' value={user.password} onChange={(e) => setUser({ ...user, password: e.target.value })} placeholder='password'
                                            className="text-md block px-3 py-2 rounded-lg w-full
                      bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none"/>
                                    </div>

                                </div>
                                <div className='flex flex-col gap-3 justify-center items-center'>
                                    <button onClick={onLogin} className=' hover:text-black hover:bg-white text-white  rounded-lg  py-3 px-4 mt-3 border border-white'>Login</button>
                                    <Link href={'/signup'} className=' text-white hover:underline'>You don't have an account?</Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginPage
