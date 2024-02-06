import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const Card = ({ name, category, price, image, onAddToCart }) => {
  const cardRef = useRef(null);

  const handleAddToCart = () => {
    onAddToCart();

    // GSAP animation timeline for "Added to Cart" animation
    const tl = gsap.timeline();

    tl.to(".added", {
      opacity: 1,
      yoyo: true,
      repeat: 1,
      duration: 0.3,
      ease: 'power3.out',
    });
  };

  useEffect(() => {
    // GSAP animation timeline for initial card entry
    const tl = gsap.timeline();

    tl.from(cardRef.current, {
      opacity: 0,
      y: -200,
      duration: 0.5,
      scale: 0.3,
    });
  }, []);

  return (
    <div ref={cardRef} className="border-sky-200 border-2 w-72 h-96 rounded-3xl p-4">
      <div className='added w-64 h-80  opacity-0 absolute bg-white pt-16  '>
        <div className='text-black font-extrabold text-6xl '>Added to Cart</div>
      </div>
      <img src={image} alt={name} className="w-11/12 mb-4 h-40 rounded-xl" />
      <div className="px-6">
        <div className="font-bold text-xl h-20 text-white">{name}</div>
        <p className="text-white text-sm mt-2">Category: {category}</p>
      </div>
      <div className="">
        <p className="text-white font-bold text-xl">${price}</p>
      </div>
      <div className="">
        <button onClick={handleAddToCart} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mr-2 rounded">
          Add to Cart
        </button>
        <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default Card;
