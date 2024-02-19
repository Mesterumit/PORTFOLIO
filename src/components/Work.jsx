// import WorkImg from '../assets/workImg.jpeg'
import { useState } from 'react'
import blogAppGif from '../GIF/blogapp.gif'
import BLOGAPP from '../GIF/BLOG-APP.gif'
import Appointment from '../GIF/Appointment.gif'
import Horoscope from '../GIF/Horoscope.gif'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "./Main.scss";


const Work = () => {
   
    const works = [
        {
            title: "BLOG-APP",
            path: "https://github.com/Mesterumit/Blog_APP-REACT-REDUX",
            gif: `${BLOGAPP}`,
            demoUrl: 'https://mesterumit.github.io/Post-App/',
            detail:'An online single-page web application designed to facilitate the management of orders and inventory. It offers functionalities to retrieve, add, edit, or delete posts.'
        },
        {
            title: "Appointment",
            path: "https://github.com/Mesterumit/Appointment-App",
            gif: `${Appointment}`,
            demoUrl: 'https://mesterumit.github.io/Appointment-App/',
            detail:'The Appointment Booking App is a user-friendly web application built with React.js, HTML, CSS, and Bootstrap. It simplifies scheduling appointments with doctors by allowing patients to browse available doctors and book appointments based on their preferences and availability.'
        },
        {
            title: "NBA-APP",
            path: "https://github.com/Mesterumit/NBA_APP.git",
            gif: 'https://raw.githubusercontent.com/Mesterumit/NBA_APP/main/public/ezgif.com-crop.gif',
            demoUrl: 'https://mesterumit.github.io/NBA_APP/',
            detail:"The NBA Player Card Application is a web-based platform designed to showcase information and statistics about NBA players. Developed using React.js, HTML, CSS, and Bootstrap, the application offers an intuitive interface for users to explore  the player's career stats."
        },
        {
            title: 'Tour-Places',
            path: "https://github.com/Mesterumit/Tour_Places",
            gif: "https://raw.githubusercontent.com/Mesterumit/Tour_Places/main/public/ezgif.com-video-to-gif-converter.gif",
            demoUrl: "https://mesterumit.github.io/Tour_Places/",
            detail:"The Tour Place app uses React and SASS to display captivating destinations. With media queries for responsiveness and mock data, users can explore various places effortlessly."

        },
        {
            title: 'Blog-App-EJS',
            path: "https://github.com/Mesterumit/BLOG-APP-EJS",
            gif: `${blogAppGif}`,
            demoUrl: "https://blog-tamplate-ejs-app.onrender.com",
            detail:"The Blog App utilizes EJS templates to render HTML and enables users to interact with the server through GET and POST requests for updating content."
        },
        {
            title: 'Horoscope',
            path: "https://github.com/Mesterumit/Horoscope_App",
            gif: `${Horoscope}`,
            // demoUrl: "https://blog-tamplate-ejs-app.onrender.com",
            detail:"The Horoscope App uses React and SASS,HTML to display image and information about sign. With media queries for responsiveness and mock data, users can explore various sign"
        }
    ]


    console.log(works[2].gif)
    return (
        <div name='work' className=' card-container w-full mx-auto md:h-100vh text-gray-300  bg-[#0a192f] py-10  h-100 ' >

            <div >
                <div className=' mx-auto  ml-20 mr-20 mb-10 '>
                    <p className='text-4xl mx-auto font-bold inline border-b-4 text-gray-300 border-pink-600'>
                        Works
                    </p>
                    <p className='py-6'>Check out some of my recent work</p>
                </div>
                {/* anything over sm="cols-2"  */}
                {/* anything over md="cols-3"  */}
                {/* Card container */}
                <div
                    className='ml-20  grid grid-cols sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4  xlg:grid-cols-4 text-center  gap-4 min-w-48  max-w-50 pb-10 max-h-18'
                >

                    {/* card item */}

                    {works.map((item, index) => (
                        <div className="cards rounded-lg mb-10 shadow-2xl group pr-5 border  ">
                        <div
                            key={index}
                            className='rounded-lg hover:scale-110 hover:z-50  border-4 border-indigo-800 mb-10 shadow-2xl '
                            style={{
                                backgroundImage: item.gifLocal ? `url(${item.gifLocal})` : `url(${item.gif})`,
                                backgroundSize: 'cover',
                                backgroundRepeat: 'no-repeat',
                                backgroundPosition: 'center',
                                padding: '5px',
                                position: 'relative',
                                height: '200px',
                            }} >    

                            <span
                                className=' absolute left-3 -top-2   bg-white text-xl font-bold text-[#333399] tracking-wider rounded-lg'>
                                {item.title} 
                            </span>
                            <div className="card-over">
                                <p  className="text-sm font-bold ">
                                    {item.detail}
                                </p>
                            </div>

                            <div className='pt-4 absolute -right-1 -top-6 opacity-75 h-10'>
                                <a href={item?.demoUrl || '/'} target="_blank" rel="noopener noreferrer">
                                    {/* Using target="_blank" to open the link in a new tab */}
                                    <button className='text-center rounded-lg px-4  m-2 bg-pink-600  hover:bg-blue-700 text-white-700 font-bold text-sm'>
                                        Demo
                                    </button>
                                </a>
                                <a href={item.path} target="_blank" rel="noopener noreferrer">
                                    {/* Assuming 'item' has a 'codeUrl' property for the code link */}
                                    <button className='text-center rounded-lg px-4  m-2 bg-pink-600 hover:bg-blue-600 text-white-700 font-bold text-sm'>
                                        Code
                                    </button>
                                </a>
                            
                            </div>



                        </div>
                        </div>
                    ))}
                    {/* Hover Effects */}
                    {/* </div> */}

                </div>
            </div>

        </div>


    )
}
export default Work

