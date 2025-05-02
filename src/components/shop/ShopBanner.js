import React from 'react';

const ShopBanner = () => {
  return (
    <div className="position-relative rounded overflow-hidden mb-4" style={{ height: '180px' }}>
      <img src="https://storage.googleapis.com/a1aa/image/bcb08aa5-b5b8-4ff6-1ae5-d5b695d59cf6.jpg" 
        alt="Shop banner" className="w-100 h-100 object-fit-cover" />
      <div className="position-absolute top-0 start-0 p-3 text-white">
        <h2>Grocery store with different treasures</h2>
        <p>We have prepared special discounts for you...</p>
        <button className="btn btn-primary">Shop Now</button>
      </div>
    </div>
  );
};

export default ShopBanner;