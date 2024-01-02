import React from 'react'
import ayushmaan from "../assets//ayushmaan.jpg"
import banner from "../assets/banner.jpg"

const Home = () => {
  return (
    <div className='overflow-x-hidden bg-blue-100  w-[100vw]  flex  flex-col justify-center items-center mx-auto '>

      {/* Navbar */}
      <div className=' w-full bg-gradient-to-r from-blue-300 to-purple-300'>
        <div className='w-11/12 mx-auto py-5 flex justify-between items-center'>
          <p className='text-lg font-semibold text-white'>Ayushmaan Gupta</p>
          {/* button */}
          <div>
            <div className='flex gap-x-5 justify-center w-full'>
              <div className='w-full'>
                <button className='rounded-xl bg-[#FFFF00] px-5 py-2 w-full'>Login </button>
              </div>
              <div className='w-full'>
                <button className='rounded-xl bg-[#FFFF00] px-5 py-2 w-full'>Signup</button>
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* hero */}
      <div className=' w-[100%] flex flex-col md:flex-row  items-center justify-between  md:ml-[27%] mt-[5rem] pb-[5rem] '>

        {/* left */}
        <div className='w-[50%]'>
          <p className='text-4xl'>Hi! Ayushmaan Gupta</p>

          <p className='mt-2'>I’m a web developer and here is my portfolio website. Here you’ll learn about my journey as a web developer.</p>

          <div className='w-full mt-5'>
            <button className='rounded-xl bg-[#4cd6f8] px-5 py-2 w-fit shadow-lg justify-center items-center'>Contact Me </button>
          </div>
        </div >

        {/* right */}
        <div className='w-fit mt-5 md:mt-0  mx-auto'>
          <img src={ayushmaan} alt="" className='w-[60%] h-[30%] md:w-[50%] rounded-lg ml-[20%]  ' />
        </div>
      </div>

   


    </div>
  )
}

export default Home