// Billing.js
import React from 'react';

const Billing = ({ cart }) => {
  const totalQuantity = cart.reduce((total, item) => total + item.quantity, 0);
  const subtotal = cart.reduce((total, item) => total + item.quantity * item.price, 0);

  const renderBillingItems = () => {
    return cart.map((item, index) => (
      <div key={index} className="mb-2">
        {(item.quantity)? item.quantity : item.quantity=1} * ${item.price} = ${item.quantity * item.price}
      </div>
    ));
  };

  return (
    <div className='w-1/4 mt-14 h-auto bg-white p-4 rounded-xl'>
      <h3 className='text-xl font-bold mb-4'>Subtotal</h3>
      <p className='text-gray-700'>Number of items: {totalQuantity}</p>
      {renderBillingItems()}
      <p className='text-gray-700'>Subtotal: ${subtotal}</p>
      <button className='bg-blue-500 text-white px-4 py-2 rounded mt-4'>Checkout</button>
    </div>
  );
};

export default Billing;
