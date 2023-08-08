'use client'
import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
const ProfilePage = () => {

    const router = useRouter()
    const [user, setUser] = useState(null)
    useEffect(() => {


        const res: any = axios.get('/api/users/myToken')
        console.log('res:', res)
        console.log('res:', res.data)
        setUser(res.data.data._id)


    }, [])

    const logout = async () => {
        try {
            await axios.get('/api/users/logout')
            router.push('/login')
        } catch (error: any) {
            console.log('error:', error.message)
        }
    }



    return (
        <div className='min-h-screen'>

            <div className='relative'>
                <button onClick={logout} className="absolute right-0 bg-gray-100 mt-3 mr-4  hover:bg-white text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow-lg">
                    Logout
                </button>
            </div>
            <div className='flex flex-col items-center justify-center py-2'>
                <h1>Profile</h1>
                <hr />
                <p>Profile page</p>
                <h2 className=' cursor-pointer'>{user === 'nothing' ? 'Nothing' : <Link href={`/profile/${user}`}>

                    {user}</Link>} </h2>
                <div>
                    {/* <button onClick={getUserDetails} className="absolute right-0 bg-gray-100 mt-3 mr-4  hover:bg-white text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow-lg">
                        Get to your profile
                    </button> */}
                </div>

            </div>
        </div>
    );
};


export default ProfilePage