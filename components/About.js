'use client'
import React from 'react';
import Image from 'next/image'
import { motion } from 'framer-motion';
import SkillData from '@/constants/skillData';

const About = () => {
    return (
        <section className='bg-gray-800 text-white pb-[3rem]'>
            <h2 className='text-center text-4xl font-bold pt-[3rem] pb-[3rem]'>About <motion.span whileInView={{fontSize: "50px", content: "value"}}
            className='bg-gradient-to-r from-indigo-500 to-indigo-400 bg-clip-text text-fill-transparent'>ME</motion.span></h2>
            <div className='profile flex justify-center gap-[50px]'>
                {/* left */}
                <div>
                    <motion.img src="/icon.png" initial={{opacity: 0}} whileInView={{opacity: 1}} width={250} height={250} className="rounded-full overflow-hidden" alt='Icon' />
                </div>
                {/* right */}
                <div className='max-w-[500px] break-words'>
                    <h3 className='text-3xl mb-[0.75rem] font-bold'>Hasilan</h3>
                    <p>Twittererです。Twittererです。Twittererです。Twittererです。Twittererです。Twittererです。Twittererです。Twittererです。Twittererです。Twittererです。Twittererです。Twittererです。Twittererです。Twittererです。Twittererです。Twittererです。Twittererです。Twittererです。Twittererです。Twittererです。Twittererです。Twittererです。Twittererです。Twittererです。Twittererです。Twittererです。Twittererです。Twittererです。Twittererです。Twittererです。Twittererです。Twittererです。Twittererです。Twittererです。Twittererです。Twittererです。Twittererです。Twittererです。</p>
                </div>
            </div>
            <h2 className='text-center text-4xl font-bold pt-[4rem] pb-[3rem]'>My <motion.span whileInView={{fontSize: "50px", content: "value"}}
            className='bg-gradient-to-r from-indigo-500 to-indigo-400 bg-clip-text text-fill-transparent'>SKILL</motion.span></h2>
            <div className='flex justify-center gap-[2rem]'>
            {SkillData.map((skill, index) => (
                <div key={index} className="p-[2.5rem] bg-gradient-to-tr from-indigo-500 to-indigo-400">
                    <div className="icon">{skill.icon}</div>
                    <div className="name">{skill.name}</div>
                    <div className="level">{skill.skill}</div>
                </div>
            ))}
            </div>
        </section>
    );
}

export default About;