import React from 'react'
import Newsub from '../component/Newsub'
import { assets } from '../assets/frontend_assets/assets'
import { delay, motion } from "framer-motion"
const Contact = () => {
  return (
    <div className='w-full'>
      <div className='flex  justify-center  items-center gap-2 mt-10'>
      <p className='items-center text-2xl '>CONTACT US</p>
      <hr className='w-10 h-1 bg-black mt-1'></hr>
       </div>
       <motion.div className='flex  flex-col sm:flex-row text-center justify-center items-center sm:text-start gap-12 mt-20 w-full'
       initial={{opacity:0,translateY:50}} whileInView={{opacity:[0,0.1,0.2,0.3,0.4,0.5,0.6,0.8,1],translateY:0,}} transition={{duration:1,delay:0.3}}>
       
        
          <img src={assets.contact_img} alt='img' className='w-96 '/>
        
        <div >
          <p className='font bold py-3'>OUR STORE</p>
          <p className='text-gray-500 text-sm'>54709 Willms Station
          <br/>Suite 350, Washington, USA</p>
          <p className='text-gray-500 pt-3 text-sm'>Tel: +971 545324409</p>
          <p className='text-gray-500 text-sm'>baderakaaa@gmail.com</p>

          <p className='text-lg text-gray-700 mt-3'>Careers at FOREVER</p>
          <p className='mt-6'>Learn more about our team and jb openings</p>
          <button className='mt-4 bg-black text-white p-2 px-3'>Explore Job</button>
        </div>
       </motion.div>
       <div className='m-3 p-3 mt-28'>
        <Newsub/>
</div>
    </div>
  )
}

export default Contact
