import React, { useContext, useEffect, useState } from 'react'
import Title from './Title'
import { Shopcontext } from '../context/Shopcontext'
import Productitems from './Productitems'

const Latestcollection = () => {
const[latedata,setlatedata]=useState([]);

const {products}=useContext(Shopcontext)

useEffect(()=>{
  setlatedata(products.slice(0,10))
  
},[])

  return (
    <div className='py-3 mt-10 '>
      <Title title1='LATEST COLLECTION' />
      <div className='grid gap-3  w-full grid-cols-2  sm:grid-cols-3  md:grid-cols-4 lg:grid-cols-5 lg:p-6 my-6'>
      {
        latedata.map((item,index)=>(
<Productitems key={index} id={item._id} image={item.image[0]} name={item.name} price={item.price} index={index}/>
        ))
      }
    </div></div>
  )
}

export default Latestcollection
