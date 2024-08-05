'use client'
import React from 'react';
import { motion } from 'framer-motion';

export default function Blog() {
    return (
        <section className='bg-gray-900 text-white pb-[3rem]'>
            <h2 className='text-center text-4xl font-bold pt-[3rem] pb-[1rem]'>
                My <motion.span whileInView={{ fontSize: "50px", content: "value" }} className='bg-gradient-to-r from-indigo-500 to-indigo-400 bg-clip-text text-fill-transparent'>
                    BLOG
                </motion.span>
            </h2>
            <div>自動更新テスト2</div>
        </section>
    );
};