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

const HeaderTop = ({ toggleMobileMenu }) => {
  const [isCategoryDropdownOpen, setIsCategoryDropdownOpen] = useState(false);

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
              {/* <FontAwesomeIcon icon={faChevronDown} className="ms-1" /> */}
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
          <Link to="/wishlist" className="text-decoration-none text-secondary">
            <FontAwesomeIcon icon={faHeart} />
          </Link>
          <Link to="/cart" className="text-decoration-none text-secondary">
            <FontAwesomeIcon icon={faShoppingCart} />
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
          <Link to="/bulk-orders" className="text-decoration-none text-secondary">Bulk Orders</Link>
        </div>
      </nav>
    </header>
  );
};

export default HeaderTop;