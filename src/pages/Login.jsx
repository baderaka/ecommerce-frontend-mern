import React, { useState } from 'react'

const Login = () => {
  const[currentstate,setcurrentstate]=useState('Sign Up')
  console.log(currentstate);
  return (
    <form className='flex flex-col mt-14 items-center justify-center gap-4'>
    <div className='flex flex-row items-center gap-2 p-4'>
<p className='text-2xl font-bold '>{currentstate}</p>
<hr className='w-10 h-1 bg-black mt-1'></hr>
    </div>
    <div className={`${currentstate == 'Sign Up'? '':'hidden'}`}> <input type='text' placeholder='Name' className='border w-80 p-1 border-black'/></div>
    <div> <input type='email' placeholder='Email' className='border w-80 p-1 border-black'/></div>
    <div> <input type='text' placeholder='Password' className='border w-80 p-1 border-black'/></div>
    <div>
      <div className='flex gap-24'>
        <p className='text-sm'>Forget Your Password?</p>
      {
        currentstate === 'Sign Up'? <p className='text-sm cursor-pointer' onClick={()=>setcurrentstate('Login')}>Login here</p>
       :
        <p className='text-sm cursor-pointer' onClick={()=>setcurrentstate('Sign Up')}>Create Account</p>
      }
      </div>
    </div>
    <button className='bg-black text-white px-3 py-1 rounded-sm '>{currentstate}</button>
    </form>
  )
}
export default Login
