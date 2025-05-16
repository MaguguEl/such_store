import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faPlus, faMinus, faShoppingCart, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';
import { useCart } from '../contexts/CartContext';

const CartPage = () => {
  const { cartItems, removeFromCart, updateQuantity, cartTotal } = useCart();
  
  useEffect(function() {
    document.title = 'SacredEnergies - Your Cart';
  }, []);
  
  if (cartItems.length === 0) {
    return (
      <div className="container px-4 py-5 my-5 text-center">
        <div className="card mx-auto" style={{ maxWidth: '500px' }}>
          <div className="card-body p-5">
            <div className="mb-4">
              <FontAwesomeIcon icon={faShoppingCart} size="3x" className="text-muted" />
            </div>
            <h1 className="card-title h2 mb-3">Your cart is empty</h1>
            <p className="card-text text-muted mb-4">
              Looks like you haven't added any products to your cart yet.
            </p>
            <Link 
              to="/shop" 
              className="btn btn-primary"
            >
              Continue Shopping <FontAwesomeIcon icon={faArrowRight} className="ms-2" />
            </Link>
          </div>
        </div>
      </div>
    );
  }
  
  return (
    <div className="bg-light min-vh-100 py-4">
      <div className="container">
        <h1 className="h2 mb-4">Your Shopping Cart</h1>
        
        <div className="row g-4">
          {/* Cart Items */}
          <div className="col-lg-8">
            <div className="card">
              <div className="card-header bg-white">
                <h2 className="h5 mb-0">{cartItems.length} {cartItems.length === 1 ? 'Item' : 'Items'}</h2>
              </div>
              
              <ul className="list-group list-group-flush">
                {cartItems.map(function({ product, quantity }) {
                  return (
                    <motion.li 
                      key={product.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
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
                            to={`/product/MWK{product.id}`}
                            className="h5 text-decoration-none text-dark"
                          >
                            {product.name}
                          </Link>
                          
                          <div className="d-flex flex-wrap justify-content-between align-items-center mt-2">
                            <div className="input-group me-3" style={{ width: '120px' }}>
                              <button
                                onClick={function() { return updateQuantity(product.id, quantity - 1); }}
                                className="btn btn-outline-secondary"
                              >
                                <FontAwesomeIcon icon={faMinus} />
                              </button>
                              
                              <span className="form-control text-center px-2">
                                {quantity}
                              </span>
                              
                              <button
                                onClick={function() { return updateQuantity(product.id, quantity + 1); }}
                                className="btn btn-outline-secondary"
                              >
                                <FontAwesomeIcon icon={faPlus} />
                              </button>
                            </div>
                            
                            <div className="text-end mt-2 mt-sm-0">
                              <div className="fw-bold text-primary">
                                MWK{(product.price * quantity).toFixed(2)}
                              </div>
                              <div className="text-muted small">
                                MWK{product.price.toFixed(2)} each
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        <button
                          onClick={function() { return removeFromCart(product.id); }}
                          className="btn btn-link text-danger ms-sm-3 mt-2 mt-sm-0 align-self-start"
                          aria-label="Remove item"
                        >
                          <FontAwesomeIcon icon={faTimes} />
                        </button>
                      </div>
                    </motion.li>
                  );
                })}
              </ul>
            </div>
          </div>
          
          {/* Order Summary */}
          <div className="col-lg-4">
            <div className="card sticky-top" style={{ top: '20px' }}>
              <div className="card-body">
                <h2 className="h5 mb-4">Order Summary</h2>
                
                <div className="mb-4">
                  <div className="d-flex justify-content-between py-2 border-bottom">
                    <span>Subtotal</span>
                    <span>MWK{cartTotal.toFixed(2)}</span>
                  </div>
                  
                  <div className="d-flex justify-content-between py-2 border-bottom">
                    <span>Shipping</span>
                    <span>{cartTotal > 85000 ? 'Free' : 'MWK 8,500'}</span>
                  </div>

                  <div className="d-flex justify-content-between py-2 border-bottom">
                    <span>Tax</span>
                    <span>MWK{(cartTotal * 0.08).toFixed(2)}</span>
                  </div>
                  
                  <div className="d-flex justify-content-between fw-bold py-3">
                    <span>Total</span>
                    <span>
                      MWK{(cartTotal + (cartTotal > 50 ? 0 : 5) + (cartTotal * 0.08)).toFixed(2)}
                    </span>
                  </div>
                </div>
                
                <div>
                  <Link 
                    to="/checkout" 
                    className="btn btn-primary w-100 mb-3"
                  >
                    Proceed to Checkout
                  </Link>
                  
                  <Link 
                    to="/shop" 
                    className="btn btn-outline-secondary w-100"
                  >
                    Continue Shopping
                  </Link>
                </div>
                
                <div className="mt-4 text-center text-muted small">
                  <p className="mb-0">All orders over MWK 850,000  qualify for free shipping.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;