import React,{useEffect} from 'react';
import { Link } from 'react-router-dom';
import gsap from "gsap";
import { useGSAP } from "@gsap/react";


export default function NavBar() {
  useGSAP(() => {
    gsap.from('h2', { y:-100 ,opacity: 0, duration: 0.5, delay: 0.2});
    gsap.from('.gsap', { y:-100, opacity: 0  });
    

  });
  return (
    <>
    <div className='pt-6 page1 flex justify-between items-center h-12 bg-slate-950'>
      <h2 className='pl-4 lg:pl-20 text-3xl sm:text-4xl font-bold   text-white'>Logo</h2>
      <ul className='gsap pr-10 w-1/2 flex justify-evenly gap-1 text-white'>
        <Link to="/"className='mx-1 transition-transform transform font-semibold hover:scale-110 hover:font-bold cursor-pointer text-xl md:text-2xl'>Home</Link>
        <Link to="/Products" className='mx-1 transition-transform font-semibold transform hover:scale-110 hover:font-bold cursor-pointer text-xl md:text-2xl'>Products</Link>
        <Link to="/Cart" className='mx-1 transition-transform font-semibold transform hover:scale-110 hover:font-bold cursor-pointer text-xl md:text-2xl'>Cart</Link>
      </ul>
    </div>
    </>
  );
}
