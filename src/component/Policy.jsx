import React from 'react'
import { assets } from '../assets/frontend_assets/assets'

const Policy = () => {
  return (
    <div className='flex flex-col gap-4 sm:flex-row justify-center sm:gap-72  text-center  items-center p-6 m-6 '>
      <div>
        <img src={assets.exchange_icon} alt='img' className='m-auto py-8 w-12'/>
        <p> Easy Exchange Policy</p>
        <p>We offer hassle free exchange policy</p>
      </div>
      <div >
        <img src={assets.quality_icon} className='m-auto py-8 w-12'/>
        <p> 7 Days Return Policy</p>
        <p>We provide 7 days free returnpolicy</p>
      </div>

      <div className=' flex flex-col gap-2'>
        <img src={assets.support_img} className='m-auto py-8 w-12'/>
        <p> Best Customer Support</p>
        <p>We provide 24/7 customer support</p>
      </div>


    </div>
  )
}

export default Policy
