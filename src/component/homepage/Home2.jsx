import React from 'react'
import { FaArrowRight } from 'react-icons/fa'
import { IoIosStar } from 'react-icons/io'
import { Link } from 'react-router-dom'

const Home2 = () => {
  return (
    <div className=' h-[80vh] flex' >

<div className='left w-[50%] pl-36 pt-20'>

    <div className=' cards1 flex '>
        <div className=' w-[250px] h-[250px] bg-white flex flex-col border-r-2 border-b-2 items-center '>
                 <img src="https://autoaid.in/wp-content/uploads/2023/11/App-downloads-Gif-1.gif" className='w-[150px]' />
            <h1 className='text-[#215277] font-bold text-5xl'>30K+</h1>
            <p className=' text-xl mt-2 '>App Downloads</p>
        </div>
        <div className=' w-[250px] border-b-2 h-[250px] bg-white flex flex-col items-center '>
                 <img src="https://autoaid.in/wp-content/uploads/2023/11/Different-services-Gif-1.gif" className='w-[150px]' />
            <h1 className='text-[#215277] font-bold text-5xl'>30+</h1>
            <p className=' text-xl mt-2 '>Different Services</p>
        </div>

    </div>
    <div className=' cards2 flex '>
        <div className=' w-[250px] h-[250px] bg-white flex flex-col border-r-2 items-center '>
                 <img src="https://autoaid.in/wp-content/uploads/2023/11/Play-store-Review-Gif-2.gif" className='w-[150px]' />
            <h1 className='text-[#215277] font-bold text-5xl flex'>4.8 <IoIosStar /> </h1>
            <p className=' text-xl mt-2 '>Coustomer Review</p>
        </div>
        <div className=' w-[250px] h-[250px] bg-white flex flex-col items-center '>
                 <img src="https://autoaid.in/wp-content/uploads/2023/11/Connected-states-Gif-1.gif" className='w-[150px]' />
            <h1 className='text-[#215277] font-bold text-5xl'>20+</h1>
            <p className=' text-xl mt-2 '>States Coverd</p>
        </div>

    </div>


</div>
<div className='right w-[50%]'>
    <h1 className='text-[#215277] font-semibold text-6xl px-20 pt-28 tracking-wide '>Experience the new Gen Automotive Services</h1>
    <p className=' text-xl px-20 pt-6 '>Auto Aid helps vehicle owners to accomplish their vehicle repair, maintenance and support requirements. Auto Aid connects vehicle owners with automotive service providers on a single platform providing a hassle-free journey.</p>
    <Link to='/about' class="w-fit bg-white py-2 mt-10 mx-20 text-[#215277] px-3 h-[50px] my-3 flex items-center justify-center rounded-xl cursor-pointer relative overflow-hidden transition-all duration-500 ease-in-out shadow-md hover:scale-105 hover:shadow-lg before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-[#E1CD8C] before:to-[#ebdbaa] before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-xl hover:before:left-0 font-bold gap-4">
  Learn More <span className=' h-10'><FaArrowRight  className=' h-10' /></span>
</Link>
</div>
    </div>
    
  )
}

export default Home2