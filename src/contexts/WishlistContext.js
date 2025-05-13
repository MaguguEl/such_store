import React, { createContext, useState, useContext } from 'react';

const WishlistContext = createContext();

export const WishlistProvider = ({ children }) => {
  const [wishlistItems, setWishlistItems] = useState([]);

  const addToWishlist = function(product) {
    if (!isInWishlist(product.id)) {
      setWishlistItems(function(prevItems) {
        return [...prevItems, product];
      });
    }
  };

  const removeFromWishlist = function(productId) {
    setWishlistItems(function(prevItems) {
      return prevItems.filter(function(item) {
        return item.id !== productId;
      });
    });
  };

  const isInWishlist = function(productId) {
    return wishlistItems.some(function(item) {
      return item.id === productId;
    });
  };

  const wishlistCount = wishlistItems.length;

  const value = {
    wishlistItems,
    addToWishlist,
    removeFromWishlist,
    isInWishlist,
    wishlistCount
  };

  return (
    <WishlistContext.Provider value={value}>
      {children}
    </WishlistContext.Provider>
  );
};

export const useWishlist = function() {
  const context = useContext(WishlistContext);
  if (context === undefined) {
    throw new Error('useWishlist must be used within a WishlistProvider');
  }
  return context;
};