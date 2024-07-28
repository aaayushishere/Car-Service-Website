import React from 'react'
import ReactPlayer from 'react-player';
const SecondPage = () => {
    return (
        <>
            <div className=' w-full h-[100%] px-32 py-8 '>
                <div className=' w-full h-full rounded-xl overflow-hidden '>
                    <ReactPlayer playing={false} loop={true} controls={true} width={"100%"} height={"100%"} url='src\videos\R35_GTR_EDIT__4K(2160p).webm' />
                </div>
                <h1 className=' text-3xl italic font-normal  text-center relative pb-10 mt-10  text-[#00537A]'>"Auto Aid ensures the finest automotive service experience anywhere, anytime with our wide technical team base, timely service and flexible pricing."</h1>
            </div>
        </>
    )
}

export default SecondPage