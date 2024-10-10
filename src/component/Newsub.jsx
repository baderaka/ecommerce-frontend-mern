import React from 'react'

const Newsub = () => {
  return (
    <div className='flex flex-col justify-center items-center gap-2'>
      <p className='font-bold text-xl'>Subscribe Now & Get 20% off</p>
      <p >connect with us and make our family bigger</p>
      <div className='w-full flex justify-center'>
     <form className='w-3/4 h-9 p-1 sm:w-1/4 border sm:h-12 sm:p-2'>
        <input type='email' placeholder='Enter your email' />
       </form>
       <button className='bg-black text-white px-3 rounded-r-lg'>Subscribe</button>
     </div>
 </div>
    
  )
}

export default Newsub
