import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as fasHeart, faShoppingCart } from '@fortawesome/free-solid-svg-icons'; 
import { faHeart as farHeart } from '@fortawesome/free-regular-svg-icons'; 
import { useCart } from '../../contexts/CartContext';
import { useWishlist } from '../../contexts/WishlistContext';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();

  if (!product) return null;

  const {
    id,
    name,
    images,
    price,
    oldPrice,
    rating,
    reviews,
    inStock,
    isOrganic
  } = product;

  const handleWishlistToggle = (e) => {
    e.preventDefault();
    if (isInWishlist(id)) {
      removeFromWishlist(id);
    } else {
      addToWishlist(product);
    }
  };

  const handleAddToCart = (e) => {
    e.preventDefault();
    addToCart(product, 1);
  };

  return (
    <article className="product-card position-relative">
      <button 
        className="wishlist-btn position-absolute top-0 start-0 bg-transparent border-0"
        onClick={handleWishlistToggle}
        aria-label={isInWishlist(id) ? "Remove from wishlist" : "Add to wishlist"}
      >
        <FontAwesomeIcon 
          icon={isInWishlist(id) ? fasHeart : farHeart} 
          className={isInWishlist(id) ? "text-danger" : ""}
        />
      </button>

      <Link to={`/product/${id}`} className="text-decoration-none">
        <div className="product-image-container" style={{
          width: '100%',
          height: '180px',
          overflow: 'hidden',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: '0.75rem'
        }}>
          <img
            src={images[0]}
            alt={name}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover' 
            }}
          />
        </div>

        <h3 className="product-title h5 mb-2 text-dark">{name}</h3>

        <div className="d-flex align-items-center mb-2">
          {[...Array(5)].map((_, i) => (
            <span 
              key={i} 
              className={i < Math.floor(rating) ? 'text-warning' : 'text-secondary'}
            >
              <FontAwesomeIcon 
                icon={i < rating ? ['fas', 'star'] : ['far', 'star']} 
                size="xs" 
              />
            </span>
          ))}
          <span className="text-muted small ms-1">({reviews})</span>
        </div>

        {oldPrice && (
          <p className="price-old mb-1 text-muted small text-decoration-line-through">
            ${Number(oldPrice).toFixed(2)}
          </p>
        )}

        <p className={`price-new ${isOrganic ? 'text-success' : 'text-primary'} fw-bold mb-3`}>
          ${Number(price).toFixed(2)}
        </p>
      </Link>

      <button 
        className="btn-cart w-100 btn btn-sm btn-outline-primary d-flex align-items-center justify-content-center gap-1"
        onClick={handleAddToCart}
        disabled={!inStock}
      >
        <FontAwesomeIcon icon={faShoppingCart} /> 
        {inStock ? 'Add To Cart' : 'Out of Stock'}
      </button>
    </article>
  );
};

export default ProductCard;