import React from 'react'
import { FaArrowAltCircleDown} from 'react-icons/fa'
// import { useNavigate } from "react-router-dom";
import { Link } from "react-scroll";
import coding from '../assets/coding.png'
import Logo from '../assets/Profile.png'

const About = () => {

    return (
        <div name='about' className='h-100 bg-[#0a192f] w-screen object-cover pt-20' style={{width:'100%'}}>
            <div>
                <img src={Logo} alt="logo" style={{ width: '70px', marginLeft:'40%',width:'250px',height:'250px',marginTop:'50px' }} className='rounded-full' />
            </div>
            {/* Container */}
            <div className='max-w[1000px] mx-auto px-8 pt-20 flex flex-col justify-center h-full '>
                <p className='text-3xl sm:text-4xl  text-amber-100 px-10'>Hi, My name is Umit Mester</p>
                <p className='text-3xl sm:text-3xl py-4 px-10  text-white'>

                    A seasoned Frontend Web Developer at Nioyatech, I specialize in leading transformative projects,
                    delivering user-centric applications,
                    <br /> and seamlessly integrating front-end and back-end components.
                    I actively seek opportunities to contribute to the evolution of digital environments.<br />
                    Explore my portfolio for exciting possibilities ahead.
                </p>
                <div>
                <br />
                    <div className=' w-full grid sm:grid-cols-1  md:grid-cols-2  ml-20 '>
                        {/* sm:text-rigth is pusing the text to right when 
                        screen get smaller */}
                        {/* I use "grid-cols-2 "  because i have two diffenet, paragraph next to each other 
                        which means in two columns, and i add "responsive screen with "sm:grid-cols-2" 
                        so it will show in two column untill the screen reac the small width
                        then it will be in one column */}
                        <div className='sm:text-lefy text-2xl font-extralight text-white w-4/4'>
                        <p>
                        A proficient Software Developer with 3+ years of IT and work experience and Master’s Degree in Information Technologies,
                         propelled by diligence and a results-oriented approach, supported by extensive professional experience and a robust
                          educational foundation in software development. A dedicated professional at Nioya Tech LLC,
                           afforded a significant opportunity to specialize in developing seamless and impactful web applications.
                            An exceptional contributor with advanced skills in providing streamlined workflows and maintaining high-quality code standards,
                             while crafting scalable, user-centric solutions. Bringing a comprehensive skill set to development projects, and consistently achieving the highest standards of excellence in web development.
                            </p>
                        </div >
                        <div  className=' overflow-hidden  w-4/6 h-3/4 place-content-center m-auto pr-5'>
                            <img className='shadow-xl shadow-indigo-500/40 h-4/5 ' src={coding }  alt={coding}   /> 
                        </div>
                <Link to='work' className='flex text-white border-2 items-center px-4 py-3 ml-10 hover:bg-blue-600 hover:border-blue-600 min-w-40 cursor-pointer rounded-xl  border-indigo-500  shadow-xl shadow-indigo-500/40' smooth={true} duration={500} style={{maxWidth:'13%',marginLeft:'90%',marginTop:'27px'}} >View Works
                   
                        <FaArrowAltCircleDown className='ml-3 group  ' />                  
                </Link>
             
                </div>

            </div>
        </div>
        </div>
    )
}
export default About