import React from 'react'
import BreakDownassistent from './BreakDownassistent'
import RepairandService from './RepairandService'
import DetailingService from './DetailingService'
import ServiceBottomDiv from './ServiceBottomDiv'
import Nav from '../Nav'
import Footer from '../Footer'

const ServicePage = () => {
  return (
    <div>
        <div className='  w-full h-96 bg-[url("https://autoaid.in/wp-content/uploads/2023/11/bg-15.jpg")] bg-no-repeat bg-cover bg-right '>

<Nav />
<h1 className=' text-6xl font-semibold px-16 pt-28 text-white'>Our Services</h1>
</div>
        <BreakDownassistent/>
        <RepairandService/>
        <DetailingService/>
        <ServiceBottomDiv/>
        <Footer/>
       
    </div>
  )
}

export default ServicePage