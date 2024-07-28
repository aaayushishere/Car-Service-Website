import React from 'react'
import { BsTools } from 'react-icons/bs'
import { Link } from 'react-router-dom'

const LastPage = () => {
    return (
        <>
              <div>
        <div className=' bg-[#215277] w-full flex justify-between h-[60vh] mt-20 '>
            <div className='  flex-col w-[55vw] flex justify-center pl-40 gap-6'>
 <h1 className='  w-[70%] text-gray-900 font-semibold text-5xl'>A helping hand for all Automobile users</h1>
 <p className=' text-white font-semibold text-xl w-[70%]'>We help Automotive users to fulfil their repair, maintenance and support needs.</p>
 <Link to='/contact' class="w-fit bg-white py-2 text-[#215277] px-3 h-[50px] my-3 flex items-center justify-center rounded-xl cursor-pointer relative overflow-hidden transition-all duration-500 ease-in-out shadow-md hover:scale-105 hover:shadow-lg before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-[#E1CD8C] before:to-[#ebdbaa] before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-xl hover:before:left-0 font-bold gap-4">
  Book a Service ! NOW <span className=' h-10'><BsTools className=' h-10' /></span>
</Link>
            </div>
            <div className=' bg-center w-[45vw] bg-cover bg-[url("https://cdn.pixabay.com/photo/2022/12/21/11/29/man-7669846_1280.jpg")] '/>
        </div>
    </div>
        </>
    )
}

export default LastPage

