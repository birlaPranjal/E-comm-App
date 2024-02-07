// Cart.js
import React from 'react';
import { useCart } from './CartContext';
import CartCard from './CartCard';
import Billing from './Billing';

const Cart = () => {
  const { cart, removeFromCart, updateQuantity } = useCart();

  const handleRemoveFromCart = (itemName) => {
    removeFromCart(itemName);
  };

  return (
    <div className='min-h-screen'>
      
      <div className=' flex justify-center '>
        <div className="w-2/5 m-10 flex flex-col">
          {cart.map((item, index) => (
            <div className="m-4" key={index}>
              
              <CartCard
                id={item.id}
                name={item.title}
                category={item.category.name}
                price={item.price}
                image={item.images[0]}
                quantity={item.quantity}
                onRemove={(itemName) => handleRemoveFromCart(itemName)}
                updateQuantity={updateQuantity}
              />
            </div>
          ))}
        </div>
        <Billing cart={cart} />
      </div>
    </div>
  );
};

export default Cart;