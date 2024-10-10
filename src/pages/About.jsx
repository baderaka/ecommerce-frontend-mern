import React from 'react'
import { assets } from '../assets/frontend_assets/assets'
import Policy from '../component/Policy'
import Newsub from '../component/Newsub'
import { delay, motion } from "framer-motion"
 
const About = () => {
  return (
    <div>
      <div className='flex justify-center  items-center gap-2 mt-14'>
      <p className='items-center text-2xl '>ABOUT US</p>
      <hr className='w-10 h-1 bg-black mt-1'></hr>
       </div>
       <div className='flex flex-col  sm:flex-row sm:gap-10
        items-center px-3  sm:px-6 py-2 sm:ml-14 mt-6'>
        <motion.div initial={{opacity:0,scale:0}} whileInView={{opacity:[0,0.1,0.2,0.3,0.4,0.5,0.6,0.8,1],scale:1,}} transition={{duration:0.5,delay:0.3}}>
          <img src={assets.about_img} alt='img' className='w-80 sm:w-auto rounded-2xl'/>
        </motion.div>
        <div className=' mt-10 px-10 text-justify  sm:pr-10 sm:mr-32'>
          <p className='text-sm'>

The ‘About Us’ page is a section on your website where you can create a space to share everything your customers need 
to know about you and your store. With this page, you can address customers directly and get closer to them  sharing information that’ll broadcast personal details about your business and yourself as well as your long-term mission. 
<p className='mt-3'>
In other words, your ‘About Us’ page is meant to emphasize features that’ll contribute to building a memorable first impression that customers will ultimately use as a key factor in determining if your business is worth their attention.
</p></p>
<p className='mt-6'>
  <h1 className='font-bold py-1 text-lg'>Our Mission</h1>
  <p className='text-sm'> Our journey goes back to 10, when we decided to go along with our aspiration of making it accessible for shoppers everywhere to get their hands on high-quality apparel products. For that reason. Our store has helped thousands of customers worldwide, enabling us to achieve our goal of . With our team of dedicated employees, we are determined to offer our customers the perfect shopping experience.</p>
</p>
        </div>
       </div>

       <div>
       <div className='flex   items-center gap-2 mt-20 sm:ml-16'>
      <p className='items-center text-xl '>WHY CHOOSE US</p>
      <hr className='w-10 h-1 bg-black mt-1'></hr>
       </div>

       <div className='flex flex-col sm:flex-row justify-between sm:ml-16 mt-8 border px-4  items-center divide-y sm:divide-x'>
        <div className='flex flex-col min-h-64 px-12 gap-3'> 
          <p className='font-bold text-md mt-20'>Quality Assurance </p>
          <p className='text-sm'>We meticulously select and vet each product to ensure it meets our stringent quality standards.</p>
        </div>
        <div className='flex flex-col min-h-64  px-12 gap-3'> 
          <p className='font-bold text-md mt-20'>convenience </p>
          <p className='text-sm'>With our user-friendly interface and hassle-free ordering process, shopping has never been easier.</p>
        </div>
        <div className='flex flex-col min-h-64 px-12 gap-3 '> 
          <p className='font-bold text-md mt-20'>Exceptional Customer Service</p>
          <p className='text-sm'>Our team of dedicated professionals is here to assist you the way, ensuring your satisfaction is our top priority.</p>
        </div>
       </div>
       </div>
       
      
      <div className='m-3 p-3 mt-20'>
        <Newsub/>
</div>
    </div>
  )
}

export default About
