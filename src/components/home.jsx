import React from 'react';
import { Routes,Route} from "react-router-dom";
import Login from './login';
import AddProduct from './product';
import Navbar from './nav';
import Register  from './register';
import AddProductFrom from './addproductform';
import Cart from './cart';
import { CartProvider } from '../global/cartprovider';

import CartValue from './cartvalue';
import { ValueProvider } from '../global/valueContext';
import Logout from './logOut';
import Footer from './footer';




function Home ()  {
  return (
    <CartProvider>
    <Routes>
    <Route path=""/>
    <Route path="/nav" element={<Navbar/>} />
    <Route path="/cart" element={<Cart/>} />
    <Route  path="/login" element={<Login/>}/>
    <Route  path="/product" element={<AddProduct />}/>
    <Route path="/register" element={<Register/>}/>
    <Route path="/add" element={<AddProductFrom/>}/>
    <Route path="/logOut" element={<Logout/>}/>
    <Route path="/cartv" element={<CartValue/>}/>

    <Route path="/footer" element={<Footer/>}/>

    
   
    </Routes>
    </CartProvider>

  )
  
}

export default Home