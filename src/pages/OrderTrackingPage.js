import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBox, faTruck, faCheckCircle, faClock, faSearch } from '@fortawesome/free-solid-svg-icons';

// Mock order for demo (Malawi context)
const mockOrder = {
  id: 'ORD-MW-20250505',
  status: 'shipped',
  createdAt: '2025-05-05T12:00:00',
  estimatedDelivery: '2025-05-10',
  trackingNumber: 'MW-TRK-987654321',
  carrier: 'Malawi Posts Corporation',
  items: [
    {
      id: '6',
      name: 'Cadac Stealth 3 Burner Gas Braai',
      price: 34999, // MWK
      quantity: 1,
      image: 'https://m.media-amazon.com/images/I/41OPxg62ilL._AC_.jpg'
    },
    {
      id: '4',
      name: 'Commercial Gas Stove 2-Burner',
      price: 89999, // MWK
      quantity: 1,
      image: 'https://m.media-amazon.com/images/I/61kEHtY061L._AC_SL1500_.jpg'
    }
  ],
  timeline: [
    {
      status: 'ordered',
      date: '2025-05-05T12:00:00',
      description: 'Order placed on the SacredStore platform'
    },
    {
      status: 'processing',
      date: '2025-05-06T09:30:00',
      description: 'Payment confirmed and preparing for dispatch'
    },
    {
      status: 'shipped',
      date: '2025-05-07T14:15:00',
      description: 'Shipped via Malawi Posts Corporation'
    }
  ],
  shippingAddress: {
    fullName: 'Chikondi Phiri',
    addressLine1: 'House No. 12, Area 49',
    city: 'Lilongwe',
    district: 'Lilongwe',
    postalCode: '265',
    country: 'Malawi'
  }
};

