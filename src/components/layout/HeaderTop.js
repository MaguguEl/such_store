import React from 'react';

const HeaderTop = () => {
  return (
    <header className="border-bottom border-secondary-subtle">
      <div className="container d-flex justify-content-between align-items-center py-2 small text-secondary">
        <div className="d-flex gap-3">
          <span>English</span>
          <span className="border-start border-secondary ps-3">USD</span>
        </div>
        <div className="d-flex gap-4">
          <a href="#" className="text-secondary d-flex align-items-center gap-1 text-decoration-none">
            <i className="fas fa-user"></i> My Account
          </a>
          <a href="#" className="text-secondary d-flex align-items-center gap-1 text-decoration-none">
            <i className="fas fa-heart"></i> Wishlist
          </a>
          <a href="#" className="text-secondary d-flex align-items-center gap-1 text-decoration-none">
            <i className="fas fa-shopping-cart"></i> Cart
          </a>
          <a href="#" className="text-secondary d-flex align-items-center gap-1 text-decoration-none">
            <i className="fas fa-sign-in-alt"></i> Login
          </a>
        </div>
      </div>
    </header>
  );
};

export default HeaderTop;