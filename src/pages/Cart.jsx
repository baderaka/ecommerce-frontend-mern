import React, { useContext, useEffect, useState } from 'react'
import { Shopcontext } from '../context/Shopcontext'
import Carttotal from '../component/Carttotal';
import { assets } from '../assets/frontend_assets/assets';

const Cart = () => {
  const{cartitems,products,currency,changecartvalue}=useContext(Shopcontext)
  const[cartdata,setcartdata]=useState([]);
  
  useEffect(()=>{
  let tempdata=[];
for(const items in cartitems){
     for(const item in cartitems[items]){
       if(cartitems[items][item]>0){
        
        tempdata.push({
           _id:items,
           size:item,
           quantity:cartitems[items][item]
       })
        
       }
     }
    }
    setcartdata(tempdata)
  },[cartitems])
  
  
return (
  <>
  <div className='flex justify-start  items-center gap-2 mt-8'>
  <p className='items-center text-xl py-3'>YOUR CART</p>
  <hr className='w-10 h-1 bg-black mt-1'></hr>
   </div>

   <div className='mt-8 '>
{
  cartdata.map((item,index)=>{
    const product=products.find((products)=>item._id == products._id);
    
    return(
      <div className='flex  justify-between border-y-1 my-3 py-2  border-y items-center' key={index}>
<div className='flex gap-3 min-w-96' >
  <img src={product.image[0]} alt='img' className='w-24'/>
  <div className='flex flex-col gap-1'>
    <div className='text-sm'>{product.name}</div>
    <div className='flex flex-row gap-2 items-center'>
      <p>{currency}{product.price}</p>
      <p className='p-2 px-3 bg-gray-200'>{item.size}</p>
    </div>
  </div>
 </div>
  <input type='number' min={1} defaultValue={item.quantity} className='w-16 border items-center ' onChange={(e)=>changecartvalue(item._id,item.size,Number(e.target.value))} />
  <div className='mr-16' ><img src={assets.bin_icon} alt='icon'  onClick={()=>changecartvalue(item._id,item.size)} className='w-5'/></div>
  </div>
    )
    
  })
}
   </div>
   <div className='flex justify-end'><Carttotal/></div>
   </>
  )
}

export default Cart
