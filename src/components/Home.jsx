import React from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi'


const Home = () => {
    return (
        <div name='home' className='h-screen bg-[#0a192f] w-screen object-cover' style={{width:'100%'}}>

            {/* Container */}
            <div className='max-w[1000px] mx-auto px-8 flex flex-col justify-center h-full '>
                <p className='text-blue-300 px-10 '>Hi, My name is Umit Mester</p>
                <p className='text-3xl sm:text-4xl font-bold text-white px-10'>I'm a Full Stack Developer.</p>
                <p className='text-3xl sm:text-4xl py-4 px-10 font-bold text-[#8892b0]'>

                    A seasoned Full Stack Developer at Nioyatech, I specialize in leading transformative projects,
                    delivering user-centric applications, and seamlessly integrating front-end and back-end components.
                    With a commitment to excellence and a passion for impactful solutions,
                    I actively seek opportunities to contribute to the evolution of digital environments.
                    Explore my portfolio for exciting possibilities ahead.
                </p>
                <div>
                    <button className=' text-white border-2 px-10 py-3 ml-10 flex items-center hover:bg-blue-600 hover:border-blue-600'>View Work
                        <HiArrowNarrowRight className='ml-3 group  ' /> </button>
                </div>
            </div>
        </div>
    )
}
export default Home