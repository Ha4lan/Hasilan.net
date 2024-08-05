'use client'
import React from 'react';
import { motion } from 'framer-motion';
import { GrNotes } from "react-icons/gr";
import { SiZenn } from "react-icons/si";

export default function Blog() {
    return (
        <section className='bg-gray-900 text-white pb-[5rem]'>
            <h2 className='text-center text-4xl font-bold pt-[5rem] pb-[2rem]'>
                My <motion.span whileInView={{ fontSize: "50px", content: "value" }} className='bg-gradient-to-r from-indigo-500 to-indigo-400 bg-clip-text text-fill-transparent'>
                    BLOG
                </motion.span>
            </h2>
            <div className='text-center'>
            <div className='w-[100%] max-w-[840px] inline-block text-left'>
                <a href="" className="">
                    <div className='post bg-gray-800'>
                        <div className='absolute top-[22px] left-[26px] text-[30px] text-center text-gray-500'>
                            <GrNotes />
                        </div>
                        <div className='pl-[50px] leading-[15px] ml-[15px] text-left'>
                            <div className='text-ellipsis text-[16px] mt-[5px] font-bold text-gray-200'>タイトル</div>
                            <div className='text-ellipsis text-[14px] mt-[3px] text-gray-300'>コンテンツ</div>
                            <div className='text-ellipsis text-[12px] mt-[5px] text-gray-300 flex'><span className='text-[#3EA8FF] mr-[4px]'><SiZenn /></span>Zenn</div>
                            <div className='text-ellipsis text-[10px] text-[#aaa] leading-[14px]'>2024-12-01</div>
                        </div>
                    </div>
                </a>
            </div>
            </div>
        </section>
    );
};