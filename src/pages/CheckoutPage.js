import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faCreditCard, faHome, faTruck, faCheck } from '@fortawesome/free-solid-svg-icons';
import { useCart } from '../contexts/CartContext';

// Mock address data
const mockAddresses = [
  {
    id: 'addr1',
    fullName: 'John Doe',
    addressLine1: '123 Main St',
    city: 'Anytown',
    state: 'CA',
    zipCode: '12345',
    country: 'United States',
    phone: '555-123-4567',
    isDefault: true
  }
];

// Mock payment methods
const mockPaymentMethods = [
  {
    id: 'pay1',
    cardNumber: '**** **** **** 1234',
    cardholderName: 'John Doe',
    expiryDate: '12/25',
    isDefault: true
  }
];

const CheckoutPage = () => {
  const { cartItems, cartTotal, clearCart } = useCart();
  const [activeStep, setActiveStep] = useState(1);
  const [shippingAddress, setShippingAddress] = useState(mockAddresses[0]?.id || '');
  const [billingAddress, setBillingAddress] = useState(mockAddresses[0]?.id || '');
  const [sameAsShipping, setSameAsShipping] = useState(true);
  const [paymentMethod, setPaymentMethod] = useState(mockPaymentMethods[0]?.id || '');
  const [shippingMethod, setShippingMethod] = useState('standard');
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [orderId, setOrderId] = useState('');
  
  useEffect(function() {
    document.title = 'ElevateMart - Checkout';
    
    // If cart is empty, redirect to cart page
    if (cartItems.length === 0 && !orderPlaced) {
      window.location.href = '/cart';
    }
  }, [cartItems, orderPlaced]);
  
  useEffect(function() {
    if (sameAsShipping) {
      setBillingAddress(shippingAddress);
    }
  }, [sameAsShipping, shippingAddress]);
  
  const subtotal = cartTotal;
  const shipping = shippingMethod === 'express' ? 15 : (subtotal > 50 ? 0 : 5);
  const tax = subtotal * 0.08;
  const total = subtotal + shipping + tax;
  
  const handlePlaceOrder = function() {
    // In a real app, this would send the order to a backend
    const newOrderId = 'ORD-' + Math.floor(100000 + Math.random() * 900000);
    setOrderId(newOrderId);
    setOrderPlaced(true);
    clearCart();
  };
  
  if (orderPlaced) {
    return (
      <div className="bg-light min-vh-100 py-5">
        <div className="container px-4">
          <div className="card mx-auto p-5" style={{ maxWidth: '600px' }}>
            <div className="text-center">
              <div className="d-inline-flex align-items-center justify-content-center rounded-circle bg-success bg-opacity-10 text-success mb-4" style={{ width: '64px', height: '64px' }}>
                <FontAwesomeIcon icon={faCheck} size="2x" />
              </div>
              
              <h1 className="h2 mb-3">Order Placed Successfully!</h1>
              <p className="lead text-muted mb-4">
                Thank you for your purchase. Your order number is <span className="fw-bold">{orderId}</span>.
              </p>
              
              <p className="text-muted mb-4">
                We've sent a confirmation email with all the details to your email address.
              </p>
              
              <div className="d-flex flex-column flex-sm-row justify-content-center gap-3">
                <Link 
                  to="/order-tracking" 
                  className="btn btn-primary"
                >
                  Track Your Order
                </Link>
                
                <Link 
                  to="/" 
                  className="btn btn-outline-secondary"
                >
                  Continue Shopping
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  return (
    <div className="bg-light min-vh-100">
      <div className="container px-4 py-4">
        <div className="mb-4">
          <Link to="/cart" className="text-decoration-none text-primary d-inline-flex align-items-center">
            <FontAwesomeIcon icon={faChevronLeft} className="me-2" />
            Back to Cart
          </Link>
        </div>
        
        <div className="row g-4">
          {/* Main Checkout Flow */}
          <div className="col-lg-8">
            <div className="card mb-4">
              {/* Steps Indicator */}
              <div className="card-header bg-white p-0">
                <ul className="nav nav-tabs nav-justified border-bottom-0">
                  <li className="nav-item">
                    <button
                      onClick={function() { return setActiveStep(1); }}
                      className={"nav-link" + (activeStep === 1 ? " active" : "")}
                    >
                      1. Shipping
                    </button>
                  </li>
                  <li className="nav-item">
                    <button
                      onClick={function() { return cartItems.length > 0 && setActiveStep(2); }}
                      className={"nav-link" + (activeStep === 2 ? " active" : "") + (cartItems.length === 0 ? " disabled" : "")}
                    >
                      2. Payment
                    </button>
                  </li>
                  <li className="nav-item">
                    <button
                      onClick={function() { return cartItems.length > 0 && setActiveStep(3); }}
                      className={"nav-link" + (activeStep === 3 ? " active" : "") + (cartItems.length === 0 ? " disabled" : "")}
                    >
                      3. Review
                    </button>
                  </li>
                </ul>
              </div>
              
              {/* Step Content */}
              <div className="card-body">
                {/* Step 1: Shipping */}
                {activeStep === 1 && (
                  <div>
                    <h2 className="h4 mb-4">Shipping Information</h2>
                    
                    {/* Shipping Address */}
                    <div className="mb-4">
                      <div className="d-flex justify-content-between align-items-center mb-3">
                        <h3 className="h5 mb-0 d-flex align-items-center">
                          <FontAwesomeIcon icon={faHome} className="me-2 text-primary" />
                          Shipping Address
                        </h3>
                        <Link to="/account/addresses" className="text-decoration-none small">
                          Add New Address
                        </Link>
                      </div>
                      
                      <div className="row g-3">
                        {mockAddresses.map(function(address) {
                          return (
                            <div key={address.id} className="col-12">
                              <div className="form-check">
                                <input
                                  type="radio"
                                  name="shipping-address"
                                  id={"shipping-" + address.id}
                                  checked={shippingAddress === address.id}
                                  onChange={function() { return setShippingAddress(address.id); }}
                                  className="form-check-input"
                                />
                                <label htmlFor={"shipping-" + address.id} className="form-check-label w-100 ms-2">
                                  <div className="card card-body">
                                    <p className="fw-bold mb-1">{address.fullName}</p>
                                    <p className="mb-1">{address.addressLine1}</p>
                                    <p className="mb-1">
                                      {address.city}, {address.state} {address.zipCode}
                                    </p>
                                    <p className="mb-1">{address.country}</p>
                                    <p className="mb-0">{address.phone}</p>
                                    {address.isDefault && (
                                      <span className="badge bg-light text-dark mt-2 align-self-start">
                                        Default Address
                                      </span>
                                    )}
                                  </div>
                                </label>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                    
                    {/* Shipping Method */}
                    <div className="mb-4">
                      <div className="d-flex align-items-center mb-3">
                        <FontAwesomeIcon icon={faTruck} className="me-2 text-primary" />
                        <h3 className="h5 mb-0">Shipping Method</h3>
                      </div>
                      
                      <div className="row g-3">
                        <div className="col-12">
                          <div className="form-check">
                            <input
                              type="radio"
                              name="shipping-method"
                              id="standard-shipping"
                              checked={shippingMethod === 'standard'}
                              onChange={function() { return setShippingMethod('standard'); }}
                              className="form-check-input"
                            />
                            <label htmlFor="standard-shipping" className="form-check-label w-100 ms-2">
                              <div className="card card-body">
                                <div className="d-flex justify-content-between">
                                  <p className="fw-bold mb-1">Standard Shipping</p>
                                  <p className="fw-bold mb-1">{subtotal > 50 ? 'Free' : '$5.00'}</p>
                                </div>
                                <p className="text-muted small mb-0">Delivery in 3-5 business days</p>
                              </div>
                            </label>
                          </div>
                        </div>
                        
                        <div className="col-12">
                          <div className="form-check">
                            <input
                              type="radio"
                              name="shipping-method"
                              id="express-shipping"
                              checked={shippingMethod === 'express'}
                              onChange={function() { return setShippingMethod('express'); }}
                              className="form-check-input"
                            />
                            <label htmlFor="express-shipping" className="form-check-label w-100 ms-2">
                              <div className="card card-body">
                                <div className="d-flex justify-content-between">
                                  <p className="fw-bold mb-1">Express Shipping</p>
                                  <p className="fw-bold mb-1">$15.00</p>
                                </div>
                                <p className="text-muted small mb-0">Delivery in 1-2 business days</p>
                              </div>
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="text-end">
                      <button
                        onClick={function() { return setActiveStep(2); }}
                        disabled={!shippingAddress}
                        className="btn btn-primary px-4"
                      >
                        Continue to Payment
                      </button>
                    </div>
                  </div>
                )}
                
                {/* Step 2: Payment */}
                {activeStep === 2 && (
                  <div>
                    <h2 className="h4 mb-4">Payment Information</h2>
                    
                    {/* Billing Address */}
                    <div className="mb-4">
                      <div className="form-check mb-3">
                        <input
                          type="checkbox"
                          id="same-as-shipping"
                          checked={sameAsShipping}
                          onChange={function() { return setSameAsShipping(!sameAsShipping); }}
                          className="form-check-input"
                        />
                        <label htmlFor="same-as-shipping" className="form-check-label">
                          Billing address same as shipping address
                        </label>
                      </div>
                      
                      {!sameAsShipping && (
                        <div className="row g-3 mt-2">
                          {mockAddresses.map(function(address) {
                            return (
                              <div key={address.id} className="col-12">
                                <div className="form-check">
                                  <input
                                    type="radio"
                                    name="billing-address"
                                    id={"billing-" + address.id}
                                    checked={billingAddress === address.id}
                                    onChange={function() { return setBillingAddress(address.id); }}
                                    className="form-check-input"
                                  />
                                  <label htmlFor={"billing-" + address.id} className="form-check-label w-100 ms-2">
                                    <div className="card card-body">
                                      <p className="fw-bold mb-1">{address.fullName}</p>
                                      <p className="mb-1">{address.addressLine1}</p>
                                      <p className="mb-1">
                                        {address.city}, {address.state} {address.zipCode}
                                      </p>
                                      <p className="mb-0">{address.country}</p>
                                    </div>
                                  </label>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      )}
                    </div>
                    
                    {/* Payment Method */}
                    <div className="mb-4">
                      <div className="d-flex justify-content-between align-items-center mb-3">
                        <h3 className="h5 mb-0 d-flex align-items-center">
                          <FontAwesomeIcon icon={faCreditCard} className="me-2 text-primary" />
                          Payment Method
                        </h3>
                        <Link to="/account/payment-methods" className="text-decoration-none small">
                          Add New Card
                        </Link>
                      </div>
                      
                      <div className="row g-3">
                        {mockPaymentMethods.map(function(method) {
                          return (
                            <div key={method.id} className="col-12">
                              <div className="form-check">
                                <input
                                  type="radio"
                                  name="payment-method"
                                  id={"payment-" + method.id}
                                  checked={paymentMethod === method.id}
                                  onChange={function() { return setPaymentMethod(method.id); }}
                                  className="form-check-input"
                                />
                                <label htmlFor={"payment-" + method.id} className="form-check-label w-100 ms-2">
                                  <div className="card card-body">
                                    <p className="fw-bold mb-1">{method.cardNumber}</p>
                                    <p className="text-muted small mb-1">
                                      {method.cardholderName} | Expires: {method.expiryDate}
                                    </p>
                                    {method.isDefault && (
                                      <span className="badge bg-light text-dark mt-1 align-self-start">
                                        Default Card
                                      </span>
                                    )}
                                  </div>
                                </label>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                    
                    <div className="d-flex justify-content-between">
                      <button
                        onClick={function() { return setActiveStep(1); }}
                        className="btn btn-outline-secondary"
                      >
                        Back
                      </button>
                      
                      <button
                        onClick={function() { return setActiveStep(3); }}
                        disabled={!paymentMethod || (!sameAsShipping && !billingAddress)}
                        className="btn btn-primary px-4"
                      >
                        Review Order
                      </button>
                    </div>
                  </div>
                )}
                
                {/* Step 3: Review */}
                {activeStep === 3 && (
                  <div>
                    <h2 className="h4 mb-4">Review Your Order</h2>
                    
                    {/* Order Items */}
                    <div className="mb-4">
                      <h3 className="h5 mb-3">Items</h3>
                      
                      <ul className="list-group list-group-flush mb-4">
                        {cartItems.map(function({ product, quantity }) {
                          return (
                            <li key={product.id} className="list-group-item py-3 d-flex">
                              <div className="flex-shrink-0 me-3" style={{ width: '60px', height: '60px' }}>
                                <img 
                                  src={product.images[0]} 
                                  alt={product.name}
                                  className="img-fluid h-100 w-100 object-fit-contain bg-light"
                                />
                              </div>
                              
                              <div className="flex-grow-1">
                                <h4 className="h6 mb-1">{product.name}</h4>
                                <p className="text-muted small mb-0">Qty: {quantity}</p>
                              </div>
                              
                              <div className="flex-shrink-0">
                                <p className="fw-bold">${(product.price * quantity).toFixed(2)}</p>
                              </div>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                    
                    {/* Shipping & Payment Summary */}
                    <div className="row g-4 mb-4">
                      <div className="col-md-6">
                        <h3 className="h5 mb-3">Shipping</h3>
                        <div className="card card-body bg-light">
                          {mockAddresses.map(function(address) {
                            if (address.id === shippingAddress) {
                              return (
                                <div key={address.id}>
                                  <p className="fw-bold mb-1">{address.fullName}</p>
                                  <p className="mb-1">{address.addressLine1}</p>
                                  <p className="mb-1">
                                    {address.city}, {address.state} {address.zipCode}
                                  </p>
                                  <p className="mb-1">{address.country}</p>
                                  <p className="mb-3">{address.phone}</p>
                                  <div className="border-top pt-3">
                                    <p className="fw-bold mb-1">
                                      {shippingMethod === 'standard' ? 'Standard Shipping' : 'Express Shipping'}
                                    </p>
                                    <p className="text-muted small mb-0">
                                      {shippingMethod === 'standard' 
                                        ? 'Delivery in 3-5 business days' 
                                        : 'Delivery in 1-2 business days'}
                                    </p>
                                  </div>
                                </div>
                              );
                            }
                            return null;
                          })}
                        </div>
                      </div>
                      
                      <div className="col-md-6">
                        <h3 className="h5 mb-3">Payment</h3>
                        <div className="card card-body bg-light">
                          {mockPaymentMethods.map(function(method) {
                            if (method.id === paymentMethod) {
                              return (
                                <div key={method.id}>
                                  <p className="fw-bold mb-1">{method.cardNumber}</p>
                                  <p className="text-muted small mb-3">
                                    {method.cardholderName} | Expires: {method.expiryDate}
                                  </p>
                                  <div className="border-top pt-3">
                                    <p className="fw-bold mb-1">Billing Address</p>
                                    {mockAddresses.map(function(address) {
                                      if (address.id === billingAddress) {
                                        return (
                                          <div key={address.id} className="text-muted small">
                                            <p className="mb-1">{address.fullName}</p>
                                            <p className="mb-1">{address.addressLine1}</p>
                                            <p className="mb-0">
                                              {address.city}, {address.state} {address.zipCode}
                                            </p>
                                          </div>
                                        );
                                      }
                                      return null;
                                    })}
                                  </div>
                                </div>
                              );
                            }
                            return null;
                          })}
                        </div>
                      </div>
                    </div>
                    
                    <div className="d-flex justify-content-between">
                      <button
                        onClick={function() { return setActiveStep(2); }}
                        className="btn btn-outline-secondary"
                      >
                        Back
                      </button>
                      
                      <button
                        onClick={handlePlaceOrder}
                        className="btn btn-primary px-4"
                      >
                        Place Order
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
          
          {/* Order Summary */}
          <div className="col-lg-4">
            <div className="card sticky-top" style={{ top: '20px' }}>
              <div className="card-body">
                <h2 className="h4 mb-4">Order Summary</h2>
                
                <ul className="list-group list-group-flush mb-4">
                  <li className="list-group-item d-flex justify-content-between">
                    <span>Subtotal ({cartItems.reduce(function(acc, item) { return acc + item.quantity; }, 0)} items)</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between">
                    <span>Shipping</span>
                    <span>{shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}</span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between">
                    <span>Tax</span>
                    <span>${tax.toFixed(2)}</span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between fw-bold">
                    <span>Order Total</span>
                    <span>${total.toFixed(2)}</span>
                  </li>
                </ul>
                
                <div className="small text-muted">
                  <p className="mb-2">
                    By placing your order, you agree to our Terms of Service and Privacy Policy.
                  </p>
                  <p className="mb-0">
                    For questions about your order, please contact our customer service team.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;