// global/valueContext.js
import React, { createContext, useState } from 'react';

export const ValueContext = createContext();

export const ValueProvider = ({ children }) => {
  const [totalValue, setTotalValue] = useState(0);
  const [cartItems, setCartItems] = useState([]);

  const addItemToCart = (item) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find(i => i.id === item.id);
      if (existingItem) {
        return prevItems.map(i =>
          i.id === item.id
            ? { ...i, quantity: i.quantity + 1 }
            : i
        );
      }
      return [...prevItems, { ...item, quantity: 1 }];
    });
    setTotalValue(prevValue => prevValue + item.price);
  };

  const removeItemFromCart = (id) => {
    setCartItems((prevItems) => {
      const updatedItems = prevItems.filter(item => item.id !== id);
      const itemToRemove = prevItems.find(item => item.id === id);
      setTotalValue(prevValue => prevValue - (itemToRemove.price * itemToRemove.quantity));
      return updatedItems;
    });
  };

  const getTotalItemsInCart = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  return (
    <ValueContext.Provider value={{ totalValue, setTotalValue, cartItems, addItemToCart, removeItemFromCart, getTotalItemsInCart }}>
      {children}
    </ValueContext.Provider>
  );
};
