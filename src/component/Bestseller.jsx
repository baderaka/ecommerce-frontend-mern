import React, { useContext, useEffect, useState } from 'react'
import Title from './Title'
import { Shopcontext } from '../context/Shopcontext'
import Productitems from './Productitems';

const Bestseller = () => {

    const {products}=useContext(Shopcontext);
const[bproduct,setbproduct]=useState([]);

useEffect(()=>{

  const newproduct=products.filter((item)=>(item.bestseller));
    setbproduct(newproduct);
},[])



  return (
    <div>
      <Title title1='BEST SELLER'/>
      <div className='flex flex-col sm:flex-row justify-center  gap-4 py-3 mt-2  text-xs'>
        {
            bproduct.map((item,index)=>(
                <Productitems  key={index} id={item._id} image={item.image[0]} name={item.name} price={item.price} index={index}/>)
            )
        }
      </div>
    </div>
  )
}

export default Bestseller

