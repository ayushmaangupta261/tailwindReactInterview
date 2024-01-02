import React from 'react'
import login from "../assets/login.png"
import { useState } from 'react'


const Login = () => {


  // const [showPassword, setShowPassword] = useState(false);

  return (
    <div className='w-11/12 mx-auto mt-[5rem]  flex flex-col md:flex-row justify-between items-center pb-10'>

      {/* left */}
      <div className='w-full  md:w-[50%]'>
        <img src={login} alt="" className="rounded-lg mx-auto" />
      </div>

      {/* right */}
      <div className=' w-full md:w-[50%] mx-auto py-10 flex justify-center items-center gap-y-5 '>
        <div className=' w-full bg-slate-100 flex flex-col  items-center  rounded-lg  py-10'>
          <div className='flex flex-col '>
            <div className='text-4xl'>Welcome</div>
            <div className='text-4xl'><span className='text-xl'>To</span> Craxinno CRM</div>
          </div>

          <form action="" className='flex flex-col mt-10 w-full justify-center items-center gap-y-5'>

            <input type="email"
              id='email'
              placeholder='Enter your email'
              className='border bg-slate-200 px-2 py-2 rounded-lg text-center w-[80%]'
            />

            <input type="text" id="password" placeholder='Please enter your password'
              className='border bg-slate-200 px-2 py-2 rounded-lg text-center w-[80%]'
            />

            <div className='flex w-[75%]  justify-between gap-x-2 -mt-4'>
              <label htmlFor="remeberme" className='text-sm flex justify-center items-center gap-x-2'>
                <input type="checkbox" name="" id="rememberme" />
                remeber Me
              </label>
              <p className='text-[#0000ff] cursor-pointer text-sm'>Forgot Password ?</p>
            </div>

          </form>


          {/* button  */}
          <div className='mt-10 flex flex-col gap-y-5 justify-center items-center w-[80%] mx-auto  '>
            <div className='w-full '>
              <button className='rounded-xl border border-[#5e5eec] px-3 py-2 w-full'>Login</button>
            </div>
            <p>or</p>
            <div className='w-full'>
              <button className='rounded-xl border border-[#5e5eec] px-3 py-2 w-full'>Login With Google</button>
            </div>

          </div>


          {/* create account */}
          <div className='mt-5'>
            <p className='text-sm'>Don't have an account? <span className='text-[#0000ff]'>Create One</span> </p>
          </div>




        </div>


      </div>



    </div>
  )
}

export default Login