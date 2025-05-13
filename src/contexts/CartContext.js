import React, { createContext, useState, useContext } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = function(product, quantity = 1) {
    setCartItems(function(prevItems) {
      const existingItem = prevItems.find(function(item) {
        return item.product.id === product.id;
      });
      
      if (existingItem) {
        return prevItems.map(function(item) {
          return item.product.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item;
        });
      }
      
      return [...prevItems, { product, quantity }];
    });
  };

  const removeFromCart = function(productId) {
    setCartItems(function(prevItems) {
      return prevItems.filter(function(item) {
        return item.product.id !== productId;
      });
    });
  };

  const updateQuantity = function(productId, quantity) {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }
    
    setCartItems(function(prevItems) {
      return prevItems.map(function(item) {
        return item.product.id === productId
          ? { ...item, quantity }
          : item;
      });
    });
  };

  const clearCart = function() {
    setCartItems([]);
  };

  const cartTotal = cartItems.reduce(
    function(total, item) {
      return total + item.product.price * item.quantity;
    }, 
    0
  );

  const cartCount = cartItems.reduce(
    function(count, item) {
      return count + item.quantity;
    }, 
    0
  );

  const value = {
    cartItems,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    cartTotal,
    cartCount
  };

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = function() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};