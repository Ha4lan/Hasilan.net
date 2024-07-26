import React from 'react';
import Image from 'next/image';
import Head from 'next/head';

export default function Hero() {
    return (
        <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center">
            <div className="text-gray-900 text-left">
                Welcome to<br/>
                Hasilan.net!
            </div>
        </div>
      )
}