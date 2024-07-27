import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

function Header() {
    return (
        <nav className='fixed text-white h-[64px] bg-gray-800 w-[100%] justify-between  '>
            <div className='nav-logo'>Hasilan.net</div>
        </nav>
    )
}

export default Header;