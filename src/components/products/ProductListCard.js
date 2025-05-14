import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as fasHeart, faShoppingCart, faStar as fasStar } from '@fortawesome/free-solid-svg-icons';
import { faHeart as farHeart, faStar as farStar } from '@fortawesome/free-regular-svg-icons';
import { useCart } from '../../contexts/CartContext';
import { useWishlist } from '../../contexts/WishlistContext';

const ProductListCard = ({ product }) => {
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
    isOrganic,
    category,
    description,
    discount,
    featured
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
    <div className="card mb-3">
      <div className="row g-0">
        <div className="col-md-3 position-relative">
          <button 
            className="wishlist-btn position-absolute top-0 start-0 bg-transparent border-0 p-2"
            onClick={handleWishlistToggle}
            aria-label={isInWishlist(id) ? "Remove from wishlist" : "Add to wishlist"}
          >
            <FontAwesomeIcon 
              icon={isInWishlist(id) ? fasHeart : farHeart} 
              className={isInWishlist(id) ? "text-danger" : "text-white"}
              size="lg"
            />
          </button>
          <Link to={`/product/${id}`}>
            <img 
              src={images[0]} 
              className="img-fluid rounded-start w-100" 
              alt={name}
              style={{ height: '180px', objectFit: 'cover' }}
            />
          </Link>
        </div>
        <div className="col-md-9">
          <div className="card-body h-100 d-flex flex-column">
            <div className="mb-2">
              <span className="badge bg-primary">{category?.name || category}</span>
              {featured && <span className="badge bg-warning text-dark ms-2">Featured</span>}
              {isOrganic && <span className="badge bg-success ms-2">Organic</span>}
              {!inStock && <span className="badge bg-secondary ms-2">Out of Stock</span>}
            </div>
            
            <Link to={`/product/${id}`} className="text-decoration-none text-dark">
              <h5 className="card-title">{name}</h5>
              <p className="card-text small text-muted">{description}</p>
            </Link>

            <div className="mt-auto">
              <div className="d-flex align-items-center mb-2">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className={i < Math.floor(rating) ? 'text-warning' : 'text-secondary'}>
                    <FontAwesomeIcon icon={i < rating ? fasStar : farStar} size="xs" />
                  </span>
                ))}
                <span className="text-muted small ms-1">({reviews})</span>
              </div>

              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <span className={`fw-bold ${isOrganic ? 'text-success' : 'text-primary'}`}>
                    ${discount > 0 ? (price * (1 - discount / 100)).toFixed(2) : price.toFixed(2)}
                  </span>
                  {(oldPrice || discount > 0) && (
                    <span className="text-decoration-line-through text-muted small ms-2">
                      ${oldPrice ? Number(oldPrice).toFixed(2) : price.toFixed(2)}
                    </span>
                  )}
                </div>
                
                <button 
                  className="btn btn-sm btn-outline-primary d-flex align-items-center gap-1"
                  onClick={handleAddToCart}
                  disabled={!inStock}
                >
                  <FontAwesomeIcon icon={faShoppingCart} />
                  {inStock ? 'Add' : 'Out of Stock'}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductListCard;