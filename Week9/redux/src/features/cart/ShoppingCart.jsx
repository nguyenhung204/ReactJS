import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addItem, removeItem, updateQuantity, selectCartTotal, selectCartItemCount } from './cartSlice';

function ShoppingCart() {
  const [productName, setProductName] = useState('');
  const [productPrice, setProductPrice] = useState('');
  const cartItems = useSelector((state) => state.cart.items);
  const cartTotal = useSelector(selectCartTotal);
  const itemCount = useSelector(selectCartItemCount);
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
    <div className="feature-section">
      <h2>4. Shopping Cart</h2>
      
      <form onSubmit={handleAddItem} className="add-product">
        <input
          type="text"
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
          placeholder="Product name"
          required
        />
        <input
          type="number"
          value={productPrice}
          onChange={(e) => setProductPrice(e.target.value)}
          placeholder="Price"
          step="0.01"
          min="0"
          required
        />
        <button type="submit">Add to Cart</button>
      </form>
      
      <div className="cart-summary">
        <h3>Cart: {itemCount} items (Total: ${cartTotal.toFixed(2)})</h3>
      </div>
      
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul className="cart-items">
          {cartItems.map((item) => (
            <li key={item.id} className="cart-item">
              <div className="item-info">
                <span className="item-name">{item.name}</span>
                <span className="item-price">${item.price.toFixed(2)}</span>
              </div>
              <div className="item-controls">
                <button 
                  onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                  disabled={item.quantity <= 1}
                >
                  -
                </button>
                <span className="item-quantity">{item.quantity}</span>
                <button onClick={() => handleQuantityChange(item.id, item.quantity + 1)}>
                  +
                </button>
                <button 
                  onClick={() => dispatch(removeItem(item.id))}
                  className="remove-btn"
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