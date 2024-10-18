"use client"


import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';


export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-[#121212]">
      <div className="logo">
        <Image src="/images/logo.png" alt="Logo" width={100} height={100} />
      </div>
      <ul className={`flex space-x-6 items-center text-white ${isOpen ? 'block' : 'hidden'} md:flex`}>
        <li>
          <Link href="/" className="hover:text-gray-400">
            Home
          </Link>
        </li>
        <li>
          <Link href="#about" className="hover:text-gray-400">
           About
          </Link>
        </li>
        <li>
          <Link href="#projects" className="hover:text-gray-400">
          Project
          </Link>
        </li>
        <li>
          <Link href="#contact" className="hover:text-gray-400">
            Contact
          </Link>
        </li>
      </ul>
      <div className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
        <div className="space-y-2">
          <div className="w-8 h-1 bg-white"></div>
          <div className="w-8 h-1 bg-white"></div>
          <div className="w-8 h-1 bg-white"></div>
        </div>
      </div>
    </nav>
  );
}





























