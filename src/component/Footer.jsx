import React, { useContext } from 'react'
import { assets } from '../assets/frontend_assets/assets'
import { Shopcontext } from '../context/Shopcontext'
const Footer = () => {
const{getcartcount}=useContext(Shopcontext)

  return (
    <>
    <div className={`flex flex-col gap-10 mt-6 justify-around items-center text-center sm:flex-row sm:gap-0 sm:mt-24  `}>
      <div className='sm:w-1/4 ' >
      <img src={assets.logo} alt='logo'className='w-36  m-auto ' />
        <p className=' pt-1 text-justify text-sm'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
        </p>
      </div>
      <div className='sm:text-justify text-sm'>
        <p className='font-bold text-xxl'>COMPANY</p>
        <p className='pt-1 sm:text-justisfy '>Home</p>
        <p>About Us</p>
        <p>Delivery</p>
        <p>Privacy Policy</p>
      </div>
      <div  className='sm:text-justify mb-16 text-sm'>
        <p className='font-bold text xxl'>GET IN TOUCH</p>
        <p className='pt-1'>+971 545324441</p>
        <p>baderaaa@gmail.com</p>
      </div>
</div>
    
    <p className='text-center text-sm mt-4 font-bold sm:mt-20 sm:pb-4 ' >copywrite2024@forever.com-All Rights Reserved</p>
    </>
  )
}

export default Footer
