import { createContext, useEffect, useState } from "react";
import { products } from "../assets/frontend_assets/assets";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
export const Shopcontext=createContext();

export const Shopprovider=({children})=>{

const currency='$';
const delivery_fee=10;
const[search,setsearch]=useState('');
const[show,setshow]=useState(false);

const[cartitems,setcartitems]=useState({});

const navigate=useNavigate();



const getcartitems= async (productid,size)=>{
  let newcartitems=structuredClone(cartitems);
if(!size){
  toast.error('select product size'); 
  return;
}
  
if(newcartitems[productid]){
  if(newcartitems[productid][size]){

    newcartitems[productid][size] += 1;

  }
  else{
    newcartitems[productid][size] =1;
  }
}
 
  else{
    newcartitems[productid]={};
    newcartitems[productid][size] = 1;
  }
  setcartitems(newcartitems);
 
}

const getcartcount=()=>{
  let totalcount=0;
  for(const items in cartitems ){
    for(const item in cartitems[items])
    {
    if(cartitems[items][item]>0){
      totalcount +=cartitems[items][item]
      
    }
  }
 
  }
 return totalcount;
}

const changecartvalue=(itemid,size,quantity)=>{
  let newcartitems=structuredClone(cartitems);
   newcartitems[itemid][size]=quantity;
   setcartitems(newcartitems);
   
}


const carttotal=()=>{
  let totalcartamount=0;
  for(const items in cartitems){
   let   newproduct= products.find(products=>products._id ===items);
   for(const item in cartitems[items]){
      if(cartitems[items][item]>0){
totalcartamount += newproduct.price * cartitems[items][item];

      }
   }
  }
  return totalcartamount;
}
const total=()=>{
  let finaltotal=0;
  finaltotal=delivery_fee+carttotal();
  return finaltotal;

}

const value={

    products,
    currency,delivery_fee,search,setsearch,show,setshow,
    cartitems,getcartitems,setcartitems,getcartcount,changecartvalue,navigate,carttotal,total
}
    return(
        <Shopcontext.Provider value={value}>{children}</Shopcontext.Provider>
    )
}
