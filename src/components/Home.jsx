import React from 'react'
import Img from '../assets/1.jpg'

export const Home = () => {
  return (
    <div name='home' className='bg-[#0a192f] w-full h-screen'>
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
         <div>
         <img src={Img} alt="my pic" className='rounded-2xl'
          style={{height:'200px', width:'280px'}}/>
      <p className='text-pink-600'>Hi, my name is</p>
        <h1 className='text-2xl sm:text-7xl font-bold text-[#ccd6f6]'>
          Agboola Oluwadurotimi
        </h1>
        <h2 className='text-3xl sm:text-7xl font-bold text-[#8892b0]'>
          I'm a Front End Developer.
        </h2>
        <p className='text-[#8892b0] py-4 max-w-[700px]'>
          I’m a developer specializing in building (and occasionally
          designing) exceptional digital experiences. Currently, I’m focused on
          building responsive web and mobile applications.
        </p> 
        </div>
      </div>

    </div>
  )
}
