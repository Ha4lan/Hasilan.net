'use client'
import { useState } from 'react';
import { motion } from 'framer-motion';
import IcandoData from '@/constants/IcandoData'; 
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";

const About = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleClick = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % IcandoData.length);
    };

    const handleClick_Back = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + IcandoData.length) % IcandoData.length);
    };

    const currentData = IcandoData[currentIndex];

    return (
        <section className='bg-gray-800 text-white pb-[3rem]'>
            <h2 className='text-center text-4xl font-bold pt-[3rem] pb-[1rem]'>What <motion.span whileInView={{fontSize: "50px", content: "value"}}
            className='bg-gradient-to-r from-indigo-500 to-indigo-400 bg-clip-text text-fill-transparent'>I can do</motion.span><span className='ml-[10px]'>🤔</span></h2>
            <p className='text-center pb-[3rem]'>Click to view next</p>
            <div className='flex justify-center items-center pl-[2rem] pr-[2rem]'>
            <motion.button whileHover={{scale: 1.1}} className='bg-gradient-to-r from-indigo-600 to-indigo-500 p-[0.6rem] rounded-[0.6rem] hover:opacity-[0.9] h-[4rem] mr-[2rem]' onClick={handleClick_Back}><FaChevronLeft /></motion.button>
            <div className="w-[35rem] h-[20rem] md:flex bg-gray-700 rounded-[10px] break-words">
                {/* left */}
                <div className='min-w-[25%] bg-gradient-to-r from-indigo-500 to-indigo-400 flex justify-center items-center text-7xl max-md:pt-[1rem] max-md:pb-[1rem]'>{currentData.icon}</div>
                {/* right */}
                <div className='p-[1.5rem] relative w-[100%]'>
                    <h3 className='text-2xl font-bold text-white mb-[0.5rem]'>{currentData.name}</h3>
                    <p>{currentData.description}</p>
                    <div className="">
                    <p className='md:absolute md:bottom-[1.5rem] md:left-[1.5rem]'>{currentIndex + 1}/{IcandoData.length}</p>
                    <a href={currentData.link} className='md:absolute md:bottom-[1.5rem] md:right-[1.5rem]'><button className='
                    bg-gradient-to-r from-indigo-600 to-indigo-500 p-[0.6rem] rounded-[0.6rem] border-indigo-300 border-solid border-[1px] hover:opacity-[0.9]'>{currentData.linkText}</button></a>
                    </div>
                </div>
            </div>
            <motion.button whileHover={{scale: 1.1}} className='bg-gradient-to-r from-indigo-600 to-indigo-500 p-[0.6rem] rounded-[0.6rem] hover:opacity-[0.9] h-[4rem] ml-[2rem]' onClick={handleClick}><FaChevronRight /></motion.button>
            </div>
        </section>
    );
}

export default About;