import React from 'react'
import { assets } from '../assets/frontend_assets/assets'
import { motion } from "framer-motion"
const Hero = () => {
  return (
    <div className='w-full  border border-black flex flex-col  gap-6 sm:flex-row items-center justify-center text-center'>
      <div className=' w-full h-40 text-center justify-center items-center flex flex-col gap-2 sm:w-1/2   '>
      <div className='flex items-center text-center justify-center gap-1'> 
        <hr className='w-8 h-1 bg-black'></hr>
        <p className='text-lg'>OUR BESTSELLER</p>
      </div>
     
      <motion.p className='text-4xl ml-6 prata-regular ' variants={{hidden:{opacity:0,x:-100},show:{opacity:[0,0.3,0.5,0.81],x:0,
      transition:{
        delay:0.5,
        duration:1
      }
      
    }}} initial="hidden" whileInView="show">Latest Arrival</motion.p>

     <div className='flex items-center text-center justify-center gap-1 -ml-14'> 
        <hr className='w-8 h-1 bg-black'></hr>
        <p
         className='text-lg '>Shop now</p>
      </div>
      </div>
      <div className='items-center w-full   sm:w-1/2' >
      <img src={assets.hero_img}  alt='img'  />
      </div>
    </div>
  )
}

export default Hero
