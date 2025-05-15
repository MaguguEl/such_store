import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faFire, faShieldAlt } from '@fortawesome/free-solid-svg-icons';
import { useProducts } from '../../contexts/ProductContext';

const ShopBanner = () => {
  const { featuredProducts } = useProducts();
  const featuredGasProduct = featuredProducts.find(p => p.featured) || featuredProducts[0];

  return (
    <div className="position-relative rounded overflow-hidden mb-4" style={{ height: '180px' }}>
       <img 
          src="/assets/images/shop-banner.jpg" 
          alt="Shop Banner" 
          className="w-100 h-100 object-fit-cover" 
        />
      <div className="position-absolute top-0 start-0 p-3 text-white bg-dark bg-opacity-50 w-100 h-100 d-flex flex-column justify-content-center">
        <div style={{ maxWidth: '500px' }}>
          <h2 className="h4 mb-2">
            <FontAwesomeIcon icon={faFire} className="me-2" />
            Premium Gas Equipment & Accessories
          </h2>
          <p className="small mb-3">
            Industrial-grade solutions with certified safety standards. {featuredGasProduct?.description || ''}
          </p>
          <div className="d-flex align-items-center gap-3">
            <Link to="/shop" className="btn btn-sm btn-danger">
              Shop Now <FontAwesomeIcon icon={faArrowRight} className="ms-1" />
            </Link>
            <Link to="/safety-guide" className="btn btn-sm btn-outline-light">
              <FontAwesomeIcon icon={faShieldAlt} className="me-1" />
              Safety Guide
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopBanner;