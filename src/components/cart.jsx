// Cart.js
import React, { useContext } from 'react';
import { ValueContext } from '../global/valueContext';
import '../css/cart.css';

const Cart = () => {
  const { cartItems, totalValue, removeItemFromCart } = useContext(ValueContext);

  return (
    <div className="cart">
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>No items in cart</p>
      ) : (
        cartItems.map(item => (
          <div key={item.id} className="cart-item">
            <span>{item.name}</span>
            <span>Quantity: {item.quantity}</span>
            <span>Price: ${item.price}</span>
            <span>Total: ${item.price * item.quantity}</span>
            <button onClick={() => removeItemFromCart(item.id)}>Remove</button>
          </div>
        ))
      )}
      <h3>Total Value: ${totalValue}</h3>
    </div>
  );
}

export default Cart;
