'use client'
import { useEffect } from 'react';
import Image from 'next/image'
import { motion } from 'framer-motion';
import SkillData from '@/constants/skillData';
import { FaExternalLinkAlt } from "react-icons/fa"

const About = () => {
    useEffect(() => {
        new Splide('.splide', {
          type: 'loop',
          perPage: 3,
          autoplay: true,
        }).mount();
      }, []);

    return (
        <section className='bg-gray-800 text-white pb-[3rem]'>
            <h2 className='text-center text-4xl font-bold pt-[3rem] pb-[3rem]'>What <motion.span whileInView={{fontSize: "50px", content: "value"}}
            className='bg-gradient-to-r from-indigo-500 to-indigo-400 bg-clip-text text-fill-transparent'>I can do</motion.span><span className='ml-[10px]'>🤔</span></h2>
            <p className='text-center'>I can't ;(</p>
        </section>
    );
}

export default About;