import React from 'react'
import { MdDarkMode } from "react-icons/md";
import { TfiStatsUp } from "react-icons/tfi";
import { CiSearch } from "react-icons/ci";
import dark from "../assets/darkmode.png"
import ayushmaan from "../assets/ayushmaan.jpg"

const Home = () => {
  return (
    <div className='flex flex-col-reverse lg:flex-row justify-center items-center md:justify-between  bg-gradient-to-b from-blue-200 to-purple-200 h-auto pb-[15rem] '>

      {/* profile */}
      <div className='flex-col mt-10 md:ml-10 justify-center items-center  h-auto w-[90%] md:w-[70%] px-5 pb-5 gap-y-[5rem] shadow-md rounded-xl bg-blue-100'>

        {/* 1st div */}
        <div className='flex flex-col lg:flex-row justify-center items-center lg:justify-between gap-y-5 lg:gap-x-[5rem]   mt-5   '>
          {/* <div><MdDarkMode className='text-2xl' /></div> */}
          <div className='flex gap-x-3 w-full justify-center md:justify-start items-center  '>
            <p className=' text-md hover:scale-105 transiton-all duration-200'>Home</p>
            <p className='text-md hover:scale-105 transiton-all duration-200'>Settings</p>
            <p className='text-md hover:scale-105 transiton-all duration-200'>Help</p>
          </div>
          <div className='flex flex-col sm:flex-row justify-center items-center gap-y-2 sm:gap-x-1'>
            <input type="text" placeholder='Search here' className='text-center rounded-lg bg-slate-100 px-5 py-2 hover:scale-95 transiton-all duration-200 w-full' />
            <CiSearch className='text-3xl bg-slate-100 rounded-lg' />
          </div>

        </div>

        {/* 2nd div */}
        <div className='flex  justify-center items-center flex-col lg:flex-row lg:justify-between  gap-y-5  mt-10'>
          <div className='flex gap-x-10 flex-col md:flex-row gap-y-5 justify-center  '>
            <p className='rounded-lg bg-slate-300 px-5 py-2 hover:scale-95 transiton-all duration-200'>Profile</p>
            <p className='rounded-lg bg-slate-100 px-5 py-2 hover:scale-95 transiton-all duration-200'>Clients</p>
            <p className='rounded-lg bg-slate-100 px-5 py-2 hover:scale-95 transiton-all duration-200'>Payments</p>
          </div>
          <div>
            <p className='rounded-lg bg-slate-100 px-5 py-2 hover:scale-95 transiton-all duration-200'>Manage</p>
          </div>
        </div>


        

        {/* 3rd div */}
        <div className='mt-10 bg-slate-100 flex gap-y-[4rem] lg:gap-x-[7rem]  py-[5rem] flex-col lg:flex-row justify-center items-center rounded-lg'>

          

          <div className='w-[40%] md:w-[20%] rounded-full shadow-md'>
            <img src={ayushmaan} alt="" className='rounded-full shadow-md' />
          </div>

          <div className='flex flex-col justify-center items-center'>
            <div className='flex flex-col md:flex-row  gap-x-5 items-center w-[80%] items-center md:justify-between'>
              <p className='text-lg font-semibold'>Name :-</p>
              <p>Ayushmaan Gupta</p>
            </div>

            <div className='flex flex-col md:flex-row  gap-x-5 items-center w-[80%] items-center md:justify-between'>
              <p className='text-lg font-semibold'>Email :-</p>
              <p>ayush.261.gupta@gmail.com</p>
            </div>

            <div className='flex flex-col md:flex-row  gap-x-5 items-center w-[80%] items-center md:justify-between'>
              <p className='text-lg font-semibold'>Mobile no. :-</p>
              <p>8210325261</p>
            </div>

            <div className='flex flex-col  gap-x-5 items-center w-[80%] items-center md:justify-between'>
              <p className='text-lg font-semibold'>About :-</p>
              <p className='text-center md:text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, dicta.</p>
            </div>
          </div>

        </div>

        {/* button */}
        <div className='mt-5 flex justify-center items-center'>
          <button className='rounded-lg bg-slate-300 px-5 py-2 hover:scale-95 transiton-all duration-200'>
            Edit
          </button>
        </div>


      </div>

      {/* sidebar */}
      <div className=' w-[90%] mx-auto lg:w-[20%]  flex flex-col justify-center lg:mr-[3%]  py-10'>

        {/* 1st  */}
        <div className='flex flex-col justify-center items-center bg-blue-100 py-3 rounded-xl'>
          <div className='flex justify-center items-center '>
            <img src={ayushmaan} alt="" className='w-[50%] rounded-full' />
          </div>
          <div>Ayushmaan Gupta</div>
          <div className='flex justify-center items-center gap-x-2'>
            <p>View Stats    </p>
            <TfiStatsUp />
          </div>
        </div>

        {/* 2nd */}
        <div className='flex flex-col items-center bg-blue-100 mt-5 rounded-xl pb-5 pt-4'>
          <div className='bg-slate-100 py-2 px-5 mt-2 rounded-lg w-[90%] text-center  hover:scale-105 transiton-all duration-200'>
            <p>Buy Premium</p>
          </div>
          <div className='flex justify-between bg-slate-100 py-2 px-5 mt-2 rounded-lg w-[90%] text-center  hover:scale-105 transiton-all duration-200'>
            <p>Credit Score</p>
            <p>720</p>
          </div>
          <div className='flex justify-between bg-slate-100 py-2 px-5 mt-2 rounded-lg w-[90%] text-center  hover:scale-105 transiton-all duration-200'>
            <p>Jobs Completed</p>
            <p>50</p>
          </div>
          <div className='flex justify-between bg-slate-100 py-2 px-5 mt-2 rounded-lg w-[90%] text-center  hover:scale-105 transiton-all duration-200'>
            <p>Earning this month</p>
            <p>$23,300</p>
          </div>
        </div>

        <div></div>

      </div>

    </div>
  )
}

export default Home
