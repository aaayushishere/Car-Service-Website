import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../component/homepage/Home'
import Aboutpage from '../component/aboutUS/Aboutpage'

import Blog from '../component/BlogPage/Blog'
import ServicePage from '../component/ServicePage/ServicePage'
import Contactpage from '../component/ContactPage/Contactpage'

const Rounting = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<Aboutpage />} />
                <Route path="/services" element={<ServicePage />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/contact" element={<Contactpage/>} />

            </Routes>
        </>
    )
}

export default Rounting