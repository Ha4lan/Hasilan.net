'use client'
import React from 'react';
import Image from 'next/image'
import { motion } from 'framer-motion';
import SkillData from '@/constants/skillData';
import { FaExternalLinkAlt } from "react-icons/fa";

const About = () => {
    return (
        <section className='bg-gray-800 text-white pb-[3rem]'>
            <h2 className='text-center text-4xl font-bold pt-[3rem] pb-[3rem]'>About <motion.span whileInView={{fontSize: "50px", content: "value"}}
            className='bg-gradient-to-r from-indigo-500 to-indigo-400 bg-clip-text text-fill-transparent'>ME</motion.span></h2>
            <div className='profile flex justify-center gap-[50px] max-md:flex-col items-center'>
                {/* left */}
                <div>
                    <motion.img src="/icon.png" initial={{opacity: 0}} whileInView={{opacity: 1}} width={250} height={250} className="rounded-full overflow-hidden" alt='Icon' />
                </div>
                {/* right */}
                <div className='max-w-[500px] break-words'>
                    <h3 className='text-3xl mb-[0.75rem] font-bold'>Hasilan</h3>
                    <p>書き途中...</p>
                </div>
            </div>
            <h3 className='text-center text-3xl font-bold pt-[5rem] pb-[3rem]'>My <span className='bg-gradient-to-r from-indigo-500 to-indigo-400 bg-clip-text text-fill-transparent text-[40px]'>SKILL</span></h3>
            <div className='flex justify-center gap-[2rem] max-md:flex-col max-md:pr-10 max-md:pl-10'>
            {SkillData.map((skill, index) => (
                <motion.div key={index} whileHover={{scale:1.07}} className="p-[2.5rem] bg-gradient-to-tr from-indigo-500 to-indigo-400">
                    <div className="icon text-3xl">{skill.icon}</div>
                    <div className="name mt-[0.5rem] mb-[0.5rem] font-bold text-[1.25rem]">{skill.name}</div>
                    <div className="level"><progress value={skill.skill} className=''></progress></div>
                    <div className="mt-[0.5rem] flex items-center cursor-pointer transition-[.25s] hover:text-indigo-800"><FaExternalLinkAlt className='mr-[0.5rem]' />Details</div>
                </motion.div>
            ))}
            </div>
        </section>
    );
}

export default About;