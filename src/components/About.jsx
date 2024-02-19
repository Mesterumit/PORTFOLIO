
const About = () => {
    return (
        <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300 pt-10 mx-auto '>

            <div className='flex flex-col justify-center items-center w-full h-full'>
                <div className='max-w[100px] w-full px-4 grid grid-cols-2 gap-4'>
                    <div className=' pb-8 pl-4  '>

                        <p className='ml-10 text-4xl font-bold inline border-b-4 border-pink-600  '>
                            About
                        </p>
                    </div>
                    <br />
                    <div className='max-w[100px] ml-10 w-full  grid sm:grid-cols-2 gap-8 px-4'>
                        {/* sm:text-rigth is pusing the text to right when 
                        screen get smaller */}
                        {/* I use "grid-cols-2 "  because i have two diffenet, paragraph next to each other 
                        which means in two columns, and i add "responsive screen with "sm:grid-cols-2" 
                        so it will show in two column untill the screen reac the small width
                        then it will be in one column */}
                        <div className='sm:text-right text-4xl font-bold '>
                            <p>Diligent and results-oriented Junior Software Developer with 1 year of experience,
                                dedicated professional at NioyatechTech LLC, specializing in creating seamless and
                                impactful web applications.</p>
                        </div>

                        <div>
                            <p>
                            Proficient in a diverse set of technologies, including JavaScript,
                                React, Redux, CSS, Sass, MaterialUI, Tailwind, Node.js, MongoDB, PostgreSQL, LightSQL,
                                Mongoose, and Sequelize, I bring a well-rounded skill set to development projects.
                                Experienced in tools like Postman, Git, GitHub, and GitLab, I am passionate about ensuring
                                streamlined workflows and maintaining high-quality code standards. Committed to contributing
                                my skills to create scalable, user-centric solutions, I consistently meet the highest standards
                                of excellence in web development.
                            </p>
                        </div>

                    </div>
                </div>


            </div>

        </div>
    )
}

export default About