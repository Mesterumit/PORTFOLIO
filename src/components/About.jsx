import coding from '../assets/coding.png'
const About = () => {
    return (
        <div name='about' className='w-screen h-100 bg-[#0a192f] text-gray-300 pt-5 mx-auto overflow-hidden '>

            <div className=' justify-center items-center w-100 h-full '>
                <div className=' max-w[100%] w-full px-4'>
                    <div className=' pb-8 pl-4  '>

                        <p className='ml-10 text-4xl font-bold inline border-b-4 border-pink-600  '>
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
                        <div className='sm:text-lefy text-3xl font-bold w--3/4'>
                        <p>
                            Proficient in a diverse set of technologies, including JavaScript,
                                React, Redux, CSS, Sass, MaterialUI, Tailwind, Node.js, MongoDB, PostgreSQL, LightSQL,
                                Mongoose, and Sequelize, I bring a well-rounded skill set to development projects.
                                Experienced in tools like Postman, Git, GitHub, and GitLab, I am passionate about ensuring
                                streamlined workflows and maintaining high-quality code standards. Committed to contributing
                                my skills to create scalable, user-centric solutions, I consistently meet the highest standards
                                of excellence in web development.
                            </p>
                        </div >
                        <div  className='  overflow-hidden  w-5/6 h-3/4 place-content-center'>
                            <img className='shadow-xl shadow-indigo-500/40 h-4/5 ' src={coding }  alt={coding}   /> 
                        </div>

                    </div>
                   
                </div>


            </div>

        </div>
    )
}

export default About