import React from 'react'
import Nav from '../Nav'

import Footer from '../Footer';
import Cards from './Cards';
import LastPage from './LastPage';
import ThirdPage from './ThirdPage';
import SecondPage from './SecondPage';

const Aboutpage = () => {


    return (
        <>

            <div className='  w-full h-96 bg-[url("https://autoaid.in/wp-content/uploads/2023/11/About-us-Breadcrumb-1.jpg")] bg-no-repeat bg-cover bg-right '>

                <Nav />
                <h1 className=' text-6xl font-semibold px-16 pt-28 text-white'>About Us</h1>
            </div>

            <div className=' flex justify-center gap-12 p-16'>
                <div className="first w-[35%]">
                    <h1 className=' text-4xl font-semibold text-[#00537A] '>We help automotive users fulfil their repair, maintenance and support needs.</h1>
                </div>
                <div className="second w-[58%]">
                    <p className=' text-lg leading-6 '>Our journey started in 2021 with a vision to provide assistance to stranded vehicles as well as build an online community of automotive technicians. The idea drew inspiration from the selfless contributions of community service workers during the pandemic. Our founding partners with their years of experience in the automotive sector developed Auto Aid for this purpose. The Auto Aid App connects vehicle owners and automotive service providers on a single platform enabling a hassle-free journey. Vehicle Owners are able to easily find the nearest automotive service personnel at their fingertips while Automotive Technicians increase their revenues by servicing new customers.</p>
                </div>
            </div>
            <div className=' w-full h-[1px] pl-16 pr-16 mb-5 mt-[-20px]'>
                <div className=' w-full h-full bg-[#00000041]'>

                </div>
            </div>

            <SecondPage />
            <ThirdPage />
            <Cards />
            <LastPage />
            <Footer />
        </>
    )
}

export default Aboutpage