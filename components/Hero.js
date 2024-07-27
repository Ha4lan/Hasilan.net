'use client'
import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Hero() {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <header className="bg-gray-900 min-h-screen flex flex-col items-center justify-center">
        <motion.div onHoverStart={() => setIsHovered(true)} onHoverEnd={() => setIsHovered(false)} whileHover={{ scale: 1.2 }} whileTap={{ scale: 1.1 }}
        className="text-gray-100 text-left mr-[30rem] cursor-default select-none">
            <span className='text-6xl font-bold block bg-gradient-to-r from-indigo-100 bg-clip-text text-fill-transparent'>
                Welcome to
            </span>
            <motion.span animate={{ scale: isHovered ? 1.1 : 1 }}
            className='text-8xl font-extrabold block bg-gradient-to-r from-indigo-500 to-indigo-400 bg-clip-text text-fill-transparent'>
                Hasilan.net!
            </motion.span>
        </motion.div>
        </header>
      )
}