import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ProductInfo = ({ product }) => {
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (value) => {
    const newQuantity = quantity + value;
    if (newQuantity >= 1 && newQuantity <= 10) {
      setQuantity(newQuantity);
    }
  };

  const handleAddToCart = () => {
    console.log(`Added ${quantity} ${product.name} to cart`);
    // Add your cart logic here
  };

  return (
    <section>
      <div className="mb-2 d-flex gap-2 align-items-center">
        {product.isNew && <span className="badge bg-danger">NEW</span>}
        {product.isOrganic && (
          <span className="badge bg-success">
            <FontAwesomeIcon icon="leaf" className="me-1" /> ORGANIC
          </span>
        )}
      </div>
      
      <h1 className="fw-bold mb-2">{product.name}</h1>
      
      <div className="d-flex align-items-center gap-4 text-warning mb-3">
        {[...Array(5)].map((_, i) => (
          <FontAwesomeIcon 
            key={i} 
            icon={i < product.rating ? "star" : ["far", "star"]}
          />
        ))}
        <span className="text-secondary">SKU: {product.sku}</span>
      </div>
      
      <p className="text-secondary mb-4">{product.description}</p>
      
      <div className="d-flex align-items-center gap-3 mb-4">
        <span className="price-current fs-4 fw-bold">${product.price}</span>
        {product.oldPrice && (
          <span className="text-decoration-line-through text-secondary">${product.oldPrice}</span>
        )}
      </div>
      
      {/* Quantity Selector */}
      <div className="d-flex align-items-center gap-3 mb-4">
        <div className="input-group quantity-selector" style={{ width: '140px' }}>
          <button 
            className="btn btn-outline-secondary" 
            type="button"
            onClick={() => handleQuantityChange(-1)}
            disabled={quantity <= 1}
          >
            <FontAwesomeIcon icon="minus" />
          </button>
          <input 
            type="text" 
            className="form-control text-center" 
            value={quantity} 
            readOnly
          />
          <button 
            className="btn btn-outline-secondary" 
            type="button"
            onClick={() => handleQuantityChange(1)}
            disabled={quantity >= 10}
          >
            <FontAwesomeIcon icon="plus" />
          </button>
        </div>
        
        <button 
          className="btn btn-primary flex-grow-1 py-2"
          onClick={handleAddToCart}
        >
          <FontAwesomeIcon icon="shopping-cart" className="me-2" />
          Add to Cart
        </button>
      </div>
      
      {/* WhatsApp Button */}
      <button className="btn btn-success w-100 py-2 mb-4">
        <FontAwesomeIcon icon={["fab", "whatsapp"]} className="me-2" />
        Order on WhatsApp
      </button>
    </section>
  );
};

export default ProductInfo;