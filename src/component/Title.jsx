import React from 'react'

function Title({title1}) {
  return (
    <>
    <div className='flex justify-center  items-center gap-2'>
      <p className='items-center text-2xl'>{title1}</p>
      <hr className='w-10 h-1 bg-black mt-1'></hr>
       </div>
       
       <div className=' justify-center text-center'>
       make your fashion as your identity and change your perspective to life
             </div>
             </>
  )
  
}

export default Title
