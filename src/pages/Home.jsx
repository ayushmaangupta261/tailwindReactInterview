import React from 'react'
import home from "../assets/home.webp"
import banner from "../assets/banner.jpg"

const Home = () => {
  return (
    <div className='overflow-x-hidden bg-blue-100  w-[100vw]   flex  flex-col justify-center items-center mx-auto pb-[15rem]'>

      {/* Navbar */}
      <div className=' w-full bg-gradient-to-r from-blue-300 to-purple-300'>
        <div className='w-11/12 mx-auto py-5 flex justify-between items-center'>
          <p className='text-lg font-semibold text-white'>Craxinno CRM</p>
          {/* button */}
          <div>
            <div className='flex gap-x-5 justify-center w-full'>
              <div className='w-full'>
                <button className='rounded-xl bg-[#FFFF00] px-5 py-2 w-[100px]'>Login </button>
              </div>
              <div className='w-full'>
                <button className='rounded-xl bg-[#FFFF00] px-5 py-2 w-[100px]'>Signup</button>
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* hero */}
      <div className=' w-[100%] flex flex-col md:flex-row  items-center justify-between  md:ml-[19%] mt-[10rem] pb-[5rem] '>

        {/* left */}
        <div className='w-[50%]'>
          <p className=' text-2xl md:text-4xl'>Craxinno CRM</p>

          <p className='mt-2'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo accusamus eos maiores incidunt quo labore! Exercitationem, reprehenderit enim iusto hic eveniet, debitis inventore, et fuga maxime iste quasi totam provident harum fugiat cupiditate fugit quod ratione quibusdam nam! Quod odio eligendi est inventore quaerat incidunt! Corporis enim officia fuga nulla.</p>

          <div className='w-full mt-5'>
            <button className='rounded-xl bg-[#4cd6f8] px-5 py-2 w-fit shadow-lg justify-center items-center'>Contact Me </button>
          </div>
        </div >

        {/* right */}
        <div className='w-fit mt-5 md:mt-0  mx-auto'>
          <img src={home} alt="" className='w-[60%] h-[30%] md:w-[50%] rounded-lg ml-[20%]  ' />
        </div>
      </div>

   


    </div>
  )
}

export default Home