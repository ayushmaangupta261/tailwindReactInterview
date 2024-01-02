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
          <p className='text-sm text-slate-600'>Aready a member ? <span className='text-[#0000ff] cursor-pointer' >Log in</span></p>

          <form action=""
            className='flex flex-col gap-y-5 justify-center '
          >

            <div className='flex gap-x-2 justify-center w-full'>
              <input type="text"
                id='firstName'
                placeholder='First Name'
                className='border bg-slate-200 px-2 py-2 rounded-lg text-center w-full'
              />
              <input type="text"
                id='lastName'
                placeholder='Last Name'
                className='border bg-slate-200 px-2 py-2 rounded-lg text-center w-full'
              />
            </div>

            <input type="email"
              id='email'
              placeholder='Enter your email'
              className='border bg-slate-200 px-2 py-2 rounded-lg text-center'
            />

            <input type="text" id="password" placeholder='Please enter your password'
              className='border bg-slate-200 px-2 py-2 rounded-lg text-center'
            />

          </form>

          {/* button */}
          <div className='flex gap-x-10 justify-center w-full'>
            <div className='w-full'>
              <button className='rounded-xl bg-slate-200 px-3 py-2 w-full'>Change Method</button>
            </div>
            <div className='w-full'>
              <button className='rounded-xl bg-[#5e5eec] px-3 py-2 w-full'>Ceate Account</button>
            </div>

          </div>

        </div>


      </div>
      {/* right */}
      <div className='flex justify-center'>
        <img src={login} alt="" className='rounded-lg' />
      </div>
    </div>
  )
}

export default Signup