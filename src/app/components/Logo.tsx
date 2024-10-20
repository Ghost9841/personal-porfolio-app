'use client'
import Link from 'next/link';
import React from 'react';
import assets from './logoassets'; // Importing the assets from the .js file
import {motion} from "framer-motion";



const Logo = () => {
  return (
    <div 
        className='flex items-center justify-center mt-2 bg-dark'>
      <Link href='/'>
       <motion.img 
       className="rounded-full bg-dark w-16 h-16 fixed" 
       whileHover={{
        scale:1.5,
        backgroundColor:["#121212", "rgba(131,58,180,1)","rgba(253,29,29,1)",
            "rgba(252,176,69,1)","rgba(131,58,180,1)", "#121212"],
        }}
        whileTap={{ scale: 0.9 }}
        
        src={assets.logoghost.src} 
        alt="Logo" /> 
        </Link>
    </div>
  )
}

export default Logo;
