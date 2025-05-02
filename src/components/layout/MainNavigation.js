import React from 'react';
import { Link } from 'react-router-dom';

const MainNavigation = () => {
  return (
    <nav className="border-bottom border-secondary-subtle">
      <div className="container d-flex justify-content-between align-items-center py-3">
        <div className="d-flex align-items-center gap-4">
          <Link to="/">
            <img 
              src="https://favpng.com/png_view/logo-cart-ecommerce-logo-png/HEkWxmzz#google_vignette" 
              alt="SacredStore logo" 
              height="40" 
              width="120" 
            />
          </Link>
          <div className="d-none d-md-flex gap-4 fw-semibold text-secondary">
            <Link to="/" className="text-decoration-none text-secondary">Home</Link>
            <Link to="/shop" className="text-decoration-none text-secondary">Shop</Link>
            <Link to="#" className="text-decoration-none text-secondary">Top Categories</Link>
            <Link to="#" className="text-decoration-none text-secondary">Deals</Link>
            <Link to="#" className="text-decoration-none text-secondary">Contact</Link>
          </div>
        </div>
        <div className="d-flex gap-3 text-secondary small">
          <Link to="#" className="d-flex align-items-center gap-1 text-decoration-none text-secondary">
            <i className="fas fa-search"></i> Search
          </Link>
          <Link to="#" className="d-flex align-items-center gap-1 text-decoration-none text-secondary">
            <i className="fas fa-bell"></i> Notifications
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default MainNavigation;