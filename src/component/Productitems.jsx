import React, { useContext } from 'react'
import { Shopcontext } from '../context/Shopcontext'
import { Link } from 'react-router-dom';
import { delay, motion } from "framer-motion"
 

const Productitems = ({id,image,name,price,index}) => {
const{currency}=useContext(Shopcontext);



  return (
    
    <Link to={`/product/${id}`} > 
    <motion.div className='flex flex-col justify-center items-center' initial={{opacity:0,translateX:index %2 ===0? -50:50}} whileInView={{opacity:1,translateX:0}} 
    transition={{duration:0.8,delay:index *0.01,type:'tween',ease:[0.25,0.25,0.25,0.75]}}
    
    >
        <img src={image} alt='img' className='w-80 '/>
      <p>{name}</p>
      <p>{currency}{price}</p>
      </motion.div></Link>
    
  )
}

export default Productitems
