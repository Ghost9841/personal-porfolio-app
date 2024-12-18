'use client'
import React, { useRef } from 'react'
import { useScroll,motion } from "framer-motion";
import LiIcon from './LiIcon';

interface DetailsProps {
  type: string
  place: string 
  time: string
  info: string

 
}
const Details = ({type, time, place, info}:DetailsProps) =>{
  const ref = useRef(null);
  return <li ref={ref} className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-column items-center justify-between'>
    <LiIcon reference={ref}/>
    <motion.div className=""
    initial={{y:50}}
    whileInView={{y:0}}
    transition={{duration:0.5,type:"spring"}}>
      <h3 className='capitalize font-bold text-2xl'>{type}&nbsp;</h3>
      <span className='capitalize font-medium text-dark/75 dark:text-light/75'>
        {time} | {place}
      </span>
      <p className='font-medium w-full'>
        {info}
      </p>
    </motion.div>
  </li>
}
const Education = () => {
  const ref = useRef(null);
  const {scrollYProgress} = useScroll(
    {
      target: ref,
      offset: ["start end","center start"]
    }
  )
  return (
    <div className='my-64'>
 
      <div className="font-semibold font-poppin text-7xl mb-32 w-full text-center dark:text-light">
        Education
      </div>
      <div ref={ref}className="w-[75%] mx-auto relative dark:text-light">
        <motion.div 
        style={{scaleY: scrollYProgress}}
        className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light">
        </motion.div>
        <ul className="w-full flex flex-col items-start justify-between ml-4">
          
        <Details
        type='Junior College in Computer Science'
        time='2021-2023'
        place='Teku, Kathmandu'
        info='Relevant courses including Computer System, Computer Architecture, Programming Languages and so on.'
        />
        <Details
        type='UI/UX Designer Course'
        time='2023-2024'
        place='Bagbazar, Kathmandu'
        info='Relevant courses including Figma,Web Design and so on.'
        />
        <Details
        type='Python Course'
        time='2023-2024'
        place='Bagbazar, Kathmandu'
        info='Relevant courses including Python, loops, variables and so on.'
        />
        <Details
        type='Bachelors in BSc.(Hons.)IT'
        time='2024-Present'
        place='Baneshwor, Bhaktapur'
        info='Relevant courses including Programming Languages, IT, Digital Thinking and Innovations and so on'
        />
        </ul>
       
      </div>
    </div>
  )
}

export default Education;