const OrderTrackingPage = () => {
  const [trackingId, setTrackingId] = useState('');
  const [order, setOrder] = useState(null);
  const [loading, setLoading] = useState(false);
  
  useEffect(function() {
    document.title = 'SacredEnergies- Track Your Order';
  }, []);
  
  const handleSubmit = function(e) {
    e.preventDefault();
    if (!trackingId.trim()) return;
    
    setLoading(true);
    // Simulate API call
    setTimeout(function() {
      if (trackingId.toLowerCase() === mockOrder.id.toLowerCase() || 
          trackingId.toLowerCase() === mockOrder.trackingNumber.toLowerCase()) {
        setOrder(mockOrder);
      } else {
        setOrder(null);
        alert('Order not found. Please check your order ID or tracking number.');
      }
      setLoading(false);
    }, 1000);
  };
  
  const formatDate = function(dateString) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };
  
  const getStatusColor = function(status) {
    switch (status) {
      case 'ordered':
        return 'text-primary bg-primary bg-opacity-10';
      case 'processing':
        return 'text-warning bg-warning bg-opacity-10';
      case 'shipped':
        return 'text-info bg-info bg-opacity-10';
      case 'delivered':
        return 'text-success bg-success bg-opacity-10';
      default:
        return 'text-secondary bg-secondary bg-opacity-10';
    }
  };
  
  const getStatusIcon = function(status) {
    switch (status) {
      case 'ordered':
        return <FontAwesomeIcon icon={faClock} className="me-1" />;
      case 'processing':
        return <FontAwesomeIcon icon={faBox} className="me-1" />;
      case 'shipped':
        return <FontAwesomeIcon icon={faTruck} className="me-1" />;
      case 'delivered':
        return <FontAwesomeIcon icon={faCheckCircle} className="me-1" />;
      default:
        return <FontAwesomeIcon icon={faClock} className="me-1" />;
    }
  };
  
  return (
    <div className="bg-light min-vh-100 py-5">
      <div className="container px-4">
        <div className="mx-auto" style={{ maxWidth: '800px' }}>
          <h1 className="h2 text-center mb-5">Track Your Order</h1>
          
          <div className="card mb-5">
            <div className="card-body">
              <form onSubmit={handleSubmit} className="row g-3">
                <div className="col-12">
                  <label htmlFor="tracking-id" className="form-label">
                    Enter your Order ID or Tracking Number
                  </label>
                  <div className="input-group">
                    <input
                      id="tracking-id"
                      type="text"
                      value={trackingId}
                      onChange={function(e) { return setTrackingId(e.target.value); }}
                      placeholder="e.g. ORD-MW-20250505 or MW-TRK-987654321"
                      className="form-control"
                    />
                    <span className="input-group-text">
                      <FontAwesomeIcon icon={faSearch} />
                    </span>
                  </div>
                  <div className="form-text">
                    For demo, use: ORD-MW-20250505 or MW-TRK-987654321
                  </div>
                </div>
                
                <div className="col-12">
                  <button
                    type="submit"
                    disabled={loading || !trackingId.trim()}
                    className="btn btn-primary w-100 py-3"
                  >
                    {loading ? 'Searching...' : 'Track Order'}
                  </button>
                </div>
              </form>
            </div>
          </div>
          
          {order && (
            <div className="card">
              {/* Order Header */}
              <div className="card-header">
                <div className="d-flex flex-column flex-md-row justify-content-between mb-3">
                  <div>
                    <h2 className="h3 mb-2">{order.id}</h2>
                    <p className="text-muted mb-0">
                      Placed on {formatDate(order.createdAt)}
                    </p>
                  </div>
                  
                  <div className="mt-3 mt-md-0">
                    <span className={`badge ${getStatusColor(order.status)} d-inline-flex align-items-center`}>
                      {getStatusIcon(order.status)}
                      <span className="ms-1 text-capitalize">{order.status}</span>
                    </span>
                  </div>
                </div>
                
                <div className="row g-3">
                  <div className="col-md-6">
                    <div className="mb-2">
                      <h3 className="small text-muted mb-1">Tracking Number</h3>
                      <p className="mb-0 fw-bold">{order.trackingNumber}</p>
                      <p className="small text-muted mb-0">Carrier: {order.carrier}</p>
                    </div>
                  </div>
                  
                  <div className="col-md-6">
                    <div className="mb-2">
                      <h3 className="small text-muted mb-1">Estimated Delivery</h3>
                      <p className="mb-0 fw-bold">{formatDate(order.estimatedDelivery)}</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Order Timeline */}
              <div className="card-body border-bottom">
                <h3 className="h5 mb-4">Shipping Updates</h3>
                
                <div className="position-relative">
                  <div className="position-absolute top-0 start-0 h-100 d-flex align-items-center">
                    <div className="h-100 border-start border-2 position-absolute" style={{ left: '28px' }}></div>
                  </div>
                  
                  <ul className="list-unstyled ps-4">
                    {order.timeline.map(function(event, index) {
                      return (
                        <li key={index} className="mb-4 position-relative">
                          <div className={`d-flex align-items-center justify-content-center rounded-circle ${getStatusColor(event.status)}`} style={{ width: '56px', height: '56px' }}>
                            {getStatusIcon(event.status)}
                          </div>
                          <div className="ms-4 ps-3">
                            <p className="fw-bold mb-1">{event.description}</p>
                            <p className="small text-muted mb-0">
                              {new Date(event.date).toLocaleString()}
                            </p>
                          </div>
                        </li>
                      );
                    })}
                    
                    {order.status !== 'delivered' && (
                      <li className="mb-0 position-relative opacity-50">
                        <div className="d-flex align-items-center justify-content-center rounded-circle text-success bg-success bg-opacity-10" style={{ width: '56px', height: '56px' }}>
                          <FontAwesomeIcon icon={faCheckCircle} className="me-1" />
                        </div>
                        <div className="ms-4 ps-3">
                          <p className="fw-bold mb-1">Delivered</p>
                          <p className="small text-muted mb-0">Estimated: {formatDate(order.estimatedDelivery)}</p>
                        </div>
                      </li>
                    )}
                  </ul>
                </div>
              </div>
              
              {/* Order Items */}
              <div className="card-body border-bottom">
                <h3 className="h5 mb-4">Order Items</h3>
                
                <ul className="list-group list-group-flush">
                  {order.items.map(function(item) {
                    return (
                      <li key={item.id} className="list-group-item py-3 d-flex">
                        <div className="flex-shrink-0 me-3" style={{ width: '80px', height: '80px' }}>
                          <img 
                            src={item.image} 
                            alt={item.name}
                            className="img-fluid h-100 w-100 object-fit-contain bg-light"
                          />
                        </div>
                        
                        <div className="flex-grow-1">
                          <h4 className="h6 mb-1">{item.name}</h4>
                          <p className="text-muted small mb-0">Qty: {item.quantity}</p>
                        </div>
                        
                        <div className="flex-shrink-0">
                          <p className="fw-bold">MWK{(item.price * item.quantity).toFixed(2)}</p>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </div>
              
              {/* Shipping Address */}
              <div className="card-body">
                <h3 className="h5 mb-4">Shipping Address</h3>
                
                <div className="card card-body bg-light">
                  <p className="fw-bold mb-1">{order.shippingAddress.fullName}</p>
                  <p className="mb-1">{order.shippingAddress.addressLine1}</p>
                  <p className="mb-1">
                    {order.shippingAddress.city}, {order.shippingAddress.state} {order.shippingAddress.zipCode}
                  </p>
                  <p className="mb-0">{order.shippingAddress.country}</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default OrderTrackingPage;