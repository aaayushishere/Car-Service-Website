import React from 'react'
import Nav from '../Nav'
import Page1 from './Page1'
import FourPage from './FourPage'
import Footer from '../Footer'

const Blog = () => {
    return (
        <>
           <div className='  w-full h-96  bg-[url("https://autoaid.in/wp-content/uploads/2023/11/Blog-Breadcrumb.jpg")] bg-no-repeat bg-cover bg-right '>

                <Nav />
                <h1 className='text-6xl font-semibold px-16 pt-28 text-white'>Latest Blog and Articles
               
                </h1>
            </div>

            <Page1 />
            <FourPage />
            <Footer />
        </>
    )
}

export default Blog