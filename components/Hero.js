"use client";
import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Header from "./Navigation";

function Hero() {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <>
      <Header />
      <header className="bg-gray-900 min-h-screen flex flex-col md:flex-row items-center justify-center p-4">
        <motion.div
          onHoverStart={() => setIsHovered(true)}
          onHoverEnd={() => setIsHovered(false)}
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 1.1 }}
          className="text-gray-100 text-center md:text-left cursor-default select-none"
        >
          <span className="text-4xl md:text-6xl font-bold block bg-gradient-to-r from-indigo-100 bg-clip-text text-fill-transparent">
            Welcome to
          </span>
          <motion.span
            animate={{ scale: isHovered ? 1.1 : 1 }}
            className="text-6xl md:text-8xl font-extrabold block bg-gradient-to-r from-indigo-500 to-indigo-400 bg-clip-text text-fill-transparent"
          >
            Hasilan.net!
          </motion.span>
        </motion.div>
        <motion.div
          initial={{ scale: 1.2 }}
          whileInView={{ marginBottom: "10px" }}
          whileHover={{ marginBottom: "0px" }}
          className="scrolldown absolute bottom-[15%] text-white select-none"
        >
          <span className="absolute -left-[20px] bottom-[10px] text-white text-[0.7rem] tracking-wider [writing-mode:vertical-rl]">
            scroll
          </span>
        </motion.div>
      </header>
    </>
  );
}

export default Hero;
