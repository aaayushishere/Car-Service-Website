import React from 'react'
const Page1 = () => {
    return (
        <>
            {/* card 1 */}
            <div className=' w-full h-[90vh]  flex pt-24 pb-14 px-16 min-[1500px]:px-60 min-[1300px]:h-[70vh] '>
                <div className=' w-[50%] h-full'>
                    <img className=' w-full h-full' src="https://autoaid.in/wp-content/uploads/2023/11/The-Impact-of-Automobile-Services-on-Your-Vehicle-Performance.jpg" alt="" />
                </div>
                <div className=' w-[50%] h-full bg-[#f4f4f4e3] py-10 pr-3 flex justify-center'>
                    <div className=' w-full h-full bg-white p-5 relative left-[-30px] pl-10 '>
                        <h1 className=' text-2xl font-semibold text-[#00537A]'>The Impact of Automobile Services on Your <span className=' border-b-2 border-yellow-500 pb-1'> Vehicle's </span>Performance</h1>
                        <p className=' text-lg mt-3'>There are various types of automobiles in the world, and each type requires a specific approach to maintenance. As such, you need a professional who can work specifically on your vehicle type. Whether you have</p>
                        <h1 className=' mt-4 mb-[18px] text-yellow-500'>📅 June 18, 2024</h1>
                    </div>

                </div>
            </div>
            {/* card 2 */}
            <div className=' w-full h-[75vh]  flex pb-14 px-16 min-[1300px]:px-60 min-[1300px]:h-[60vh]'>
                <div className=' w-[50%] h-full'>
                    <img className=' w-full h-full' src="https://autoaid.in/wp-content/uploads/2023/11/10-tips-to-revive-your-automobile-engine.jpg" alt="" />
                </div>
                <div className=' w-[50%] h-full bg-[#f4f4f4e3] py-10 pr-3'>
                    <div className=' w-full h-full bg-white p-5 relative left-[-30px] pl-10 '>
                        <h1 className=' text-2xl font-semibold text-[#00537A]'><span className=' border-b-2 border-yellow-500 pb-1'> 10 tips to </span>revive your automobile engine</h1>
                        <p className=' text-lg mt-5'>Maintaining your automobile's engine is essential for enhancing its performance and lifespan. Despite having knowledge of the engine specifications, people often overlook its maintenance. Experts recommend understanding your vehicle's engine to prevent unexpected breakdowns and
                        </p>
                        <h1 className=' mt-5 mb-[18px] text-yellow-500'>📅 June 18, 2024</h1>
                    </div>

                </div>
            </div>

            {/* card 3 */}

            <div className=' w-full h-[75vh]  flex pb-14 px-16 min-[1300px]:px-60 min-[1300px]:h-[60vh]'>
                <div className=' w-[50%] h-full'>
                    <img className=' w-full h-full' src="https://autoaid.in/wp-content/uploads/2023/10/Tips-to-expand-your-car-life-span.jpg" alt="" />
                </div>
                <div className=' w-[50%] h-full bg-[#f4f4f4e3] py-10 pr-3'>
                    <div className=' w-full h-full bg-white p-5 relative left-[-30px] pl-10 '>
                        <h1 className=' text-2xl font-semibold text-[#00537A]'> <span className=' border-b-2 border-yellow-500 pb-1'>Tips to expand</span> your car's life span</h1>
                        <p className=' text-lg mt-5'>Your drive is an essential part of your life, and with time, people tend to lessen the attention they give to their automobile. The lack of attention results in improper maintenance, which makes the automobile’s</p>
                        <h1 className=' mt-5 mb-[18px] text-yellow-500'>📅 June 18, 2024</h1>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Page1