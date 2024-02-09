// import WorkImg from '../assets/workImg.jpeg'

import blogAppGif from '../GIF/blogapp.gif'
import BLOGAPP from '../GIF/BLOG-APP.gif'
import Appointment from '../GIF/Appointment.gif'


const Work= () => {
    const works = [
        {
            title: "BLOG-APP",
            path: "https://github.com/Mesterumit/Blog_APP-REACT-REDUX",
            gif: `${BLOGAPP}`,
            demoUrl: 'https://mesterumit.github.io/Blog_APP-REACT-REDUX/' 
        },
        {
            title: "Appointment",
            path: "https://github.com/Mesterumit/Appointment-App",
            gif: `${Appointment}`,
            demoUrl: 'https://mesterumit.github.io/Appointment-App/' 
        },
        {
            title: "NBA-APP",
            path: "https://github.com/Mesterumit/NBA_APP.git",
            gif: 'https://raw.githubusercontent.com/Mesterumit/NBA_APP/main/public/ezgif.com-crop.gif', 
            demoUrl: 'https://mesterumit.github.io/NBA_APP/' 
        },
        {
            title:'Tour-Places',
            path:"https://github.com/Mesterumit/Tour_Places",
            gif:"https://raw.githubusercontent.com/Mesterumit/Tour_Places/main/public/ezgif.com-video-to-gif-converter.gif",
            demoUrl:"https://mesterumit.github.io/Tour_Places/"

        },
        {
            title:'Blog-App-EJS',
            path:"https://github.com/Mesterumit/BLOG-APP-EJS",
            gif:`${blogAppGif}`,
            demoUrl:"https://blog-tamplate-ejs-app.onrender.com"

        }
    ]
   

console.log(works[2].gif)
    return (
        <div name='work' className='w-full mx-auto md:h-100vh text-gray-300  bg-[#0a192f] py-10  h-screen '>

            <div >
                <div className=' mx-auto px-20  ml-20 mr-20 mb-10'>
                    <p className='text-4xl mx-auto font-bold inline border-b-4 text-gray-300 border-pink-600'>
                        Works
                    </p>
                    <p className='py-6'>Check out some of my recent work</p>
                </div>
                {/* anything over sm="cols-2"  */}
                {/* anything over md="cols-3"  */}
                {/* Card container */}
                <div
                    className='container ml-20  grid grid-cols sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3 text-center gap-20 '
                    >
                        
                    {/* card item */}
                   
                        {works.map((item, index) => (
                            <div
                             key={index} 
                             className='rounded-lg hover:scale-110 hover:z-50  border-4 border-indigo-800 mb-10 shadow-2xl'
                             style={{ 
                                backgroundImage: item.gifLocal ? `url(${item.gifLocal})` : `url(${item.gif})`,
                                backgroundSize: 'cover', 
                                backgroundRepeat: 'no-repeat', 
                                backgroundPosition: 'center',
                                padding:'5px',
                                position:'relative',
                                height:'200px',
                              }}
                              >
                                <span
                                 className='absolute -left-1 -top-10 backdrop-opacity-10 backdrop-invert bg-white text-2xl font-bold text-[#333399] tracking-wider rounded-lg'>
                                    {item.title} {/* Assuming 'item' has a 'title' property */}
                                </span>
                                <div className='pt-4 absolute -right-5 -bottom-16'>
                                    <a href={item.demoUrl || '/'} target="_blank" rel="noopener noreferrer">
                                        {/* Using target="_blank" to open the link in a new tab */}
                                        <button className='text-center rounded-lg px-4 py-3 m-2 bg-blue-500   hover:bg-blue-600 text-white-700 font-bold text-lg'>
                                            Demo
                                        </button>
                                    </a>
                                    <a href={item.path} target="_blank" rel="noopener noreferrer">
                                        {/* Assuming 'item' has a 'codeUrl' property for the code link */}
                                        <button className='text-center rounded-lg px-4 py-3 m-2 bg-blue-500  hover:bg-blue-600 text-white-700 font-bold text-lg'>
                                            Code
                                        </button>
                                    </a>
                                   
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

