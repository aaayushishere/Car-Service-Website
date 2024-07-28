import React from 'react'
import Form from './Form'
import FormRight from './FormRight'
import Nav from '../Nav'
import Footer from '../Footer'

const Contactpage = () => {
  return (
    <div>
        <div className='  w-full h-96 bg-[url("https://autoaid.in/wp-content/uploads/2023/11/Contact-Us-Breadcrumb-2.jpg")] bg-no-repeat bg-cover bg-right '>

<Nav />
<h1 className=' text-6xl font-semibold px-16 pt-28 text-white'>Contact Us</h1>
</div>
        <div className='flex'>

        <Form/>
        <FormRight/>
        </div>
        <Footer/>

        
    </div>
  )
}

export default Contactpage