import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const MainNavigation = () => {
  return (
    <nav className="border-bottom border-secondary-subtle">
      <div className="container-xl d-flex justify-content-between align-items-center py-3">
        <div className="d-flex align-items-center gap-4">
          <div className="nav nav-bottom justify-content-start gap-4 fw-semibold text-secondary">
            <Link to="/" className="text-decoration-none text-secondary">Home</Link>
            <Link to="/shop" className="text-decoration-none text-secondary">Shop</Link>
            <Link to="/categories" className="text-decoration-none text-secondary">Top Categories</Link>
            <Link to="*" className="text-decoration-none text-secondary">Deals</Link>
            <Link to="*" className="text-decoration-none text-secondary">Affliates</Link>
          </div>
        </div>
        <div className="d-flex gap-3 text-secondary">
          <Link to="#" className="d-flex align-items-center gap-1 text-decoration-none text-secondary">
              <FontAwesomeIcon icon="user" size="lg" /> Sign In
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default MainNavigation;