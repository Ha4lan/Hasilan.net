import React, { useState } from "react";
import Image from "next/image";
import { FaTwitter, FaGithub, FaBars, FaTimes } from "react-icons/fa";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="fixed text-white h-[64px] bg-[rgba(256,256,256,0.1)] w-[100%] justify-around max-md:justify-between pr-[1rem] pl-[1rem] flex items-center z-10">
      <div className="nav-logo select-none flex items-center">
        <Image
          src="/logo.svg"
          width={50}
          height={50}
          className="rounded-full overflow-hidden"
          alt="nav-logo"
        />
        <span className="text-2xl font-extrabold ml-[10px]">Hasilan.net</span>
      </div>
      <div className="md:hidden z-20" onClick={toggleMenu}>
        {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </div>
      <div
        className={`md:flex md:items-center md:static absolute md:top-0 top-[64px] left-0 w-full md:w-auto transition-transform duration-300 ease-in-out bg-[rgba(0,0,0,0.8)] md:bg-transparent ${menuOpen ? "transform translate-y-0 z-10" : "transform -translate-y-[15rem] md:transform-none"}`}
      >
        <div className="links flex flex-col md:flex-row md:ml-0 ml-4 md:font-semibold *:bg-gradient-to-bl from-indigo-100 *:bg-clip-text *:text-fill-transparent">
          <a href="" className="md:ml-[15px] ml-0 md:my-0 my-2">
            About
          </a>
          <a href="" className="md:ml-[15px] ml-0 md:my-0 my-2">
            Repositories
          </a>
          <a href="" className="md:ml-[15px] ml-0 md:my-0 my-2">
            Blog
          </a>
        </div>
        <div className="socials flex flex-col md:flex-row md:items-center md:ml-[1.5rem] ml-4 md:my-0 my-2 *:text-[1.25rem] *:mr-[0.5rem]">
          <a
            href="https://x.com/Ha4lan"
            className="*:text-[#1da1f2] md:mr-4 mr-0"
          >
            <FaTwitter />
          </a>
          <a href="https://github.com/Ha4lan">
            <FaGithub />
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Header;
