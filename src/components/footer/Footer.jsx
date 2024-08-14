import React from 'react';
import '../navbar/navbar.css'
const Footer = () => {
  return (
    <footer className="text-center footer-custom text-lg-start bg-primary footer-dark text-white">
      {/* Section: Social media */}
      <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
        {/* Left */}
        <div className="me-5 d-none d-lg-block">
          <span>Get connected with us on social networks:</span>
        </div>
        {/* Left */}

        {/* Right */}
        <div>
          <a href="#" className="me-4 text-white">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="#" className="me-4 text-white">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#" className="me-4 text-white">
            <i className="fab fa-google"></i>
          </a>
          <a href="#" className="me-4 text-white">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="#" className="me-4 text-white">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="#" className="me-4 text-white">
            <i className="fab fa-github"></i>
          </a>
        </div>
        {/* Right */}
      </section>
      {/* Section: Social media */}

      {/* Section: Links */}
      <section>
        <div className="container text-center text-md-start mt-5">
          {/* Grid row */}
          <div className="row mt-3">
            {/* Grid column */}
            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
              {/* Content */}
              <h6 className="text-uppercase fw-bold mb-4 text-white">
                <i className="fas fa-gem me-3"></i>Elite Corporate Event Management
              </h6>
              <p>
              Elite Corporate Event Management: Elevating Experiences, Crafting Unforgettable Moments, and Setting New Standards in Event Excellence
              </p>
            </div>
            {/* Grid column */}

            {/* Grid column */}
            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
              {/* Links */}
              <h6 className="text-uppercase fw-bold mb-4 text-white">Site Map</h6>
              <p>
                <a href="/contact" className="text-reset text-white">Contact Us</a>
              </p>
              <p>
                <a href="/about" className="text-reset text-white">About</a>
              </p>
              <p>
                <a href="/terms-condition" className="text-reset text-white">Terms and Condition</a>
              </p>
              <p>
                <a href="/privacy-policy" className="text-reset text-white">Privacy and Policy</a>
              </p>
          
            </div>
            {/* Grid column */}

            {/* Grid column */}
            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
              {/* Links */}
              <h6 className="text-uppercase fw-bold mb-4 text-white">Useful links</h6>
              <p>
                <a href="/signup" className="text-reset text-white">Sign Up</a>
              </p>
              <p>
                <a href="/login" className="text-reset text-white">Login</a>
              </p>
              <p>
                <a href="/events" className="text-reset text-white">Events</a>
              </p>
            
            </div>
            {/* Grid column */}

            {/* Grid column */}
            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
              {/* Links */}
              <h6 className="text-uppercase fw-bold mb-4 text-white">Contact</h6>
              <p><i className="fas fa-home me-3"></i> New York, NY 10012, US</p>
              <p>
                <i className="fas fa-envelope me-3"></i>
                contact@elite.com
              </p>
              <p><i className="fas fa-phone me-3"></i> + 01 234 567 88</p>
              <p><i className="fas fa-print me-3"></i> + 01 234 567 89</p>
            </div>
            {/* Grid column */}
          </div>
          {/* Grid row */}
        </div>
      </section>
      {/* Section: Links */}

      {/* Copyright */}
      <div className="text-center p-4" style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2024  
        <a className="text-reset text-white fw-bold" href=""> Elite Corporate Event Management</a>
      </div>
      {/* Copyright */}
    </footer>
  );
};

export default Footer;
