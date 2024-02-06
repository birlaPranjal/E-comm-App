import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { lazy ,Suspense } from 'react';
import { useCart } from '../cart/CartContext';
import gsap from 'gsap';


let Card=lazy(()=>import("./Card"))

export default function Products() {
    const { addToCart } = useCart(); 
    
    let[Data,setData]=useState([]);
    let[Products,setProducts]=useState([]);
    let[Category,setCategory]=useState("Clothes");
    const [selectedCategory, setSelectedCategory] = useState(null);

    const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setCategory(category);
  };

    useEffect(() =>{
        async function getProducts(){
            let apiData= await fetch("https://api.escuelajs.co/api/v1/products");
            apiData=await apiData.json();
            
            Data=setData(apiData);
        }
        getProducts();
    },[]);

    useEffect(()=>{
        setProducts(Data.filter((e)=>e.category.name===Category));

    },[Category,Data])
    useEffect(() => {
      // GSAP Animation for li elements
      gsap.from('.category-link', {
        opacity: 0,
        delay:.5,
        duration: 1,
        scale:1.3,
        ease: 'power3.out',
      });
    }, []);

    
  return (
    <div className=''>
      <center>
        <ul className=' m-10 flex flex-wrap justify-evenly gap-2 pt-6 '>
      <li onClick={() => handleCategoryClick("Clothes")}>
        <Link
          className={`abc category-link ${selectedCategory === "Clothes" ? 'bg-slate-600 text-white' : 'bg-slate-300 text-black'} transition-transform transform hover:scale-110 hover:font-bold cursor-pointer h-8 border-slate-700 border-2    items-center flex justify-center w-40`}
        >
          Clothes
        </Link>
      </li>
      <li onClick={() => handleCategoryClick("Shoes")}>
        <Link
          className={`category-link ${selectedCategory === "Shoes" ? 'bg-slate-600 text-white' : 'bg-slate-300 text-black'} transition-transform transform hover:scale-110 hover:font-bold cursor-pointer h-8 border-slate-700 border-2    items-center flex justify-center w-40`}
        >
          Shoes
        </Link>
      </li>
      <li onClick={() => handleCategoryClick("Electronics")}>
        <Link
          className={`category-link ${selectedCategory === "Electronics" ? 'bg-slate-600 text-white' : 'bg-slate-300 text-black'} transition-transform transform hover:scale-110 hover:font-bold cursor-pointer h-8 border-slate-700 border-2    items-center flex justify-center w-40`}
        >
          Electronics
        </Link>
      </li>
      <li onClick={() => handleCategoryClick("Furniture")}>
        <Link
          className={`category-link ${selectedCategory === "Furniture" ? 'bg-slate-600 text-white' : 'bg-slate-300 text-black'} transition-transform transform hover:scale-110 hover:font-bold cursor-pointer h-8 border-slate-700 border-2    items-center flex justify-center w-40`}
        >
          Furniture
        </Link>
      </li>
    </ul>
        <br /><br />
          <div className="flex flex-wrap -m-4 justify-evenly mx-14">
          {
            Products.map((product) => (
                <div className="m-4" key={product.id}>
                <Suspense fallback={<Loading />}>     
                <Card name={product.title} category={product.category.name} price={product.price} image={product.images[0]} onAddToCart={() => addToCart(product)} />
                </Suspense>
              </div>
            ))}
          </div>
      </center>
    </div>
  )
}



const Loading = () => {
    return (
      <div>
        <h1 className='text-white'>Loading........</h1>
      </div>
    );
  };
