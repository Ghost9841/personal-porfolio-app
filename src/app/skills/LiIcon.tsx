'use client'
import { motion,useScroll } from "framer-motion";
import React from 'react';

interface LiIconProps{
  reference: React.RefObject<HTMLLIElement>;
}
const LiIcon = ({ reference }: LiIconProps) => {
  const {scrollYProgress} = useScroll(
    {
      target: reference,
      offset: ["center end","center center"]
    }
  )
  return (
    
    <figure className='absolute left-0 stroke-dark dark:stroke-light'>
        <svg className='rotate-90'width="75" height="75" viewBox='0 0 100 100'>

        <circle cx="75" cy="50" r="20" className='stroke-primary stroke-1 dark:stroke-primaryDark fill-none'/>
        <motion.circle cx="75" cy="50" r="20" className='stroke-[5px] fill-light dark:fill-dark'
        style={{
          pathLength: scrollYProgress
        }}/>
        <circle cx="75" cy="50" r="10" className='fill-primary animate-pulse stroke-1 dark:fill-primaryDark'/>
        
        </svg>
    </figure>
  )
}

export default LiIcon;
