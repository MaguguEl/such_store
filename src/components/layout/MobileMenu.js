import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHome,
  faShoppingBag,
  faClock,
  faUserCircle,
  faHeart,
  faShoppingCart,
  faFire,
  faGasPump,
  faTools,
  faShieldAlt,
  faIndustry
} from '@fortawesome/free-solid-svg-icons';
import { useCart } from '../../contexts/CartContext';
import { useWishlist } from '../../contexts/WishlistContext';

const MobileMenu = ({ isOpen, toggleMenu }) => {
  const { cartItems } = useCart();
  const { wishlistItems } = useWishlist();
  
  if (!isOpen) return null;

  return (
    <div className="d-md-none bg-white border-top p-3">
      <div className="list-group">
        <Link to="/" className="list-group-item list-group-item-action" onClick={toggleMenu}>
          <FontAwesomeIcon icon={faHome} className="me-2 text-primary" /> Home
        </Link>
        <Link to="/shop" className="list-group-item list-group-item-action" onClick={toggleMenu}>
          <FontAwesomeIcon icon={faShoppingBag} className="me-2 text-primary" /> Shop All
        </Link>

        <div className="border-top pt-3">
          <small className="text-muted mb-2 d-block">Categories</small>
          <Link to="/shop?category=regulators" className="list-group-item list-group-item-action" onClick={toggleMenu}>
            <FontAwesomeIcon icon={faTools} className="me-2 text-primary" /> Gas Regulators
          </Link>
          <Link to="/shop?category=hoses" className="list-group-item list-group-item-action" onClick={toggleMenu}>
            <FontAwesomeIcon icon={faGasPump} className="me-2 text-primary" /> Gas Hoses & Tubings
          </Link>
          <Link to="/shop?category=valves" className="list-group-item list-group-item-action" onClick={toggleMenu}>
            <FontAwesomeIcon icon={faShieldAlt} className="me-2 text-primary" /> Gas Valves
          </Link>
          <Link to="/shop?category=burners" className="list-group-item list-group-item-action" onClick={toggleMenu}>
            <FontAwesomeIcon icon={faFire} className="me-2 text-primary" /> Gas Burners & Nozzles
          </Link>
          <Link to="/shop?category=industrial" className="list-group-item list-group-item-action" onClick={toggleMenu}>
            <FontAwesomeIcon icon={faIndustry} className="me-2 text-primary" /> Industrial Gas Equipment
          </Link>
        </div>

        <div className="border-top pt-3">
          <small className="text-muted mb-2 d-block">My Account</small>
          <Link to="/wishlist" className="list-group-item list-group-item-action position-relative" onClick={toggleMenu}>
            <FontAwesomeIcon icon={faHeart} className="me-2 text-primary" /> Wishlist
            {wishlistItems.length > 0 && (
              <span 
                className="position-absolute end-0 top-50 translate-middle-y badge rounded-pill bg-danger me-3"
                style={{ fontSize: '0.65rem', padding: '0.25rem 0.4rem' }}
              >
                {wishlistItems.length}
              </span>
            )}
          </Link>
          <Link to="/cart" className="list-group-item list-group-item-action position-relative" onClick={toggleMenu}>
            <FontAwesomeIcon icon={faShoppingCart} className="me-2 text-primary" /> Cart
            {cartItems.length > 0 && (
              <span 
                className="position-absolute end-0 top-50 translate-middle-y badge rounded-pill bg-primary me-3"
                style={{ fontSize: '0.65rem', padding: '0.25rem 0.4rem' }}
              >
                {cartItems.reduce((total, item) => total + item.quantity, 0)}
              </span>
            )}
          </Link>
          <Link to="/order-tracking" className="list-group-item list-group-item-action" onClick={toggleMenu}>
            <FontAwesomeIcon icon={faClock} className="me-2 text-primary" /> Order Tracking
          </Link>
          <Link to="/profile" className="list-group-item list-group-item-action" onClick={toggleMenu}>
            <FontAwesomeIcon icon={faUserCircle} className="me-2 text-primary" /> Profile
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;