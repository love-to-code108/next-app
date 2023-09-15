import React from 'react'

const Profile = ({params}) => {



    return (
        <div className='h-[100vh] flex flex-col justify-center items-center'>
            <h1 className='text-4xl'>Hello world </h1>
            <h1 className='text-6xl'>{params.id}</h1>
        </div>
    )
}

export default Profile