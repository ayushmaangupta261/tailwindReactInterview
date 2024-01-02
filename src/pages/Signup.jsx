import React from 'react'
import login from "../assets/login.png"

const Signup = () => {
  return (
    <div className='w-11/12 mx-auto mt-[5rem]  flex flex-col md:flex-row justify-between pb-10'>
      {/* left */}
      <div className='flex flex-col gap-y-[5rem] mb-5'>
        <div className='flex justify-between w-[100%]'>
          <p className='text-md font-semibold'>Anywhere app</p>
          <p className='text-md font-semibold'>Home</p>
          <p className='text-md font-semibold'>Join</p>
        </div>

        <div className='flex flex-col gap-y-5'>
          <p className='text-sm text-slate-600 font-semibold '>START FOR FREE</p>
          <p className='text-4xl'>Create new account</p>
         
         <div className='flex justify-center items-center gap-x-2 text-sm'> <p className='text-sm text-slate-600'>Aready a member ?</p>
          <span className='text-[#0000ff] cursor-pointer hover:scale-105 transition-all duration-200' >Log in</span></div>

          <form action=""
            className='flex flex-col gap-y-5 justify-center '
          >

            <div className='flex gap-x-2 justify-center w-full'>
              <input type="text"
                id='firstName'
                placeholder='First Name'
                className='border bg-slate-200 px-2 py-2 rounded-lg text-center w-full hover:scale-105 transition-all duration-200'
              />
              <input type="text"
                id='lastName'
                placeholder='Last Name'
                className='border bg-slate-200 px-2 py-2 rounded-lg text-center w-full hover:scale-105 transition-all duration-200'
              />
            </div>

            <input type="email"
              id='email'
              placeholder='Enter your email'
              className='border bg-slate-200 px-2 py-2 rounded-lg text-center hover:scale-105 transition-all duration-200'
            />

            <input type="text" id="password" placeholder='Please enter your password'
              className='border bg-slate-200 px-2 py-2 rounded-lg text-center hover:scale-105 transition-all duration-200'
            />

          </form>

          {/* button */}
          <div className='flex gap-x-10 justify-center w-full'>
            <div className='w-full'>
              <button className='rounded-xl bg-slate-200 px-3 py-2 w-full hover:scale-95 transition-all duration-200'>Change Method</button>
            </div>
            <div className='w-full'>
              <button className='rounded-xl bg-[#5e5eec] px-3 py-2 w-full hover:scale-95 transition-all duration-200'>Ceate Account</button>
            </div>

          </div>

        </div>


      </div>
      {/* right */}
      <div className='flex justify-center '>
        <img src={login} alt="" className='rounded-lg shadow-lg hover:scale-90 transition-all duration-200' />
      </div>
    </div>
  )
}

export default Signup