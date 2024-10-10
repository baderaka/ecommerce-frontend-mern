import React, { useContext, useEffect, useState } from 'react'
import { assets } from '../assets/frontend_assets/assets'
import { Shopcontext } from '../context/Shopcontext'
import { useLocation } from 'react-router-dom';
const Search = () => {
    const{search,setsearch,show,setshow}=useContext(Shopcontext);

    const[valuee,setvaluee]=useState(false);

    const location=useLocation();
    
     useEffect(()=>{
      if(location.pathname.includes('collection')
      ){
        setvaluee(true);
      }
    else{
      setvaluee(false);
    } 
     },[location])
    
  return (
    <div className={`bg-slate-100 w-full ${show && valuee ? '':'hidden'}`} >
      <div className='flex border-t-2 border-b-2 justify-center items-center py-6 '>
        <input type='text ' placeholder='search' value={search} onChange={(e)=>setsearch(e.target.value)} className='border border-2 w-1/2 py-3 px-6 rounded-3xl'/>
        <img src={assets.search_icon} alt='icon' className='w-6 -ml-14'/>
      <img src={assets.cross_icon} alt='icon' className='ml-14' onClick={()=>setshow(false)}/>

      </div>
     
    </div>
  )
}

export default Search
