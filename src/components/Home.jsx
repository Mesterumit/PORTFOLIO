import React from 'react'
import { FaArrowAltCircleDown} from 'react-icons/fa'
// import { useNavigate } from "react-router-dom";
import { Link } from "react-scroll";

const Home = () => {

    return (
        <div name='home' className='h-100 bg-[#0a192f] w-screen object-cover pt-20' style={{width:'100%'}}>

            {/* Container */}
            <div className='max-w[1000px] mx-auto px-8 pt-20 flex flex-col justify-center h-full '>
                <p className='text-3xl sm:text-4xl font-bold text-white px-10'>Hi, My name is Umit Mester</p>
                <p className='text-3xl sm:text-4xl py-4 px-10 font-bold text-[#8892b0]'>

                    A seasoned Full Stack Developer at Nioyatech, I specialize in leading transformative projects,
                    delivering user-centric applications, and seamlessly integrating front-end and back-end components.
                    With a commitment to excellence and a passion for impactful solutions,
                    I actively seek opportunities to contribute to the evolution of digital environments.
                    Explore my portfolio for exciting possibilities ahead.
                </p>
                <div>
                <Link to='work' className='flex text-white border-2 items-center px-4 py-3 ml-10 hover:bg-blue-600 hover:border-blue-600 min-w-32 cursor-pointer rounded-xl  border-indigo-500 float-end shadow-xl shadow-indigo-500/40' smooth={true} duration={500} style={{maxWidth:'13%'}} >View Works
                   
                        <FaArrowAltCircleDown className='ml-3 group  ' />                  
                </Link>
             
                </div>
            </div>
        </div>
    )
}
export default Home