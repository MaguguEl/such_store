import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as fasHeart, faShoppingCart, faStar as fasStar } from '@fortawesome/free-solid-svg-icons';
import { faHeart as farHeart, faStar as farStar } from '@fortawesome/free-regular-svg-icons';
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
    e.stopPropagation();
    if (isInWishlist(id)) {
      removeFromWishlist(id);
    } else {
      addToWishlist(product);
    }
  };

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, 1);
  };

  return (
    <article className="product-card position-relative d-flex flex-column" style={{
      border: '1px solid #e0e0e0',
      borderRadius: '8px',
      transition: 'box-shadow 0.3s ease',
    }}>
      <div style={{ padding: '1rem', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
        <button
          className="wishlist-btn position-absolute top-0 end-0 bg-transparent border-0 p-2"
          onClick={handleWishlistToggle}
          aria-label={isInWishlist(id) ? "Remove from wishlist" : "Add to wishlist"}
          style={{
            zIndex: 2,
            right: '0.5rem',
            top: '0.5rem',
            backgroundColor: 'rgba(255, 255, 255, 0.7)',
            borderRadius: '4px',
            padding: '0.4rem',
          }}
        >
          <FontAwesomeIcon
            icon={isInWishlist(id) ? fasHeart : farHeart}
            className={isInWishlist(id) ? "text-danger" : ""}
          />
        </button>

        <Link to={`/product/${id}`} className="text-decoration-none d-flex flex-column flex-grow-1">
          <div className="product-image-container mb-2" style={{ // Reduced marginBottom slightly
            width: '100%',
            height: '180px',
            overflow: 'hidden',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
            <img
              src={images && images.length > 0 ? images[0] : 'https://via.placeholder.com/300x180?text=No+Image'} // Fallback image
              alt={name}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'contain'
              }}
            />
          </div>

          <h3
            className="product-title h6 mb-1 text-dark" // Changed to h6 and reduced marginBottom
            style={{
              height: '2.2em', // Slightly reduced height
              lineHeight: '1.1em', // Slightly reduced lineHeight
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              display: '-webkit-box',
              WebkitLineClamp: 2,
              WebkitBoxOrient: 'vertical',
              fontSize: '1rem' // Slightly smaller font size
            }}
          >
            {name}
          </h3>
          <div className="d-flex align-items-center mb-1"> {/* Reduced marginBottom */}
            {[...Array(5)].map((_, i) => (
              <span
                key={i}
                className={i < Math.floor(rating) ? 'text-warning' : 'text-secondary'}
              >
                <FontAwesomeIcon
                  icon={i < rating ? fasStar : farStar}
                  size="xs"
                />
              </span>
            ))}
            <span className="text-muted small ms-1">({reviews || 0})</span>
          </div>

          <div className="price-container mt-auto" style={{ minHeight: '3em' }}> {/* Reduced minHeight */}
            {oldPrice && (
              <p className="price-old mb-0 text-muted small text-decoration-line-through">
                MWK{Number(oldPrice).toFixed(2)}
              </p>
            )}
            <p className={`price-new ${isOrganic ? 'text-success' : 'text-primary'} fw-bold mb-0`}>
              MWK{Number(price).toFixed(2)}
            </p>
          </div>
        </Link>
      </div>
      <div style={{ padding: '0 1rem 1rem 1rem' }}>
        <button
          className="btn-cart w-100 btn btn-sm btn-outline-primary d-flex align-items-center justify-content-center gap-1"
          onClick={handleAddToCart}
          disabled={!inStock}
          style={{ marginTop: '0.5rem', fontSize: '0.85rem' }} // Reduced marginTop and fontSize
        >
          <FontAwesomeIcon icon={faShoppingCart} size="sm" /> {/* Made the icon smaller */}
          {inStock ? 'Add To Cart' : 'Out of Stock'}
        </button>
      </div>
    </article>
  );
};

export default ProductCard;