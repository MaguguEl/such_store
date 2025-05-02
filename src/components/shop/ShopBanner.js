import React from 'react';
import { Link } from 'react-router-dom';

const ShopBanner = () => {
  return (
    <div className="position-relative rounded overflow-hidden mb-4" style={{ height: '180px' }}>
      <img 
        src="https://storage.googleapis.com/a1aa/image/bcb08aa5-b5b8-4ff6-1ae5-d5b695d59cf6.jpg" 
        alt="Grocery store banner" 
        className="w-100 h-100 object-fit-cover" 
      />
      <div className="position-absolute top-0 start-0 p-3 text-white">
        <h2 className="h4">Grocery store with different treasures</h2>
        <p className="small">We have prepared special discounts for you on grocery products...</p>
        <Link to="/shop" className="btn btn-sm btn-primary">
          Shop Now <i className="fas fa-arrow-right ms-1"></i>
        </Link>
      </div>
    </div>
  );
};

export default ShopBanner;