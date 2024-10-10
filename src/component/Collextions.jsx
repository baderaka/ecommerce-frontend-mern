import React, { useContext, useEffect, useState } from 'react'
import { Shopcontext } from '../context/Shopcontext'
import Productitems from './Productitems';
import { assets } from '../assets/frontend_assets/assets';
const Collextions = () => {


  const {products,search,setsearch}=useContext(Shopcontext);
  const[allproducts,setallproducts]=useState([]);
  const[valuee,setvaluee]=useState(false);
const[category,setcategory]=useState([]);
const[subcategory,setsubcategory]=useState([]);
const[sorttype,setsorttype]=useState();


const togglefunction=(e)=>{
if(category.includes(e.target.value)){
  setcategory(prev=>prev.filter((item)=>item !== e.target.value))
}

else{
  setcategory( prev=>[...prev,e.target.value]);
  }}  

const togglefn=(e)=>{
  if(subcategory.includes(e.target.value)){
    setsubcategory(prev=>prev.filter((item)=>item != e.target.value))
  }
  else{
    setsubcategory(prev=>[...prev,e.target.value]);
  }
}


const applyfilter=()=>{
let newproducts=products.slice();

if(search){
  newproducts=newproducts.filter(item=>item.name.toLowerCase().includes(search.toLowerCase()))
}
if(category.length > 0){
newproducts = newproducts.filter(item=>category.includes(item.category));

}
if(subcategory.length>0){
newproducts=newproducts.filter((item)=>subcategory.includes(item.subCategory))
}
setallproducts(newproducts);

}


const sortproducts=()=>{
   let sortedproducts=products.slice();

   switch(sorttype){

    case 'low-high':
     setallproducts( sortedproducts.sort((a,b)=>(a.price-b.price)));
      break;
    case "high-low":
      setallproducts(sortedproducts.sort((a,b)=>(b.price-a.price)))
      break;
      default:
applyfilter();
break;
   }


}


  useEffect(()=>{
    applyfilter();
  },[category,subcategory,search])


  useEffect(()=>{
    sortproducts();
  },[sorttype]);

  return (
    <div className='flex flex-col sm:flex-row gap-20'>
      <div className='min-w-64 flex flex-col gap-3'>
        <p className='py-3 font-bold text-xl flex items-center gap-2 -mt-4 cursor-pointer ml-2 sm:ml-0'onClick={()=>setvaluee(!valuee)}>FILTERS
          <img src={assets.dropdown_icon} alt='icon' className={`h-4 mt-1  ${valuee ? 'rotate-90' :''} sm:hidden`}/>
        </p>
        
        <div className={`border border-2  flex flex-col gap-3 p-3 ${valuee ? '':'hidden'} sm:block`}>
          <p className='font-bold text-LG'>CATEGORIES</p>
          <div className='flex flex-col gap-2'>
            <p className='flex gap-1'>
             
              <input type='checkbox' value='Men' onChange={togglefunction}/>Men
            </p>
            <p className='flex gap-1'>
              <input type='checkbox' value='Women' onChange={togglefunction}/>Woman
            </p>
            <p className='flex gap-1'>
              <input type='checkbox' value='Kids' onChange={togglefunction}/>Kids
            </p>
          </div>
        </div>
        <div className={`border border-2  flex flex-col gap-3 p-3 ${valuee ? '':'hidden'} sm:block`}>
          <p className='font-bold text-LG'>TYPE</p>
          <div className='flex flex-col gap-2'>
            <p className='flex gap-1'>
             
              <input type='checkbox' value='Topwear' onChange={togglefn} />Top Wear
            </p>
            <p className='flex gap-1'>
              <input type='checkbox' value='Bottomwear'  onChange={togglefn}/>Bottom Wear
            </p>
            <p className='flex gap-1'>
              <input type='checkbox' value='Winterwear'  onChange={togglefn} />Winter Wear
            </p>
          </div>
        </div>
      </div>


<div className='flex-1'>
      <div className='flex flex-row justify-between -mt-16'>

<div className='flex justify-center  items-center sm:gap-2'>
      <p className='items-center text-lg sm:text-2xl px-2 sm:px-4'>ALL COLLECTIONS</p>
      <hr className='w-10 h-1 bg-black mt-1'></hr>
       </div>


 <select className='border border-2 py-2 px-1'  onChange={(e)=>setsorttype(e.target.value)}>
  <option value='relevant'>Sort by:Relevant</option>
  <option value='low-high' >Sort by:low-high</option>
  <option value='high-low' >Sort by:high-low</option>
 </select>

</div>

<div className='grid gap-3 py-6 grid-cols-2 gap-5 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5'>
  {
    allproducts.map((item,index)=>(<Productitems   key={index} id={item._id} image={item.image[0]} name={item.name} price={item.price} index={index}/>))
  }
</div>
</div>

    </div>
  )
}

export default Collextions
