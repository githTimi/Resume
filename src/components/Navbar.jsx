import React, { useState } from 'react'
import Logo from '../assets/tim2.png'
import {FaBars, FaTimes,  FaGithub} from 'react-icons/fa'
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { Link } from 'react-scroll';

const Navbar = () => {
const [nav, setNav]= useState(false)
const handleClick=()=>setNav(!nav)

  return (
    <div className='fixed w-full h-[70px] flex justify-between items-center
    px-4 bg-[#0a192f] text-gray-300'>
          <div>
                 <img src={Logo} alt="my name" style={{width:'60px', height:'70px'}}/>
          </div>
          
                 <ul className='hidden md:flex'>
                    <li>
                    <Link to='home' smooth={true} duration={500}>
            Home
          </Link>
                    </li>
                    <li>
                    <Link to='about' smooth={true} duration={500}>
            About
          </Link>
                    </li>
                    <li> <Link to='skills' smooth={true} duration={500}>
            Skills
          </Link></li>
                    <li>
                    <Link to='work' smooth={true} duration={500}>
            Work
          </Link>
                    </li>
                    <li>
                    <Link to='contact' smooth={true} duration={500}>
            Contact
          </Link>
                    </li>
                 </ul>
         
          <div onClick={handleClick} className='md:hidden z-10'>
          {!nav ? <FaBars /> : <FaTimes />}
          </div>
          <ul className= {!nav ? 'hidden'
          : ' absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'}>
                    <li className='py-6 text-4xl'>
                    <Link onClick={handleClick} to='home' smooth={true} duration={500}>
            Home
          </Link>
                    </li>
                    <li className='py-6 text-4xl'>
                    <Link onClick={handleClick} to='about' smooth={true} duration={500}>
            About
          </Link>
                    </li>
                    <li className='py-6 text-4xl'>
                    <Link onClick={handleClick} to='skills' smooth={true} duration={500}>
            Skills
          </Link>
                    </li>
                    <li className='py-6 text-4xl'>
                    <Link onClick={handleClick} to='work' smooth={true} duration={500}>
            Work
          </Link>
                    </li>
                    <li className='py-6 text-4xl'>
                    <Link onClick={handleClick} to='contact' smooth={true} duration={500}>
            Contact
          </Link>
                    </li>
                 </ul>
             <div className='hidden md:flex fixed flex-col top-[40%] left-0'>
                   <ul>
                   <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='https://github.com/githTimi'
            >
              Github <FaGithub size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='https://docs.google.com/document/d/181apcWmVIriGZMU12L0gRPyIkrSPOMw4/edit?usp=sharing&ouid=106105515819438461587&rtpof=true&sd=true'
            >
              Resume <BsFillPersonLinesFill size={30} />
            </a>
          </li>

                   </ul>

             </div>
    </div>
  )
}

export default Navbar