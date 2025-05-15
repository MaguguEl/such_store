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
              src={images && images.length > 0 ? images[0] : 'https://via.placeholder.com/300x180?text=No+Image'} // Fallback image
              alt={name}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'contain' // Changed objectFit to 'contain'
              }}
            />
          </div>

          <h3
            className="product-title h5 mb-2 text-dark"
            style={{
              height: '2.5em',
              lineHeight: '1.25em',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              display: '-webkit-box',
              WebkitLineClamp: 2,
              WebkitBoxOrient: 'vertical',
            }}
          >
            {name}
          </h3>
          <div className="d-flex align-items-center mb-2">
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

          <div className="price-container mt-auto" style={{ minHeight: '3.5em'  }}>
            {oldPrice && (
              <p className="price-old mb-0 text-muted small text-decoration-line-through">
                ${Number(oldPrice).toFixed(2)}
              </p>
            )}
            <p className={`price-new ${isOrganic ? 'text-success' : 'text-primary'} fw-bold mb-0`}>
              ${Number(price).toFixed(2)}
            </p>
          </div>
        </Link>
      </div>
      <div style={{ padding: '0 1rem 1rem 1rem' }}>
        <button
          className="btn-cart w-100 btn btn-sm btn-outline-primary d-flex align-items-center justify-content-center gap-1"
          onClick={handleAddToCart}
          disabled={!inStock}
          style={{ marginTop: '0.75rem' }}
        >
          <FontAwesomeIcon icon={faShoppingCart} />
          {inStock ? 'Add To Cart' : 'Out of Stock'}
        </button>
      </div>
    </article>
  );
};

export default ProductCard;