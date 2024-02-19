

const Contact =()=>{
    return(
        <div name='contact' className='w-full h-screen bg-[#0a192f] flex justify-center items-center mx-auto  '>
            <form 
            action="https://getform.io/f/c64d7e29-7df6-4935-94ae-b54e4a5500c9" 
            method='POST'
             className='flex flex-col max-w-[600px] w-full '>
                <div className='pb-4 '>
                    <p className='text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300'>
                        Contact
                    </p>
                    <p className='text-gray-300'>
                        Submit the form below or shoot me an email :<spam><a className="underline decoration-pink-500" href='mailto:mesterumit@gmail.com' target='_blank'>
                        mesterumit@gmail.com
                        </a></spam> 
                    </p>

                </div>
                <input className='my-4 p-2 bg-[#ccd6f6] p-2'  type='text' placeholder='Name' name='name'/>
                <input className='my-4 p-2 bg-[#ccd6f6]' type='email' placeholder='Email' name='email'/>
                <textarea className='bg-[#ccd6f6] p-2' name='message' rows='10'></textarea>
                <button className='text-white border-2 hover:bg:pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto mb-5 flex items-center'>Let's Collaborate</button>
            </form>
        </div>
    )
}

export default Contact 