import React from 'react'
import { NavLink } from 'react-router-dom'

const Nav = () => {
    
    return (
        <>
            <div className=' w-full h-36  flex items-center justify-between px-10'>
                <div className='image w-32 mt-5  '>
                    <img src="src/Media/images/Weblogo.png " className='  ' alt="" />
                </div>
                <div className='nav flex gap-20 px-16  font-medium  text-sm text-white'>
                    <NavLink to='/' 
                     style={(e)=>{
                        return {
                          borderBottom:e.isActive ?"rgb(252, 253, 255)  3px solid":''
                        }}}
                       className='px-2 rounded-xl py-1 hover:bg-gray-400 hover:bg-opacity-20  '
                    >Home</NavLink>
                    <NavLink to='/about'
                   style={(e)=>{
                    return {
                      borderBottom:e.isActive ?"rgb(252, 253, 255)  3px solid":''
                    }}}
                   className='px-2 rounded-xl py-1 hover:bg-gray-400 hover:bg-opacity-20  '
                    >About Us</NavLink>
                    <NavLink to='/services'
                    style={(e)=>{
                        return {
                          borderBottom:e.isActive ?"rgb(252, 253, 255)  3px solid":''
                        }}}
                       className='px-2 rounded-xl py-1 hover:bg-gray-400 hover:bg-opacity-20  '
                    >Our Service</NavLink>
                    <NavLink to='/blog'
                    style={(e)=>{
                        return {
                          borderBottom:e.isActive ?"rgb(252, 253, 255)  3px solid":''
                        }}}
                        className='px-2 rounded-xl py-1 hover:bg-gray-400 hover:bg-opacity-20  '
                    >Blog</NavLink>
                    <NavLink className=' px-2 py-1 rounded-xl bg-[#E1CD8C] hover:bg-[#E1CD8C] hover:bg-opacity-50 text-black' to='/contact'
                    style={(e)=>{
                        return {
                          background:e.isActive ?"rgb(252, 253, 255)  ":''
                        }}}
                        
                    >Contact us</NavLink>


                </div>
            </div>
        </>
    )
}

export default Nav