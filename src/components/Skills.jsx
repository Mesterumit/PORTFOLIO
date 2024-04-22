import CSS from '../assets/css.png'
import EJS from '../assets/ejs.png'
import GITHUB from '../assets/github.png'
import JS from '../assets/js.png'
import MONGO from '../assets/mongo.jpg'
import Node from '../assets/Node.png'
import React from '../assets/react-logo.png'
import Ts from '../assets/TypeScript.png'
import sql from '../assets/SQL.png'

const Skills = () => {
    return (
        <div name='skills' className='w-screen screen bg-[#0a192f] text-gray-300 pt-20 mx-auto   mr-20 '>
            {/* Container */}
            <div className='max-w-[1000px]  px-20 p-4 flex flex-col justif-content w-full h-full '
            >
                <div >
                    {/* inline helping to keep under line as much as text length */}
                    <p className=' text-3xl font-bold inline border-b-4 border-pink-600 text-white' >Skills</p>
                    <p className='text-lg py-3 px-4'>These are the technologies I have worked with.</p>
                </div>

                <div className='w-full  grid grid-cols sm:grid-cols-3 gap-4 text-center py-8 '>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={CSS} alt='CSS icon' />
                        <p>CSS</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={EJS} alt='ejs icon' />
                        <p>EJS</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto color-gray' src={GITHUB} alt='github icon' />
                        <p>GITHUB</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={JS} alt='js icon' />
                        <p>JS</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={MONGO} alt='mongo icon' />
                        <p>MONGO</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mt-5 mx-auto' src={Node} alt='node icon' />
                        <p className='pt-4'>NODE</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mt-5 mx-auto' src={React} alt='react icon' />
                        <p className='pt-4'>React</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mt-5 mx-auto' src={Ts} alt='ts icon' />
                        <p className='pt-4'>TypeScript</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mt-5 mx-auto' src={sql} alt='sql icon' />
                        <p className='pt-4'>SQL</p>
                    </div>
                </div>
            </div>

        </div>
    )
}
export default Skills