import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addItem, removeItem, updateQuantity, selectCartTotal, selectCartItemCount } from './cartSlice';

function ShoppingCart() {
  const [productName, setProductName] = useState('');
  const [productPrice, setProductPrice] = useState('');
  const cartItems = useSelector((state) => state.cart.items);
  const cartTotal = useSelector(selectCartTotal);
  const itemCount = useSelector(selectCartItemCount);
  const themeMode = useSelector((state) => state.theme.mode);
  const dispatch = useDispatch();

  const handleAddItem = (e) => {
    e.preventDefault();
    if (productName.trim() && !isNaN(productPrice) && Number(productPrice) > 0) {
      dispatch(addItem(productName.trim(), Number(productPrice)));
      setProductName('');
      setProductPrice('');
    }
  };

  const handleQuantityChange = (id, quantity) => {
    dispatch(updateQuantity({ id, quantity }));
  };

  return (
    <div className={`rounded-lg shadow-md p-6 ${
      themeMode === 'light' 
        ? 'bg-white border border-gray-200' 
        : 'bg-gray-800 border border-gray-700'
    }`}>
      <h2 className="text-2xl font-semibold mb-4">4. Shopping Cart</h2>
      
      <form onSubmit={handleAddItem} className="flex flex-wrap gap-2 mb-4">
        <input
          type="text"
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
          placeholder="Product name"
          required
          className={`px-4 py-2 rounded-md border focus:outline-none focus:ring-2 ${
            themeMode === 'light'
              ? 'bg-white border-gray-300 focus:ring-blue-500 text-gray-800'
              : 'bg-gray-700 border-gray-600 focus:ring-blue-400 text-gray-100'
          }`}
        />
        <input
          type="number"
          value={productPrice}
          onChange={(e) => setProductPrice(e.target.value)}
          placeholder="Price"
          step="0.01"
          min="0"
          required
          className={`px-4 py-2 rounded-md border focus:outline-none focus:ring-2 ${
            themeMode === 'light'
              ? 'bg-white border-gray-300 focus:ring-blue-500 text-gray-800'
              : 'bg-gray-700 border-gray-600 focus:ring-blue-400 text-gray-100'
          }`}
        />
        <button 
          type="submit"
          className={`px-4 py-2 rounded-md transition-all ${
            themeMode === 'light'
              ? 'bg-purple-600 hover:bg-purple-700 text-white'
              : 'bg-purple-500 hover:bg-purple-400 text-white'
          }`}
        >
          Add to Cart
        </button>
      </form>
      
      <div className={`mb-4 p-3 rounded-md ${
        themeMode === 'light'
          ? 'bg-purple-100 text-purple-800'
          : 'bg-purple-900 text-purple-200'
      }`}>
        <h3 className="font-semibold">Cart: {itemCount} items (Total: ${cartTotal.toFixed(2)})</h3>
      </div>
      
      {cartItems.length === 0 ? (
        <p className={`text-center py-4 italic ${
          themeMode === 'light' ? 'text-gray-500' : 'text-gray-400'
        }`}>
          Your cart is empty.
        </p>
      ) : (
        <ul className="space-y-3">
          {cartItems.map((item) => (
            <li 
              key={item.id} 
              className={`flex flex-wrap md:flex-nowrap items-center justify-between p-4 rounded-md ${
                themeMode === 'light'
                  ? 'bg-gray-50 border border-gray-200'
                  : 'bg-gray-700 border border-gray-600'
              }`}
            >
              <div className="flex flex-col mb-2 md:mb-0">
                <span className="font-medium">{item.name}</span>
                <span className={themeMode === 'light' ? 'text-green-600' : 'text-green-400'}>
                  ${item.price.toFixed(2)}
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <button 
                  onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                  disabled={item.quantity <= 1}
                  className={`w-8 h-8 flex items-center justify-center rounded-full transition-colors ${
                    item.quantity <= 1
                      ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                      : themeMode === 'light'
                        ? 'bg-gray-200 hover:bg-gray-300 text-gray-700'
                        : 'bg-gray-600 hover:bg-gray-500 text-white'
                  }`}
                >
                  -
                </button>
                <span className={`font-medium px-2 ${
                  themeMode === 'light' ? 'text-gray-800' : 'text-gray-200'
                }`}>
                  {item.quantity}
                </span>
                <button 
                  onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                  className={`w-8 h-8 flex items-center justify-center rounded-full transition-colors ${
                    themeMode === 'light'
                      ? 'bg-gray-200 hover:bg-gray-300 text-gray-700'
                      : 'bg-gray-600 hover:bg-gray-500 text-white'
                  }`}
                >
                  +
                </button>
                <button 
                  onClick={() => dispatch(removeItem(item.id))}
                  className={`ml-2 px-3 py-1 rounded-md text-sm transition-all hover:scale-105 ${
                    themeMode === 'light'
                      ? 'bg-red-600 hover:bg-red-700 text-white'
                      : 'bg-red-500 hover:bg-red-400 text-white'
                  }`}
                >
                  Remove
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ShoppingCart;