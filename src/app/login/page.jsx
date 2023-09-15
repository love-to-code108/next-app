'use client';
import Link from 'next/link';
import React, { useState } from 'react'
import { useRouter } from 'next/navigation';
import { axios } from 'axios';



const LoginPage = () => {

  const [user, setUser] = useState({
    email: "",
    password: "",
  });



  // 
  const onLogin = async () => {

  }





  return (
    <div className=' flex flex-col items-center justify-center h-[100vh]'>
      <h1 className='text-6xl mb-4 ml-48'>Login</h1>


      {/* THE SIGNUP FORM  */}
      <div className='flex flex-col justify-center'>


        <div className='flex h-[8rem]'>



          {/* THE LABEL DIV */}
          <div className='flex flex-col h-5/5 justify-evenly'>

            <label className='text-2xl' htmlFor="Email">Email</label>
            <label className='text-2xl' htmlFor="Password">Password</label>
          </div>





          {/* THE INPUT DIV */}
          <div className='flex flex-col justify-evenly ml-4'>



          <input
              onChange={(event) => {
                return setUser({ ...user, email: event.target.value })
              }}
              value={user?.email}
              placeholder='Email'
              className=' px-2 py-1 text-black ' type="email" />

              


          <input
              onChange={(event) => {
                return setUser({ ...user, password: event.target.value })
              }}
              value={user?.password}
              placeholder='Password'
              className=' px-2 py-1 text-black ' type="password" />

            

            



            
          </div>




        </div>

        <button
          onClick={onLogin}
          className='px-2 py-1 text-2xl bg-white text-black w-2/5 mt-8 ml-32'
        >Login</button>


        <Link href="/signup" className='text-xl ml-32 mt-4'>Visit SignUp page</Link>


      </div>
    </div>
  )
}

export default LoginPage