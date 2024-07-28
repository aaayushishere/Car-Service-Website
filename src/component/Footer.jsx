import React from 'react';
import { TiSocialTwitter } from "react-icons/ti";
import { TiSocialYoutube } from "react-icons/ti";
import { TiSocialLinkedin } from "react-icons/ti";
import { SlSocialInstagram } from "react-icons/sl";

const Footer = () => {
    return (
        <>
            <footer className="w-full text-white bg-[#215277] body-font mt-[1px]">
                <div
                    className="container flex flex-col flex-wrap px-5 py-24 mx-auto md:items-center lg:items-start md:flex-row md:flex-no-wrap">
                    <div className="flex-shrink-0 w-64 px-10 mx-auto text-center md:mx-0 md:text-left">
                        <a className="flex items-center justify-center font-medium text-black title-font md:justify-start">
                            <h1 className=' font-semibold text-2xl'>Captain Auto</h1>
                        </a>
                        <p className="mt-2 text-sm text-white">Design, Code and Ship!</p>
                        <div className="mt-4">
                            <span className="inline-flex justify-center mt-2 sm:ml-auto sm:mt-0 sm:justify-start">
                                <a className="text-white cursor-pointer hover:text-black">
                                    <TiSocialYoutube className='text-4xl' />
                                </a>
                                <a className="ml-3 text-white  cursor-pointer hover:text-black">
                                    <TiSocialLinkedin className='text-4xl' />
                                </a>
                                <a className="ml-3 text-white cursor-pointer hover:text-black">
                                    <TiSocialTwitter className='text-4xl' />
                                </a>
                                <a className="ml-3 text-white cursor-pointer hover:text-black">
                                    <SlSocialInstagram className='text-4xl' />
                                </a>
                            </span>
                        </div>
                    </div>
                    <div className="flex flex-wrap flex-grow mt-10 -mb-10 text-center md:pl-20 md:mt-0 md:text-left">
                        <div className="w-full px-4 lg:w-1/4 md:w-1/2">
                            <h2 className="mb-3 text-sm font-bold tracking-widest text-black uppercase title-font ">About</h2>
                            <nav className="mb-10 list-none">
                                <li className="mt-3">
                                    <a className="text-white cursor-pointer hover:text-black">Company</a>
                                </li>
                                <li className="mt-3">
                                    <a className="text-white cursor-pointer hover:text-black">Careers</a>
                                </li>
                                <li className="mt-3">
                                    <a className="text-white cursor-pointer hover:text-black">Blog</a>
                                </li>
                            </nav>
                        </div>
                        <div className="w-full px-4 lg:w-1/4 md:w-1/2">
                            <h2 className="mb-3 text-sm font-bold tracking-widest text-black uppercase title-font">Support</h2>
                            <nav className="mb-10 list-none">
                                <li className="mt-3">
                                    <a className="text-white cursor-pointer hover:text-black">Contact Support</a>
                                </li>
                                <li className="mt-3">
                                    <a className="text-white cursor-pointer hover:text-black">Help Resources</a>
                                </li>
                                <li className="mt-3">
                                    <a className="text-white cursor-pointer hover:text-black">Release Updates</a>
                                </li>
                            </nav>
                        </div>
                        <div className="w-full px-4 lg:w-1/4 md:w-1/2">
                            <h2 className="mb-3 text-sm font-bold tracking-widest text-black uppercase title-font">Platform
                            </h2>
                            <nav className="mb-10 list-none">
                                <li className="mt-3">
                                    <a className="text-white cursor-pointer hover:text-black">Terms &amp; Privacy</a>
                                </li>
                                <li className="mt-3">
                                    <a className="text-white cursor-pointer hover:text-black">Pricing</a>
                                </li>
                                <li className="mt-3">
                                    <a className="text-white cursor-pointer hover:text-black">FAQ</a>
                                </li>
                            </nav>
                        </div>
                        <div className="w-full px-4 lg:w-1/4 md:w-1/2">
                            <h2 className="mb-3 text-sm font-bold tracking-widest text-black uppercase title-font">Contact</h2>
                            <nav className="mb-10 list-none">
                                <li className="mt-3">
                                    <a className="text-white cursor-pointer hover:text-black">Send a Message</a>
                                </li>
                                <li className="mt-3">
                                    <a className="text-white cursor-pointer hover:text-black">Request a Quote</a>
                                </li>
                                <li className="mt-3">
                                    <a className="text-white cursor-pointer hover:text-black">+123-456-7890</a>
                                </li>
                            </nav>
                        </div>
                    </div>
                </div>
                <div className="bg-gray-300">
                    <div className="container px-5 py-4 mx-auto">
                        <p className="text-sm text-black capitalize xl:text-center">© 2024 All rights reserved </p>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer