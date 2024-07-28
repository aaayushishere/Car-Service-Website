import React from 'react'
import { FaRegStar } from "react-icons/fa6";
const ThirdPage = () => {
    return (
        <>
            <div className=' w-full h-[80vh] min-[1300px]:h-[70vh]  bg-[url("https://www.polestar.com/dato-assets/11286/1591804782-polestar-191211-dscf3045darkv001-edited.png?h=844")] bg-no-repeat bg-cover bg-bottom flex flex-col  items-center text-center'>

                <h1 className=' text-5xl font-bold w-[60%] mt-28 text-white min-[1300px]:mt-52 '>
                    Assisting users with hassle-free journeys across India
                </h1>
                <div className=' flex   mt-10'>
                    <div className=' w-64 h-40 border-r-[1px]'>
                        <h1 className=' text-5xl font-bold mt-5 text-white'>30K+</h1>
                        <h1 className=' text-2xl mt-5 text-white'>App Downloads</h1>
                    </div>
                    <div className=' w-72 h-40 border-r-[1px]'>
                        <h1 className=' text-5xl font-bold mt-5 text-white'>30+</h1>
                        <h1 className=' text-2xl mt-5 text-white'>Different Services</h1>
                    </div>
                    <div className=' w-72 h-40 border-r-[1px]'>
                        <h1 className=' text-5xl font-bold mt-5 text-white relative'>4.8<FaRegStar className=' absolute right-[47px] top-[2px]' /></h1>
                        <h1 className=' text-2xl mt-5 text-white'>Play store Review</h1>
                    </div>
                    <div className=' w-64 h-40 '>
                        <h1 className=' text-5xl font-bold mt-5 text-white'>20+</h1>
                        <h1 className=' text-2xl mt-5 text-white'>States Covered</h1>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ThirdPage