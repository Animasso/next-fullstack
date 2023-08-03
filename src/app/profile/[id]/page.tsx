
import React from 'react'

const DetailProfile = ({ params }: any) => {
    return (
        <div className=' flex flex-col items-center justify-center min-h-screen py-2'>
            <h1>Profile</h1>
            <hr />
            <p>Profile page id :{params.id}</p>
        </div>
    )
}

export default DetailProfile
