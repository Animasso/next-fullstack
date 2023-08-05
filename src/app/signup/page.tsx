"use client"
import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import axios from 'axios'
import { toast } from 'react-hot-toast'

const SignupPage = () => {
    const router = useRouter()
    const [user, setUser] = useState({
        email: "",
        password: "",
        username: ""
    })
    const [buttonDisable, setButtonDisable] = useState(false)
    const [loading, setLoading] = useState(false)
    const onSignup = async () => {
        try {
            setLoading(true)
            const reponse = await axios.post('/api/users/signup', user)
            console.log('reponse:', reponse.data)
            router.push('/login')
        } catch (error: any) {
            console.log('error:', error)
            // toast.error(error.message)

        } finally {
            setLoading(false)
        }
    }
    useEffect(() => {

        if (user.email.length > 0) {
            setButtonDisable(false)
        } else {
            setButtonDisable(true)
        }

    }, [user])

    return (
        <div className="container bg-gray-700 max-w-full h-screen flex justify-center items-center ">
            <div className="max-w-sm mx-auto px-6">
                <div className="relative flex flex-wrap p-12 border border-white rounded-2xl drop-shadow-xl shadow-lg hover:shadow-2xl">
                    <div className="w-full relative">
                        <div className="md:mt-6">
                            <div className="text-center font-bold text-lg text-white">
                                {loading ? 'Processing' : 'SignUp'}
                            </div>

                            <div className="mt-8">
                                <div className="mx-auto max-w-lg ">
                                    <div className="py-1">
                                        <span className="px-1 text-sm text-white">Username</span>
                                        <input
                                            type="text" value={user.username} onChange={(e) => setUser({ ...user, username: e.target.value })} placeholder='username'
                                            className="text-md block px-3 py-2 rounded-lg w-full
                      bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none"/>
                                    </div>
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
                                    <div className='flex flex-col gap-3  justify-center items-center'>
                                        <button onClick={onSignup} className=' hover:text-black hover:bg-white text-white  rounded-lg  py-3 px-4 mt-3 border border-white'>{buttonDisable ? 'No SignUp' : 'SignUp'}</button>
                                        <Link href={'/login'} className=' text-white hover:underline'>You already have an account?</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignupPage