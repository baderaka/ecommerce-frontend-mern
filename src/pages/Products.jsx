import React, { useContext, useEffect, useState } from 'react'
import { Shopcontext } from '../context/Shopcontext'
import { useParams } from 'react-router-dom';
import { assets } from '../assets/frontend_assets/assets';

const Products = () => {
    const {products,currency,getcartitems}=useContext(Shopcontext);
    const {productid}=useParams();
const [thing,setthing]=useState([]);
const[image,setimage]=useState([]);
const[size,setsize]=useState([]);
const[s,sets]=useState('');
const[i,seti]=useState('');

const productdeatiles= async ()=>{

   products.map((item)=>{
if(item._id === productid){
    setthing(item);
   setimage(item.image)
   setsize(item.sizes);
}
   })
}


useEffect(()=>{
    productdeatiles();
},[productid,products])

  return (
    <>
    <div className=' grid grid-cols-2 justify-center items-center  sm:flex sm:flex-row sm:gap-5 '>
      <div className=' flex flex-col gap-3 w-28 '>
         {image .map((item,index)=>(
      <img src={item} alt='img' key={index} className='h-28' onClick={()=>seti(item)}/>
    ))}</div>
    <div >
      <img src= {i? i:image[0]} alt='img'  className='cursor-pointer transition ease-in-out duration-700 delay-200  hover:scale-105 hover:-translate-y-1 '/>
    </div>

    {/* product deatiles part.....!*/}

    <div className=' text-center items-center sm:text-start  col-span-2 sm:flex-1 sm:p-2'>
       <p className='font-bold text-xl mt-8 sm:mt-0 '>{thing.name}</p>
       <div className='flex flex-row justify-center items-center sm:items-start sm:justify-start my-2 py-3  sm:my-2 sm:py-3 '>
        <img src={assets.star_icon} alt='icon' className='w-4'/>
        <img src={assets.star_icon} alt='icon' className='w-4'/>
        <img src={assets.star_icon} alt='icon' className='w-4'/>
        <img src={assets.star_icon} alt='icon' className='w-4'/>
        <img src={assets.star_dull_icon} alt='icon' className='w-4'/>
        </div>
    
    
    <p className='font-bold text-lg mt-3 '>{currency}<span>{thing.price}</span></p>
    <p className='text-md  text-slate-600 text-center sm:text-justify sm:pr-56 mt-3'>{thing.description}</p>
    <p className='text-black mt-6 sm:mt-4'> Select Size</p>
   <div className='mt-3'>
    {
     size.map((item,index)=>(
        <button className={`bg-gray-200 mr-2 sm:mr-4 w-10 h-10 ${item === s ?' border border-orange-500':''}` }key={index} onClick={()=>sets(item)}>{item}</button>
      ))
    }
   </div>
   <button  onClick={()=>getcartitems(thing._id,s)} className='bg-black text-white mt-8 sm:mt-3 p-2 px-3 text-xs' >ADD TO CART</button>
   <hr className='w-full bg-gray h-3 mt-12'></hr>
   <div>
   <p>100% original product</p>
   <p>cash on delivery available on this product</p>
   <p>easy return and exchange policy within 7 days</p>
   </div>
   
    </div>
    </div>
    
    <div className='flex flex-row mt-12 mx-10'>
      <button className='border border-1 p-2'>Description</button>
      <button className='border border-1 p-2'>Review (122)</button>
    </div>
    <div className='border border-1 text-sm mx-10 p-10'>
    Ecommerce, which stands for “electronic commerce,” is the buying and selling of products and services over the internet. This includes all types of industries, such as retail, electronics, grocery, education, entertainment, delivery, and more.

    <p className='mt-4'>A great ecommerce site can do a variety of things, from helping you sell your products to providing an excellent user experience (UX) for customers.Starting an ecommerce business consists of a series of steps to set up your online store, source or create your products, and promote your website. </p>
    </div>
    </>
  )
}

export default Products
 


