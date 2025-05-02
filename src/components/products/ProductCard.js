import React from 'react';

const ProductCard = ({ product, isNew = false }) => {
  return (
    <div className="position-relative border rounded-3 p-2 bg-white">
      {isNew && <div className="product-badge">New</div>}
      <img 
        src={product.image} 
        alt={product.name} 
        className="img-fluid rounded-3" 
        style={{ height: '160px', objectFit: 'contain' }} 
      />
      <h3 className="mt-2 fw-semibold fs-6">{product.name}</h3>
      <p className="text-success fw-semibold small mb-1">In Stock</p>
      <p className="text-purple fw-bold fs-5 mb-0">${product.price}</p>
    </div>
  );
};

export default ProductCard;