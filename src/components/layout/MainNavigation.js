import React, { useState } from 'react';
import HeaderTop from './HeaderTop';
import MobileMenu from './MobileMenu';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';


const MainNavigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <HeaderTop toggleMobileMenu={toggleMobileMenu} />
      <MobileMenu isOpen={isMobileMenuOpen} toggleMenu={toggleMobileMenu} />
      
      {/* Mobile Search (hidden on desktop) */}
      <div className="d-md-none bg-white p-3 border-top">
        <form role="search">
          <div className="position-relative">
            <input
              type="search"
              placeholder="Search gas products..."
              className="form-control"
            />
            <button type="submit" className="btn position-absolute top-0 end-0 h-100 px-3">
              <FontAwesomeIcon icon={faSearch} />
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default MainNavigation;