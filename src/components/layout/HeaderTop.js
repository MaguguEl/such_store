import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const HeaderTop = () => {
  return (
    <header className="border-bottom">
      <div className="container-xl d-flex align-items-center justify-content-between py-3">
        <div className="d-flex align-items-center gap-4">
          <Link to="/" className="d-flex align-items-center">
              <img 
                src="/assets/images/logo.png" 
                alt="SacredStore logo" 
                height="40" 
                width="40" 
              /> 
            </Link>
            <button type="button" className="btn btn-link text-secondary d-flex align-items-center gap-1 p-0 fw-semibold" aria-haspopup="true" aria-expanded="false">
              <i className="fas fa-th-large fs-5"></i> Categories
              <svg xmlns="http://www.w3.org/2000/svg" className="bi bi-chevron-down" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" aria-hidden="true">
                <path fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
              </svg>
            </button>
        </div>
        <form role="search" aria-label="Search Sacred stores, and products" className="flex-grow-1 mx-5" >
          <div className="position-relative">
            <input type="search" id="search" name="search" placeholder="Search Sacred stores, and products" className="form-control search-input" aria-label="Search Cash Back stores, coupons and products" />
            <button type="submit" className="position-absolute top-0 end-0 search-btn d-flex align-items-center justify-content-center" aria-label="Search">
              <FontAwesomeIcon icon="search" size="lg" />
            </button>
          </div>
        </form>
        <div className="d-flex align-items-center gap-4 text-secondary header-user">
          <Link to="#" className="text-secondary d-flex align-items-center gap-1 text-decoration-none">
            <FontAwesomeIcon icon="user" size="lg" /> Sign In
          </Link>
          <Link to="#" className="text-secondary d-flex align-items-center gap-1 text-decoration-none">
            <FontAwesomeIcon icon={['fas', 'heart']} size="lg" /> Wishlist
          </Link>
          <Link to="#" className="text-secondary d-flex align-items-center gap-1 text-decoration-none">
             <FontAwesomeIcon icon="bell" size="lg" />Notification
          </Link>
          <Link to="#" className="text-secondary d-flex align-items-center gap-1 text-decoration-none">
            <FontAwesomeIcon icon="shopping-cart" size="lg" />Cart
          </Link>
        </div>
      </div>
    </header>
  );
};

export default HeaderTop;