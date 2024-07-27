'use client'
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Hero() {
    return (
        <header className="bg-gray-900 min-h-screen flex flex-col items-center justify-center">
            <motion.div whileHover={{scale: 1.2}} whileTap={{scale:1.1}} className="text-gray-100 text-left mr-[30rem]">
                <span className='text-6xl font-bold block bg-gradient-to-r from-indigo-100 bg-clip-text text-fill-transparent'>Welcome to</span>
                <span className='text-8xl font-extrabold block bg-gradient-to-r from-indigo-500 to-indigo-400 bg-clip-text text-fill-transparent'>Hasilan.net!</span>
                <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 1.1 }} drag="x" dragConstraints={{ left: -100, right: 100 }} />
            </motion.div>
        </header>
      )
}