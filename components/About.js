'use client'
import React from 'react';
import Image from 'next/image'
import { motion } from 'framer-motion';

const About = () => {
    return (
        <section className='bg-gray-800 text-white'>
            <h2 className='text-center text-4xl font-bold pt-[2rem] pb-[2rem]'>About <motion.span whileInView={{fontSize: "50px", content: "value"}}
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
        </section>
    );
}

export default About;