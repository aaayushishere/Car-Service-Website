import React from 'react'

const Cards = () => {
    return (
        <>

            <h1 className=' text-[3.3rem] font-semibold text-center my-10 text-[#00537A] '>Building a more sustainable future</h1>

            {/* Card one */}
            <div className=' w-full h-[50%] flex gap-10 justify-between px-16 py-5'>
                <div className="left w-[50%] h-[50%] ">
                    <h1 className=' text-4xl font-semibold text-yellow-500'>Environmental</h1>
                    <h1 className=' text-[1.6rem] font-semibold text-[#00537A] mt-1'>Pollution & Waste</h1>
                    <p className=' text-lg mt-2'>Our entire workflow is managed digitally through our App, reducing paper usage. We also use environment-friendly products to service vehicles.</p>

                    <h1 className=' text-[1.6rem] font-semibold mt-5 text-[#00537A]'>Resource & Land Use</h1>
                    <p className=' text-lg mt-2'>Refurbishment of vehicle components always takes precedence over new resource consumption. We actively promote recycling and are particular about the disposal of auto parts to reduce landfills.</p>
                </div>
                <div className="right w-[45%] h-[50%] bg-red-400 rounded-md overflow-hidden">
                    <img className=' w-full h-full object-cover' src="https://autoaid.in/wp-content/uploads/2023/11/enov.jpg" alt="" />
                </div>
            </div>

            {/* Card two */}
            <div className=' w-full h-[50%] flex gap-10 justify-between px-16 py-5'>

                <div className="right w-[45%] h-[50%] bg-red-400 rounded-md overflow-hidden">
                    <img className=' w-full h-full object-cover' src="https://autoaid.in/wp-content/uploads/2023/11/Social_1.jpg" alt="" />
                </div>
                <div className="left w-[50%] h-[50%] ">
                    <h1 className=' text-4xl font-semibold text-yellow-500'>Social</h1>
                    <h1 className=' text-[1.6rem] font-semibold text-[#00537A] mt-1'>Health & Safety</h1>
                    <p className=' text-lg mt-2'>The formation of Auto Aid was driven by a genuine concern for the safety of those stranded on roads & highways. We ensure rapid response to reduce the duration motorists are stranded, minimizing exposure to potential hazards.</p>

                    <h1 className=' text-[1.6rem] font-semibold mt-5 text-[#00537A]'>Community Impact</h1>
                    <p className=' text-lg mt-2'>Continuously providing additional revenue to more than 3,000 members of the Automobile Technician community. We also support local businesses and contribute to local economies.</p>
                </div>
            </div>

            {/* Card third */}

            <div className=' w-full h-[50%] flex gap-10 justify-between px-16 py-5'>
                <div className="left w-[50%] h-[50%] ">
                    <h1 className=' text-4xl font-semibold text-yellow-500'>Governance</h1>
                    <h1 className=' text-[1.6rem] font-semibold text-[#00537A] mt-1'>Risk Management</h1>
                    <p className=' text-lg mt-2'>Our service is essentially providing a solution to manage the risks of automobile breakdowns. We adhere to stringent safety standards and maintain transparency in our operations, offering the utmost assurance to our customers.</p>

                    <h1 className=' text-[1.6rem] font-semibold mt-5 text-[#00537A]'>Leadership & Corporate Governance</h1>
                    <p className=' text-lg mt-2'>We are a platform for Technician communities and are demonstrating beneficial new ways of providing service. Our leadership ensures an unbiased and inclusive workspace promoting innovation and efficiency.</p>
                </div>
                <div className="right w-[45%] h-[50%] bg-red-400 rounded-md overflow-hidden">
                    <img className=' w-full h-full object-cover' src="https://autoaid.in/wp-content/uploads/2023/11/gov.jpg" alt="" />
                </div>

            </div>
        </>
    )
}

export default Cards