import React, { useState } from 'react'
import { useContext } from 'react'
import { Shopcontext } from '../context/Shopcontext'
import { assets } from '../assets/frontend_assets/assets'

const Placeorder = () => {

  const{carttotal,total,delivery_fee,currency}=useContext(Shopcontext);
  const [method,setmethod]=useState('cod');
  return (
    <div className='flex flex-col justify-center items-center sm:flex-row  sm:justify-between  mx-6 px-3 my-8 w-full '>
      <div className='mt-6 w-full sm:w-1/3 ml-20 sm:ml-10 '>
      <div className='flex    items-center gap-2 mt-6'>
      <p className='items-center text-xl'>DELIVERY INFORMATION</p>
      <hr className='w-10 h-1 bg-black mt-1'></hr>
       </div>
       <div className='flex flex-col sm:flex-row gap-2 mt-4 '>
<input type='text' placeholder=' FirstName ' className='border  rounded p-1 w-3/4'/>
<input type='text' placeholder=' LastName' className='border rounded p-1 w-3/4'/>
</div>
<input type='email' placeholder=' Email Address' className='border mt-2 rounded p-1 w-3/4 sm:w-full'/>
<input type='text' placeholder=' Street' className='border mt-2 rounded p-1 w-3/4 sm:w-full'/>
<div className='flex flex flex-col sm:flex-row gap-2 mt-4'>
<input type='text' placeholder=' City ' className='border rounded p-1 w-3/4 '/>
<input type='text' placeholder=' State' className='border rounded p-1 w-3/4'/>
</div>
<div className='flex flex flex-col sm:flex-row gap-2 mt-4'>
<input type='text' placeholder=' Zipcode ' className='border rounded p-1 w-3/4'/>
<input type='text' placeholder=' Country' className='border rounded p-1 w-3/4'/>
</div>
<input type='text' placeholder=' Phone' className='border mt-2 rounded p-1 w-3/4 sm:w-full'/>
      </div>


      <div className='mt-20  mr-14  w-1/2 sm:w-1/3 sm:pr-36'>
      <div className='flex  items-center gap-2 mt-6'>
      <p className='items-center text-xl'>CART TOTALS</p>
      <hr className='w-10 h-1 bg-black mt-1'></hr>
       </div>
<div className='mt-4 flex flex-col gap-1 '>
  <div className='flex justify-between border-b'>
       <p className='border-b'>Subtotal</p>
       <p>{currency}{carttotal()}.00</p>
       </div>
       <div className='flex justify-between border-b'>
       <p className='border-b'>Shipping Fee</p>
       <p>{currency}{delivery_fee}.00</p>
       </div>
       <div className='flex justify-between'>
         <p>Total</p>
       <p>{currency}{total()}.00</p>
       </div>
       
       </div>
      <div>
      <div className='flex  items-center gap-2 mt-6'>
      <p className='items-center text-md font-bold'>PAYMENT METHOD</p>
      <hr className='w-10 h-1 bg-black mt-1'></hr>
       </div>
      </div>
<div  className='flex flex-col ml-6 w-3/4 sm:w-full sm:ml-0  sm:flex-row mt-6 gap-2  '>
  <div className='flex items-center gap-1 border p-1  ' onClick={()=>setmethod('strip')}>
    <p className={ `min-w-3.5 h-3.5 rounded-full border ${method=='strip'?'bg-green-400':''}`}></p>
    <img src={assets.stripe_logo} alt='icon'  className=' w-10 '/>
  </div>
  
  <div className='flex items-center gap-1 border p-1' onClick={()=>setmethod('razo')}>
    <p className={`min-w-3.5 h-3.5 rounded-full border  ${method == 'razo'?'bg-green-400':''}`}></p>
    <img src={assets.razorpay_logo} alt='icon'  className='w-16'/>
</div>
    
    <div  className='flex items-center gap-1 border p-1 ' onClick={()=>setmethod('cod')}>
    <p className={`min-w-3.5 h-3.5 rounded-full border ${method=='cod'? 'bg-green-400':''}`}></p>
    <p className='text-sm text-gray-500'>CASH ON DELIVERY</p>
    </div>
  
</div>

<div className='mt-3 text-center sm:text-end'>
  <button className='bg-black text-white rounded-sm p-1 w-36 '>PLACE ORDER</button>
</div>
</div>
      </div>
  
  )
}

export default Placeorder
