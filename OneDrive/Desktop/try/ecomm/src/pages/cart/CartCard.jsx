// CartCard.js
import React, { useState } from 'react';

const CartCard = ({ id, name, category, price, image, quantity, onRemove, updateQuantity }) => {
  const [count, setCount] = useState(quantity);

  const handleIncreaseQuantity = () => {
    setCount(prevCount => {
      const newCount = prevCount + 1;
      updateQuantity(id, newCount);
      return newCount;
    });
  };

  const handleDecreaseQuantity = () => {
    setCount(prevCount => {
      const newCount = prevCount > 1 ? prevCount - 1 : 1;
      updateQuantity(id, newCount);
      return newCount;
    });
  };

  const handleRemoveItem = () => {
    onRemove(name);
  };


  return (
    <div className="bg-white border rounded overflow-hidden">
      <div className="flex items-center flex-wrap justify-center p-4">
        <div className="flex-shrink-0">
          <img src={image} alt={name} className="h-16 w-16 rounded" />
        </div>
        <div className="ml-4 flex-grow">
          <h3 className="text-lg font-medium text-gray-900">{name}</h3>
          <p className="text-sm text-gray-500">{category}</p>
          <p className="text-lg font-bold text-gray-900">${price}</p>
        </div>
        <div className="flex-shrink-0">
          <button
            className="bg-gray-200 text-gray-700 px-2 py-1 rounded"
            onClick={handleDecreaseQuantity}
          >
            -
          </button>
          <span className="mx-2">{count}</span>
          <button
            className="bg-gray-200 text-gray-700 px-2 py-1 rounded"
            onClick={handleIncreaseQuantity}
          >
            +
          </button>
          <button
            className="ml-4 text-red-600"
            onClick={handleRemoveItem}
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartCard;