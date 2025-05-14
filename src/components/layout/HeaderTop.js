import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUser,
  faHeart,
  faShoppingCart,
  faThLarge,
  faSearch,
  faFire,
  faGasPump,
  faTools,
  faShieldAlt,
  faIndustry,
  faBars
} from '@fortawesome/free-solid-svg-icons';
import { useCart } from '../../contexts/CartContext';
import { useWishlist } from '../../contexts/WishlistContext';

const HeaderTop = ({ toggleMobileMenu }) => {
  const [isCategoryDropdownOpen, setIsCategoryDropdownOpen] = useState(false);
  const { cartItems } = useCart();
  const { wishlistItems } = useWishlist();

  return (
    <header className="border-bottom bg-white">
      <div className="container-xl py-3 d-flex justify-content-between align-items-center">
        {/* Mobile Menu Toggle (hidden on desktop) */}
        <button 
          className="btn d-md-none me-3" 
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          <FontAwesomeIcon icon={faBars} size="lg" />
        </button>

        {/* Logo + Categories */}
        <div className="d-flex align-items-center gap-4">
          <Link to="/" className="d-flex align-items-center">
            <img
              src="/assets/images/logo.png" 
              alt="GasEnergyPro logo"
              height="40"
              width="40"
            />
          </Link>

          {/* Categories Dropdown (hidden on mobile) */}
          <div className="dropdown d-none d-md-block">
            <button
              type="button"
              className="btn btn-link text-secondary d-flex align-items-center gap-1 p-0 fw-semibold text-decoration-none"
              onClick={() => setIsCategoryDropdownOpen(!isCategoryDropdownOpen)}
              aria-expanded={isCategoryDropdownOpen}
            >
              <FontAwesomeIcon icon={faThLarge} className="fs-5" /> Categories
            </button>

            {isCategoryDropdownOpen && (
              <ul className="dropdown-menu show mt-2 shadow-sm">
                <li><Link className="dropdown-item" to="/shop?category=regulators"><FontAwesomeIcon icon={faTools} className="me-2" /> Gas Regulators</Link></li>
                <li><Link className="dropdown-item" to="/shop?category=hoses"><FontAwesomeIcon icon={faGasPump} className="me-2" /> Gas Hoses & Tubings</Link></li>
                <li><Link className="dropdown-item" to="/shop?category=valves"><FontAwesomeIcon icon={faShieldAlt} className="me-2" /> Gas Valves</Link></li>
                <li><Link className="dropdown-item" to="/shop?category=burners"><FontAwesomeIcon icon={faFire} className="me-2" /> Gas Burners & Nozzles</Link></li>
                <li><Link className="dropdown-item" to="/shop?category=industrial"><FontAwesomeIcon icon={faIndustry} className="me-2" /> Industrial Gas Equipment</Link></li>
              </ul>
            )}
          </div>
        </div>

        {/* Search */}
        <form role="search" className="flex-grow-1 mx-4 d-none d-md-block">
          <div className="position-relative">
            <input
              type="search"
              placeholder="Search gas regulators, hoses, burners..."
              className="form-control"
            />
            <button type="submit" className="btn position-absolute top-0 end-0 h-100 px-3">
              <FontAwesomeIcon icon={faSearch} />
            </button>
          </div>
        </form>

        {/* User Icons */}
        <div className="d-flex align-items-center gap-4 text-secondary">
          <Link to="/login" className="text-decoration-none text-secondary d-flex align-items-center gap-1">
            <FontAwesomeIcon icon={faUser} className="d-none d-md-inline" /> 
            <span className="d-none d-md-inline">Sign In</span>
          </Link>
          
          {/* Wishlist with Badge */}
          <Link to="/wishlist" className="text-decoration-none text-secondary position-relative">
            <FontAwesomeIcon icon={faHeart} />
            {wishlistItems.length > 0 && (
              <span 
                className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
                style={{ fontSize: '0.6rem', padding: '0.25rem 0.35rem' }}
              >
                {wishlistItems.length}
              </span>
            )}
          </Link>
          
          {/* Cart with Badge */}
          <Link to="/cart" className="text-decoration-none text-secondary position-relative">
            <FontAwesomeIcon icon={faShoppingCart} />
            {cartItems.length > 0 && (
              <span 
                className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-primary"
                style={{ fontSize: '0.6rem', padding: '0.25rem 0.35rem' }}
              >
                {cartItems.reduce((total, item) => total + item.quantity, 0)}
              </span>
            )}
          </Link>
        </div>
      </div>

      {/* Navigation Bar (hidden on mobile) */}
      <nav className="border-top bg-light d-none d-md-block">
        <div className="container-xl d-flex justify-content-center py-2 gap-4 fw-semibold text-secondary">
          <Link to="/" className="text-decoration-none text-secondary">Home</Link>
          <Link to="/shop" className="text-decoration-none text-secondary">Shop</Link>
          <Link to="/categories" className="text-decoration-none text-secondary">Gas Accessories</Link>
          <Link to="/deals" className="text-decoration-none text-secondary">Best Deals</Link>
          <Link to="/safety" className="text-decoration-none text-secondary">Safety Guides</Link>
        </div>
      </nav>
    </header>
  );
};

export default HeaderTop;