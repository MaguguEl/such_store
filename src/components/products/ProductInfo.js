import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Heart, ShoppingCart, ChevronLeft, Plus, Minus, Star, StarHalf } from 'lucide-react';

const ProductInfo = ({ product, onAddToCart, onWishlistToggle, isInWishlist }) => {
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (value) => {
    const newQty = Math.max(1, quantity + value);
    setQuantity(newQty);
  };

  return (
    <div className="product-info">
      <div className="mb-4">
        <Link to="/shop" className="text-muted d-flex align-items-center mb-3">
          <ChevronLeft size={16} className="me-1" /> Back to Shop
        </Link>
        
        <h1 className="h2 fw-bold mb-2">{product.name}</h1>
        
        <div className="d-flex align-items-center mb-3">
          <div className="me-2 d-flex">
            {[...Array(5)].map((_, i) => {
              if (i < Math.floor(product.rating)) return <Star key={i} size={16} className="text-warning me-1" />;
              if (i === Math.floor(product.rating) && product.rating % 1 !== 0) return <StarHalf key={i} size={16} className="text-warning me-1" />;
              return <Star key={i} size={16} className="text-muted me-1" />;
            })}
          </div>
          <small className="text-muted">{product.rating} ({product.reviews} reviews)</small>
        </div>
        
        <div className="d-flex align-items-center gap-3 mb-4">
          <span className="h4 text-primary">${product.price.toFixed(2)}</span>
          {product.oldPrice && (
            <span className="text-decoration-line-through text-muted">${product.oldPrice.toFixed(2)}</span>
          )}
        </div>
        
        <p className="mb-4">{product.description}</p>
        
        <div className={`mb-4 ${product.inStock ? 'text-success' : 'text-danger'}`}>
          <span className="me-2">&#9679;</span>
          {product.inStock ? 'In Stock' : 'Out of Stock'}
        </div>
      </div>
      
      {/* Quantity Selector */}
      <div className="mb-4">
        <label className="form-label">Quantity</label>
        <div className="input-group w-auto mb-3">
          <button
            className="btn btn-outline-secondary"
            onClick={() => handleQuantityChange(-1)}
            disabled={quantity <= 1}
          >
            <Minus size={16} />
          </button>
          <input
            type="number"
            className="form-control text-center"
            value={quantity}
            min="1"
            onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
          />
          <button
            className="btn btn-outline-secondary"
            onClick={() => handleQuantityChange(1)}
          >
            <Plus size={16} />
          </button>
        </div>
      </div>
      
      {/* Action Buttons */}
      <div className="d-flex flex-column flex-sm-row gap-3 mb-4">
        <button
          className="btn btn-primary flex-grow-1 d-flex align-items-center justify-content-center"
          onClick={() => onAddToCart(quantity)}
          disabled={!product.inStock}
        >
          <ShoppingCart size={18} className="me-2" />
          Add to Cart
        </button>
        <button
          className={`btn flex-grow-1 d-flex align-items-center justify-content-center ${
            isInWishlist ? 'btn-outline-danger' : 'btn-outline-secondary'
          }`}
          onClick={onWishlistToggle}
        >
          <Heart size={18} className={`me-2 ${isInWishlist ? 'fill-danger' : ''}`} />
          {isInWishlist ? 'In Wishlist' : 'Add to Wishlist'}
        </button>
      </div>
    </div>
  );
};

export default ProductInfo;