// import WorkImg from '../assets/workImg.jpeg'
import { useState } from 'react'
import blogAppGif from '../GIF/blogapp.gif'
import BLOGAPP from '../GIF/BLOG-APP.gif'
import Appointment from '../GIF/Appointment.gif'
import Horoscope from '../GIF/Horoscope.gif'
import TypeTodo from '../GIF/Type-Todo.gif'
import STOCKAPP from '../GIF/STOCK-APPgif.gif'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "./Main.scss";


const Work = () => {
   
    const works = [
        {
            title: "TypeScript-Todo",
            path: "https://github.com/Mesterumit/TypeScript_ToDo",
            gif: `${TypeTodo}`,
            demoUrl: ' https://mesterumit.github.io/TypeScript_ToDo/',
            detail:'An online single-page web application designed to facilitate the management of todo list. It offers fununctionality to add new tasks, delete and mark is done by Typescript and React.'
        },
        {
            title: "BLOG-APP",
            path: "https://github.com/Mesterumit/Post-App",
            gif: `${BLOGAPP}`,
            demoUrl: 'https://mesterumit.github.io/Post-App/',
            detail:'An online single-page web application designed to facilitate the management of orders and inventory. It offers functionalities to retrieve, add, edit, or delete posts.'
        },
        {
            title: "STOCK-APP",
            path: "https://github.com/Mesterumit/stock-app",
            gif: `${STOCKAPP }`,
            detail:'An online single-page web application designed to facilitate the management of orders and inventory using react,redux. It offers functionalities to track purchase , sales and add new brands, categries'
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
                <div className=' mx-auto  ml-20 mr-20 '>
                    <p className='text-3xl mx-auto font-bold inline border-b-4 text-gray-300 border-pink-600 text-white'>
                        Works
                    </p>
                    <p className='py-6 text-lg'>Check out some of my recent works</p>
                </div>
                {/* anything over sm="cols-2"  */}
                {/* anything over md="cols-3"  */}
                {/* Card container */}
                <div
                    className='ml-20  grid grid-cols sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4  xlg:grid-cols-4 text-center  gap-4 min-w-64  max-w-50 pb-10 max-h-18'
                >

                    {/* card item */}

                    {works.map((item, index) => (
                        <div className="cards rounded-lg  group h-full ">
                        <div
                            key={index}
                            className='rounded-lg hover:scale-110 hover:z-50  border-2 border-cyan-500 mb-10 shadow-2xl shadow-cyan-500/50 h-72 '
                            style={{
                                backgroundImage: item.gifLocal ? `url(${item.gifLocal})` : `url(${item.gif})`,
                                backgroundSize: 'cover',
                                backgroundRepeat: 'no-repeat',
                                backgroundPosition: 'center',
                                padding: '5px',
                                position: 'relative',
                            }} >    

                            <span
                                className='absolute left-1  w-1/3 bg-white  font-bold text-black tracking-wider rounded-md'>
                                {item.title} 
                            </span>
                            <div className="card-over">
                                <p  className="text-sm font-bold ">
                                    {item.detail}
                                </p>
                            </div>

                            <div className='pt-4 absolute -right-1 -top-5 h-10'>
                                {item.demoUrl ? ( <a href={item?.demoUrl || '/'} target="_blank" rel="noopener noreferrer">
                                    {/* Using target="_blank" to open the link in a new tab */}
                                    <button className='text-center rounded-lg px-3  m-2 bg-green-500 hover:bg-blue-700  text-white font-bold text-sm tracking-widest'>
                                        Demo
                                    </button>
                                </a>):(
                                    <p>{""}</p>
                                )
                                
                                }
                               
                                <a href={item.path} target="_blank" rel="noopener noreferrer">
                                    {/* Assuming 'item' has a 'codeUrl' property for the code link */}
                                    <button className='text-center rounded-lg px-3  m-2 bg-green-500  hover:bg-blue-600 text-white font-bold text-sm tracking-widest'>
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

