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
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="gas-cylinder-icon">
            <path fill="#ffd700" d="M179.5 37.5h33.001v85H179.5zM299.5 37.5h33.001v85H299.5z" />
            <path fill="#ffd700" d="M256 130a7.5 7.5 0 0 1-7.5-7.5v-31a7.5 7.5 0 0 1 15 0v31a7.5 7.5 0 0 1-7.5 7.5Z" />
            <path fill="#ffd700" d="M274.817 93.922h-37.634a7.5 7.5 0 0 1 0-15h37.634a7.5 7.5 0 0 1 0 15Z" />
            <path fill="#ffd700" d="M362.5 448v26.5a30 30 0 0 1-30 30h-153a30 30 0 0 1-30-30V448" />
            <rect width="272" height="333" x="120" y="122.5" fill="#ffd700" rx="60" />
            <rect width="210" height="30" x="151" y="7.5" fill="#ffd700" rx="15" />
          </svg>
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