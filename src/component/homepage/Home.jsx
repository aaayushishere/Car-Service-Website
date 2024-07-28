import React from 'react'
import Nav from '../Nav'
import Home2 from './Home2'
import Home3 from './Home3'
import Features from './Features'
import Footer from '../Footer'
import HomeMarquee from './HomeMarquee'
import Navbottom from './Navbottom'

const Home = () => {
    return (
        <>
<div className='   h-[100vh] '>
<div className='bg-[#215277]  '>
<Nav  />    
</div>
<Navbottom/>
</div>
<Home2/>
<Home3/>
<HomeMarquee/>
<Features/>
<Footer/>
        </>
    )
}

export default Home