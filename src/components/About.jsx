import coding from '../assets/coding.png'
const About = () => {
    return (
        <div name='about' className='w-screen h-100 bg-[#0a192f] text-gray-300 pt-4 mx-auto overflow-hidden '>

            <div className=' justify-center items-center w-100 h-full '>
                <div className=' max-w[100%] w-full px-4'>
                    <div className='pb-8 pl-4  '>

                        <p className='ml-10 text-3xl font-bold inline border-b-4 border-pink-600  text-white'>
                            About
                        </p>
                    </div>
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

                    </div>
                   
                </div>


            </div>

        </div>
    )
}

export default About