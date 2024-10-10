import React, { useContext, useState } from 'react'
import {assets} from '../assets/frontend_assets/assets'
import { NavLink,Link, useNavigate } from 'react-router-dom'
import { Shopcontext } from '../context/Shopcontext'
const Navbar = () => {
  const{show,setshow,getcartcount}=useContext(Shopcontext);
  const[visible,setvisible]=useState(false)
  const navigate=useNavigate();
  return (
    <>
    <div className='flex flex-row py-4 justify-between items-center '>
      <img src={assets.logo} alt='logo'  />
      <div className='hidden sm:flex gap-6'>
      <NavLink to='/' className='font-bold text-lg '>
        HOME
      </NavLink>
      <NavLink to='/collection' className='font-bold text-lg'>
        COLLECTION
      </NavLink>
      <NavLink to='/about' className='font-bold text-lg'>
        ABOUT
      </NavLink>
      <NavLink to='/contact' className='font-bold text-lg'>
        CONTACT
      </NavLink></div>

      <div className='flex gap-6  sm:pr-12 items-center' >
        <img src={assets.search_icon} alt='icon' className=' cursor-pointer w-5 sm:w-6' onClick={()=>setshow(true)}/>
        <div className='group relative'>
       <Link to='/login'><img src={assets.profile_icon} alt='icon' className='w-5 sm:w-6'/></Link>
        <div className='group-hover:block hidden absolute '>
            <div className='flex flex-col gap-2  w-24 p-2 my-4 text-white text-center text-lg  bg-black'>
            <p className='cursor-pointer text-sm'>My Profile</p>
            <p className='cursor-pointer text-sm'> Orders</p>

            <p className='cursor-pointer text-sm'>Logout</p></div>
        </div>
        </div>
        <Link to='/cart' className='relative'>
        <img src={assets.cart_icon} alt='icon' className=' w-4 sm:w-6'/>
        <div className='absolute -mt-1 sm:-mt-3 ml-2 bg-black text-white rounded-full min-w-5 sm:w-6 text-center text-sm'>
            {getcartcount()}
        </div>
        </Link>
        <img src={assets.menu_icon} className=' w-4 sm:w-6 flex sm:hidden'  onClick={()=>setvisible(!visible)}/>
        
        </div>
        
      </div>
      <div className={`w-80 flex flex-col divide-y h-64 opacity-95 bg-slate-50 text-black fixed py-3 px-3 ml-20 z-10 rounded-lg ${visible ?'':'hidden'}`}>
          
      <Link to='/'><p className='px-2 py-2 mt-8'onClick={()=>setvisible(!visible)}>HOME</p></Link>
     <Link to='/collection'> <p className='px-2 py-2'onClick={()=>setvisible(!visible)}>COLLECTION</p></Link>
   <Link to='/about'>   <p className='px-2 py-2'onClick={()=>setvisible(!visible)}>ABOUT</p></Link>
      <Link to='/contact'><p className='px-2 py-2' onClick={()=>setvisible(!visible)}>CONTACT</p></Link>
      </div>
    </>
  )
}

export default Navbar
