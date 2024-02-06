// App.js
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Cart from './pages/cart/Cart';
import Home from './pages/home/Home';
import Products from './pages/products/Products';
import { CartProvider } from './pages/cart/CartContext';
import Cursor from './components/Cursor';

export default function App() {
  return (
    <div className='bg-slate-950 min-h-screen '>
      <BrowserRouter>
      <CartProvider>

        <div className=''>
          <NavBar />
          {/* <Cursor /> */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
          {/* <div className='footer'>
          <div className='h-36 bg-slate-950 footer'></div>

          <hr className='border border-slate-950'/>
          <hr className='border border-white'/>
          <hr className='border border-slate-950'/>
          <hr className='border border-white'/>
          <hr className='border border-slate-950'/>
          <hr className='border border-white'/>
          <hr className='border border-slate-950'/>
          <hr className='border border-white'/>


          <hr className='border-2 border-slate-950'/>
          <hr className='border-2 border-white'/>
          <hr className='border-2 border-slate-950'/>
          <hr className='border-2 border-white'/>
          <hr className='border-2 border-slate-950'/>
          <hr className='border-2 border-white'/>
          <hr className='border-2 border-slate-950'/>
          <hr className='border-2 border-white'/>

          
          
          <hr className='border-4 border-slate-950'/>
          <hr className='border-4 border-white'/>
          <hr className='border-4 border-slate-950'/>
          <hr className='border-4 border-white'/>
          <hr className='border-4 border-slate-950'/>
          <hr className='border-4 border-white'/>
          <hr className='border-4 border-slate-950'/>
          <hr className='border-4 border-white'/>
          
          <hr className='border-4 border-slate-950'/>
          <hr className='border-2 border-slate-950'/>
          <hr className='border-4 border-white'/>
          <hr className='border-2 border-white'/>
          <hr className='border-4 border-slate-950'/>
          <hr className='border-2 border-slate-950'/>
          <hr className='border-4 border-white'/>
          <hr className='border-2 border-white'/>
          <hr className='border-4 border-slate-950'/>
          <hr className='border-2 border-slate-950'/>
          <hr className='border-4 border-white'/>
          <hr className='border-2 border-white'/>
          <hr className='border-4 border-slate-950'/>
          <hr className='border-2 border-slate-950'/>
          <hr className='border-4 border-white'/>
          <hr className='border-2 border-white'/>
          
          <hr className='border-8 border-slate-950'/>
          <hr className='border-8 border-white'/>
          <hr className='border-8 border-slate-950'/>
          <hr className='border-8 border-white'/>
          <hr className='border-8 border-slate-950'/>
          <hr className='border-8 border-white'/>
          <hr className='border-8 border-slate-950'/>
          <hr className='border-8 border-white'/>
          <div className='bg-white h-24'></div>
          </div> */}
        </div>
      </CartProvider>
      </BrowserRouter>
    </div>
  );
}
