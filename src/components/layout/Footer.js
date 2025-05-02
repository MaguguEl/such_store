import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer = () => {
  return (
    <footer className="bg-light border-top border-secondary-subtle mt-5 pt-4 pb-3">
      <div className="container">
        <div className="row text-secondary small">
          <div className="col-12 col-md-4 col-lg-3 mb-4">
            <h5 className="fw-bold text-dark mb-3">Join our newsletter for discounts</h5>
            <p>Subscribe to get the latest updates and offers.</p>
            <form className="d-flex gap-2 mt-3" role="search">
              <input type="email" className="form-control" placeholder="Enter your email" aria-label="Email" />
              <button className="btn btn-purple" type="submit">Subscribe</button>
            </form>
          </div>
          <div className="col-6 col-md-2 mb-4">
            <h6 className="fw-semibold mb-3">Do You Need Help?</h6>
            <ul className="list-unstyled">
              <li>Phone: +265 992 28 87 72</li>
              <li>Email: support@sacredstore.com</li>
              <li>Live Chat</li>
            </ul>
          </div>
          <div className="col-6 col-md-2 mb-4">
            <h6 className="fw-semibold mb-3">Main Menu</h6>
            <ul className="list-unstyled">
              <li><Link to="/" className="footer-link text-secondary">Home</Link></li>
              <li><Link to="/shop" className="footer-link text-secondary">Shop</Link></li>
              <li><Link to="/deals" className="footer-link text-secondary">Deals</Link></li>
              <li><Link to="/affliations" className="footer-link text-secondary">Affiliates & Creators</Link></li>
            </ul>
          </div>
          <div className="col-6 col-md-2 mb-4">
            <h6 className="fw-semibold mb-3">Useful Links</h6>
            <ul className="list-unstyled">
              <li><Link to="/about" className="footer-link text-secondary">About Us</Link></li>
              <li><Link to="/contact" className="footer-link text-secondary">Contact</Link></li>
              <li><Link to="/privacy" className="footer-link text-secondary">Privacy Policy</Link></li>
              <li><Link to="/terms" className="footer-link text-secondary">Terms & Conditions</Link></li>
            </ul>
          </div>
          <div className="col-6 col-md-4 col-lg-3 mb-4">
            <h6 className="fw-semibold mb-3">Download Our App</h6>
            <div className="d-flex gap-3 mb-3">
              <Link to="/download-app" aria-label="Download on the App Store">
                <img 
                  src="/assets/images/app-store.svg" 
                  alt="App Store download badge" 
                  height="40" 
                  width="120" 
                  className="img-fluid" 
                />
              </Link>
              <Link to="/download-app" aria-label="Get it on Google Play">
                <img 
                  src="/assets/images/play-store.svg" 
                  alt="Google Play download badge" 
                  height="40" 
                  width="120" 
                  className="img-fluid" 
                />
              </Link>
            </div>
            <div className="d-flex gap-3">
              <Link to="/facebook" aria-label="Facebook" className="text-secondary fs-4">
                <FontAwesomeIcon icon={['fab', 'facebook']} />
              </Link>
              <Link to="/twitter" aria-label="Twitter" className="text-secondary fs-4">
                <FontAwesomeIcon icon={['fab', 'twitter']} />
              </Link>
              <Link to="/instagram" aria-label="Instagram" className="text-secondary fs-4">
                <FontAwesomeIcon icon={['fab', 'instagram']} />
              </Link>
            </div>
          </div>
        </div>
        <div className="text-center text-secondary small border-top border-secondary-subtle pt-3 mt-3">
          © 2024 SacredStore. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;