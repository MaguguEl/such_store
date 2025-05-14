import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faTimes, faShoppingCart, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { motion, AnimatePresence } from 'framer-motion';
import { useWishlist } from '../contexts/WishlistContext';
import { useCart } from '../contexts/CartContext';

const WishlistPage = () => {
  const { wishlistItems, removeFromWishlist } = useWishlist();
  const { addToCart } = useCart();
  
  useEffect(function() {
    document.title = 'SacredEnergies - Your Wishlist';
  }, []);
  
  if (wishlistItems.length === 0) {
    return (
      <div className="container px-4 py-5 my-5 text-center">
        <div className="card mx-auto" style={{ maxWidth: '500px' }}>
          <div className="card-body p-5">
            <div className="mb-4">
              <FontAwesomeIcon icon={faHeart} size="3x" className="text-muted" />
            </div>
            <h1 className="card-title h2 mb-3">Your wishlist is empty</h1>
            <p className="card-text text-muted mb-4">
              Save items you love to your wishlist and they'll be waiting for you here.
            </p>
            <Link 
              to="/shop" 
              className="btn btn-primary"
            >
              Discover Products <FontAwesomeIcon icon={faArrowRight} className="ms-2" />
            </Link>
          </div>
        </div>
      </div>
    );
  }
  
  return (
    <div className="bg-light min-vh-100 py-4">
      <div className="container">
        <h1 className="h2 mb-4">Your Wishlist</h1>
        
        <div className="card mb-4">
          <div className="card-header bg-white">
            <h2 className="h5 mb-0">{wishlistItems.length} {wishlistItems.length === 1 ? 'Item' : 'Items'}</h2>
          </div>
          
          <AnimatePresence>
            <ul className="list-group list-group-flush">
              {wishlistItems.map(function(product) {
                return (
                  <motion.li 
                    key={product.id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0, height: 0 }}
                    className="list-group-item p-4"
                  >
                    <div className="d-flex flex-column flex-sm-row">
                      <div className="me-sm-4 mb-3 mb-sm-0" style={{ width: '80px', height: '80px' }}>
                        <img 
                          src={product.images[0]} 
                          alt={product.name}
                          className="img-fluid h-100 w-100 object-fit-contain bg-light"
                        />
                      </div>
                      
                      <div className="flex-grow-1">
                        <Link 
                          to={`/product/${product.id}`}
                          className="h5 text-decoration-none text-dark"
                        >
                          {product.name}
                        </Link>
                        
                        <p className="text-muted small mt-1 text-truncate">{product.description}</p>
                        
                        <div className="d-flex flex-wrap justify-content-between align-items-center mt-3">
                          <div className="fw-bold text-primary">
                            ${product.price.toFixed(2)}
                          </div>
                          
                          <div className="d-flex gap-2">
                            <button
                              onClick={function() { return addToCart(product, 1); }}
                              disabled={!product.inStock}
                              className="btn btn-sm btn-primary"
                            >
                              <FontAwesomeIcon icon={faShoppingCart} className="me-1" />
                              Add to Cart
                            </button>
                            
                            <button
                              onClick={function() { return removeFromWishlist(product.id); }}
                              className="btn btn-sm btn-outline-danger"
                              aria-label="Remove from wishlist"
                            >
                              <FontAwesomeIcon icon={faTimes} />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.li>
                );
              })}
            </ul>
          </AnimatePresence>
        </div>
        
        <div className="d-flex justify-content-between">
          <Link 
            to="/shop" 
            className="btn btn-outline-secondary"
          >
            Continue Shopping
          </Link>
        </div>
      </div>
    </div>
  );
};

export default WishlistPage;