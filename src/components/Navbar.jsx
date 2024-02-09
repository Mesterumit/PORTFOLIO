import React from 'react'
import { useState } from 'react'
import { FaBars, FaTimes, FaGithub } from 'react-icons/fa'
import { FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from 'react-icons/hi'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import Logo from '../assets/Profile.png'
import { Link } from "react-scroll";
const Navbar = () => {
    const [nav, setNav] = useState(false)

    const handleClick = () => {
        setNav(!nav)
    }
    return (
        <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-gray-800 text-white z-10'>

            <div>
                <img src={Logo} alt="logo" style={{ width: '70px' }} className='rounded-full' />
            </div>
            {/* Menu */}
            {/* anything under 768px will be hidden  */}
            <ul className="hidden md:flex">
                <li><Link  to='home' smooth={true} duration={500} >Home</Link></li>
                <li><Link to='about' smooth={true} duration={500} >About</Link></li>
                <li><Link to='skills' smooth={true} duration={500} >Skills</Link></li>
                <li><Link to='work' smooth={true} duration={500} >Works</Link></li>
                <li><Link to='contact' smooth={true} duration={500} >Contact</Link></li>
            </ul>

            {/* Hamburger Icon*/}
            {/* it will show the icon under 768 px */}
            <div className='md:hidden z-10' onClick={handleClick}>
                {!nav ? <FaBars /> : <FaTimes />}
            </div>
            {/* Collaps Menu */}
            <ul className={!nav ? 'hidden' : ' absolute top-0 left-0 w-full h-screen  bg-gray-800 flex flex-col justify-center items-center '}>
                <li className="py-6 text-4xl">
                <Link onClick={handleClick} to='home' smooth={true} duration={500} >Home</Link></li>
                <li className="py-6 text-4xl">
                <Link onClick={handleClick} to='about' smooth={true} duration={500} >About</Link>
                </li>
                <li className="py-6 text-4xl">
                <Link onClick={handleClick} to='skills' smooth={true} duration={500} >Skills</Link>
                </li>
                <li className="py-6 text-4xl">
                <Link onClick={handleClick} to='work' smooth={true} duration={500} >Works</Link>
                </li>
                <li className="py-6 text-4xl">
                <Link onClick={handleClick} to='contact' smooth={true} duration={500} >Contact</Link>
                </li>
            </ul>


            {/* social icons */}
            <div className='hidden lg:flex fixed flex-col top-[35%] left-0 mt-3 mb-3'>
                <ul>
                    <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-500 bg-blue-600">
                        <a className=" flex justify-between items-center text-gary w-full" href='https://www.linkedin.com/in/umitmester' target='_blank'>
                            Linkedin <FaLinkedin size={30} />
                        </a>
                    </li>
                    <li className=' w-[160px] h-[60px] flex items-center ml-[-100px] hover:ml-[-10px] duration-500 bg-black'>
                        <a className=" flex justify-between items-center text-gary w-full " href='https://github.com/Mesterumit' target='_blank'>
                            GitHub <FaGithub size={30} />
                        </a>
                    </li>
                    <li className=' w-[160px] h-[60px] flex items-center ml-[-100px] hover:ml-[-10px] duration-500 bg-blue-300'>
                        <a className=" flex justify-between items-center text-gary w-full " href='mailto:mesterumit@gmail.com' target='_blank'>
                            Email <HiOutlineMail size={30} />
                        </a>
                    </li>
                    <li className=' w-[160px] h-[60px] flex items-center ml-[-100px] hover:ml-[-10px] duration-500 bg-blue-800'>
                        <a className=" flex justify-between items-center text-gary w-full " href='https://docs.google.com/document/d/1nudewcnZLziCG-J6DAs0HCOgcetVss0X/edit' target='_blank'>
                            Resume <BsFillPersonLinesFill size={30} />
                        </a>
                    </li>
                </ul>
            </div>

        </div>
    )
}
export default Navbar