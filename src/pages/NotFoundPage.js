import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

const NotFoundPage = () => {
  useEffect(function() {
    document.title = 'ElevateMart - Page Not Found';
  }, []);

  return (
    <div className="min-vh-70 d-flex align-items-center justify-content-center bg-light px-4">
      <div className="text-center w-100" style={{ maxWidth: '500px' }}>
        <h1 className="display-1 fw-bold text-primary">404</h1>
        <h2 className="h3 fw-semibold mt-4 mb-4">Page Not Found</h2>
        <p className="text-muted mb-4">
          The page you are looking for doesn't exist or has been moved.
        </p>
        <Link 
          to="/" 
          className="btn btn-primary px-5 py-3"
        >
          <FontAwesomeIcon icon={faArrowLeft} className="me-2" />
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;