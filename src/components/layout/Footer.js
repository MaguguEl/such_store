import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer = () => {
  return (
    <footer className="bg-light border-top border-secondary-subtle mt-5 pt-4 pb-3">
      <div className="container">
        <div className="row g-4">
          {/* Customer Support Column */}
          <div className="col-12 col-md-6 col-lg-3">
            <h6 className="fw-semibold mb-3">Do You Need Help?</h6>
            <ul className="list-unstyled">
              <li className="mb-2">
                <FontAwesomeIcon icon="phone" className="me-2" />
                +265 992 28 87 72
              </li>
              <li className="mb-2">
                <FontAwesomeIcon icon="envelope" className="me-2" />
                support@sacredstore.com
              </li>
              <li>
                <FontAwesomeIcon icon="comment-dots" className="me-2" />
                Live Chat
              </li>
            </ul>
          </div>

          {/* Navigation Columns */}
          <div className="col-6 col-md-3 col-lg-2">
            <h6 className="fw-semibold mb-3">Shop</h6>
            <ul className="list-unstyled">
              <li className="mb-2"><Link to="/shop" className="text-secondary text-decoration-none">All Products</Link></li>
              <li className="mb-2"><Link to="/shop/new-arrivals" className="text-secondary text-decoration-none">New Arrivals</Link></li>
              <li className="mb-2"><Link to="/shop/featured" className="text-secondary text-decoration-none">Featured</Link></li>
              <li><Link to="/deals" className="text-secondary text-decoration-none">Deals</Link></li>
            </ul>
          </div>

          <div className="col-6 col-md-3 col-lg-2">
            <h6 className="fw-semibold mb-3">Company</h6>
            <ul className="list-unstyled">
              <li className="mb-2"><Link to="/about" className="text-secondary text-decoration-none">About Us</Link></li>
              <li className="mb-2"><Link to="/contact" className="text-secondary text-decoration-none">Contact</Link></li>
              <li className="mb-2"><Link to="/safety" className="text-secondary text-decoration-none">Safety Guide</Link></li>
              <li><Link to="/affliations" className="text-secondary text-decoration-none">Affiliates</Link></li>
            </ul>
          </div>

          {/* Legal Column */}
          <div className="col-6 col-md-3 col-lg-2">
            <h6 className="fw-semibold mb-3">Legal</h6>
            <ul className="list-unstyled">
              <li className="mb-2"><Link to="/privacy" className="text-secondary text-decoration-none">Privacy Policy</Link></li>
              <li className="mb-2"><Link to="/terms" className="text-secondary text-decoration-none">Terms & Conditions</Link></li>
              <li className="mb-2"><Link to="/shipping" className="text-secondary text-decoration-none">Shipping Policy</Link></li>
              <li><Link to="/returns" className="text-secondary text-decoration-none">Returns & Refunds</Link></li>
            </ul>
          </div>

          {/* App Download & Social Media Column */}
          <div className="col-12 col-md-6 col-lg-3">
            <h6 className="fw-semibold mb-3">Connect With Us</h6>
            
            {/* App Download Buttons */}
            <div className="mb-3">
              <p className="small mb-2">Download our mobile app</p>
              <div className="d-flex flex-wrap gap-2">
                <Link to="/download-app" aria-label="Download on the App Store">
                  <img 
                    src="/assets/images/app-store.svg" 
                    alt="App Store" 
                    className="img-fluid" 
                    style={{ height: '40px', width: 'auto' }}
                  />
                </Link>
                <Link to="/download-app" aria-label="Get it on Google Play">
                  <img 
                    src="/assets/images/play-store.svg" 
                    alt="Google Play" 
                    className="img-fluid" 
                    style={{ height: '40px', width: 'auto' }}
                  />
                </Link>
              </div>
            </div>
            
            {/* Social Media Links */}
            <div>
              <p className="small mb-2">Follow us on social media</p>
              <div className="d-flex gap-3">
                <Link to="/facebook" aria-label="Facebook" className="text-secondary fs-5">
                  <FontAwesomeIcon icon={['fab', 'facebook']} />
                </Link>
                <Link to="/twitter" aria-label="Twitter" className="text-secondary fs-5">
                  <FontAwesomeIcon icon={['fab', 'twitter']} />
                </Link>
                <Link to="/instagram" aria-label="Instagram" className="text-secondary fs-5">
                  <FontAwesomeIcon icon={['fab', 'instagram']} />
                </Link>
                <Link to="/tiktok" aria-label="TikTok" className="text-secondary fs-5">
                  <FontAwesomeIcon icon={['fab', 'tiktok']} />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright Notice */}
        <div className="text-center text-secondary small border-top border-secondary-subtle pt-3 mt-4">
          © {new Date().getFullYear()} SacredStore. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;