import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Collection from './pages/Collection'
import Contact from './pages/Contact'
import Navbar from './component/Navbar'
import Cart from './pages/Cart'
import Footer from './component/Footer'
import Search from './component/Search'
import Products from './pages/Products'
import Placeorder from './pages/Placeorder'
import Login from './pages/Login'
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
const App = () => {
  return (
    <div className='px-6 mx-4 '>
    <ToastContainer/>
      <div> <Navbar/> </div>
      <Search/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/collection' element={<Collection/>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='product/:productid' element={<Products/>}/>
      <Route path='placeorder' element={<Placeorder/>}/>
      <Route path='login' element={<Login/>}/>
    </Routes>
     <div className='mt-40 mb-3 sm:shadow-2xl sm:shadow-black rounded-3xl pt-1'>
     <Footer/>
     </div>
    </div>
  )
}

export default App
