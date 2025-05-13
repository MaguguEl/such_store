import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const ShopBanner = () => {
  return (
    <div className="position-relative rounded overflow-hidden mb-4" style={{ height: '180px' }}>
      <img 
        src="https://images.unsplash.com/photo-1603569283847-aa295f0d016a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
        alt="Fresh fruits banner" 
        className="w-100 h-100 object-fit-cover" 
      />
      <div className="position-absolute top-0 start-0 p-3 text-white">
        <h2 className="h4">Fresh Fruits for Healthy Living</h2>
        <p className="small">Discover our seasonal selection of premium quality fruits...</p>
        <Link to="/fresh-fruits" className="btn btn-sm btn-success">
          Shop Now <FontAwesomeIcon icon={faArrowRight} className="ms-1" />
        </Link>
      </div>
    </div>
  );
};

export default ShopBanner;