import React from 'react';
import { Link } from 'react-router-dom';

const MainNavigation = () => {
  return (
    <nav className="border-bottom border-secondary-subtle">
      <div className="container-xl d-flex justify-content-center align-items-center py-3">
        <div className="nav gap-4 fw-semibold text-secondary">
          <Link to="/" className="text-decoration-none text-secondary">Home</Link>
          <Link to="/shop" className="text-decoration-none text-secondary">Shop</Link>
          <Link to="/categories" className="text-decoration-none text-secondary">Top Categories</Link>
          <Link to="/deals" className="text-decoration-none text-secondary">Deals</Link>
          <Link to="/affliations" className="text-decoration-none text-secondary">Affliates aand Creators</Link>
        </div>
      </div>
    </nav>
  );
};

export default MainNavigation;