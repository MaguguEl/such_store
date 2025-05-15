import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import '../styles/notfound.css';

const NotFoundPage = () => {
  useEffect(() => {
    document.title = 'GasEnergy - Page Not Found';
  }, []);

  return (
    <div className="error-page">
      <div className="error-content">
        <div className="error-numbers">
          <div className="number">4</div>
           <img
              src="/assets/images/not-found-transparent.svg"
              alt="Not Found Icon"
              width="150"
              height="150"
              className="not-found-image"
            />
          <div className="number">4</div>
        </div>
        <div className="error-text">ERROR</div>
        <div className="error-subtext">Page Not Found</div>
        <Link to="/" className="back-button">
          <FontAwesomeIcon icon={faArrowLeft} className="me-2" />
          BACK TO HOME
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;