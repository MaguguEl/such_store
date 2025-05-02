import React from 'react';

const ProductInfo = ({ product }) => {
  return (
    <section>
      <div className="mb-2 d-flex gap-2 align-items-center">
        {product.isNew && <span className="badge bg-danger">NEW</span>}
        {product.isOrganic && (
          <span className="badge bg-success">
            <i className="fas fa-leaf me-1"></i> ORGANIC
          </span>
        )}
      </div>
      
      <h1 className="fw-bold mb-2">{product.name}</h1>
      
      <div className="d-flex align-items-center gap-4 text-warning mb-3">
        {[...Array(5)].map((_, i) => (
          <i 
            key={i} 
            className={i < product.rating ? "fas fa-star" : "far fa-star"}
          ></i>
        ))}
        <span className="text-secondary">SKU: {product.sku}</span>
      </div>
      
      <p className="text-secondary mb-4">{product.description}</p>
      
      <div className="d-flex align-items-center gap-3 mb-4">
        <span className="price-current">${product.price}</span>
        <span className="text-decoration-line-through text-secondary">${product.oldPrice}</span>
      </div>
      
      <button className="btn btn-success mb-4">
        Order on WhatsApp
      </button>
      
      {/* Quantity selector and add to cart would go here */}
    </section>
  );
};

export default ProductInfo;