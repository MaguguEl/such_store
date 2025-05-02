import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
  return (
    <article className="product-card position-relative">
      {product.discount > 0 && (
        <div className="sale-badge position-absolute top-0 end-0 bg-danger text-white small px-2 py-1">
          {product.discount === 99 ? 'NEW' : `${product.discount}%`}
        </div>
      )}
      
      <button className="wishlist-btn position-absolute top-0 start-0 bg-transparent border-0">
        <i className="far fa-heart"></i>
      </button>
      
      <Link to={`/product/${product.id}`} className="text-decoration-none">
        <img 
          src={product.image} 
          alt={product.name} 
          className="img-fluid w-100 mb-2" 
        />
        
        <h3 className="product-title h6 mb-1 text-dark">{product.name}</h3>
        
        {product.oldPrice && (
          <p className="price-old mb-0 text-muted small text-decoration-line-through">
            ${product.oldPrice.toFixed(2)}
          </p>
        )}
        
        <p className={`price-new ${product.isOrganic ? 'text-success' : 'text-primary'} fw-bold`}>
          ${product.price.toFixed(2)}
        </p>
      </Link>
      
      <button className="btn-cart w-100 btn btn-sm btn-outline-primary d-flex align-items-center justify-content-center gap-1">
        <i className="fas fa-shopping-cart"></i> IN STOCK
      </button>
    </article>
  );
};

export default ProductCard;