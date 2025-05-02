import React from 'react';

const MainNavigation = () => {
  return (
    <nav className="border-bottom border-secondary-subtle">
      <div className="container d-flex justify-content-between align-items-center py-3">
        <div className="d-flex align-items-center gap-4">
          <img 
            src="https://via.placeholder.com/120x40?text=SacredStore" 
            alt="SacredStore logo" 
            height="40" 
            width="120" 
          />
          <div className="d-none d-md-flex gap-4 fw-semibold text-secondary">
            <a href="#" className="text-decoration-none text-secondary">Home</a>
            <a href="#" className="text-decoration-none text-secondary">Shop</a>
            <a href="#" className="text-decoration-none text-secondary">Top Categories</a>
            <a href="#" className="text-decoration-none text-secondary">Deals</a>
            <a href="#" className="text-decoration-none text-secondary">Blog</a>
            <a href="#" className="text-decoration-none text-secondary">Contact</a>
          </div>
        </div>
        <div className="d-flex gap-3 text-secondary small">
          <a href="#" className="d-flex align-items-center gap-1 text-decoration-none text-secondary">
            <i className="fas fa-search"></i> Search
          </a>
          <a href="#" className="d-flex align-items-center gap-1 text-decoration-none text-secondary">
            <i className="fas fa-bell"></i> Notifications
          </a>
        </div>
      </div>
    </nav>
  );
};

export default MainNavigation;