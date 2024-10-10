import React, { useContext, useEffect } from 'react'
import { Shopcontext } from '../context/Shopcontext'


const Carttotal = () => {
    const{cartitems,products,currency,delivery_fee,navigate,carttotal,total}=useContext(Shopcontext);
    
    useEffect(()=>{
      carttotal();
    })
  return (
    
    <div className={`p-6  mt-10 flex flex-col gap-2 w-full sm:w-1/3 ${carttotal() ===0.00?'hidden':''}`} >
      <div className='flex justify-start items-center gap-2 '>
  <p className='items-center text-xl py-3'>CART TOTALS</p>
  <hr className='w-10 h-1 bg-black mt-1'></hr>
   </div>
   <div className='flex flex-col gap-2'>
   <div className='flex  justify-between border-b'>
    <p>Subtotal</p>
    <p>{currency}{carttotal()}.00</p>
   </div>
   <div className='flex justify-between border-b'>
    <p>Shipping Fee</p>
    <p>{currency}{delivery_fee}.00</p>
   </div>

   <div className='flex justify-between border-b'>
    <p>Total</p>
    <p>{total()}.00</p>
   </div>
   </div>
   <button className='bg-black w-1/2 p-1 py-2 text-white m-auto mt-3 rounded' onClick={()=>navigate('/placeorder')}>Proceed To Checkout</button>
   </div>
  
  )
}

export default Carttotal
