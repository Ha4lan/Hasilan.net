import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaTwitter, FaGithub } from "react-icons/fa";

function Header() {
    return (
        <nav className='fixed text-white h-[64px] bg-[rgba(256,256,256,0.1)] w-[100%] justify-around pr-[1rem] pl-[1rem] flex items-center'>
            <div className='nav-logo flex items-center'><Image src="/logo.svg" width={50} height={50} className='rounded-full overflow-hidden' alt='nav-logo' /><span className='text-2xl font-extrabold ml-[10px] b'>Hasilan.net</span></div>
            <div className='flex'>
                <div className='links *:ml-[15px] *:font-semibold *:bg-gradient-to-bl from-indigo-100 *:bg-clip-text *:text-fill-transparent'>
                    <a href="">About</a>
                    <a href="">Repositories</a>
                    <a href="">Blog</a>
                </div>
                <div className='socials flex items-center ml-[1.5rem] *:text-[1.25rem] *:mr-[0.5rem]'>
                    <a href="https://x.com/Ha4lan" className='*:text-[#1da1f2]'><FaTwitter /></a>
                    <a href="https://github.com/Ha4lan"><FaGithub /></a>
                </div>
            </div>
        </nav>
    )
}

export default Header;