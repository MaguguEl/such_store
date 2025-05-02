import React from 'react';

const ProductTabs = ({ description }) => {
  return (
    <div className="card mb-4">
      <div className="card-body">
        <h3 className="card-title">Product Details</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default ProductTabs;