import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="footer bg-dark text-light pt-5 mt-5">
    <Container>
      <Row className="gy-4">
        {/* Brand Info */}
        <Col md={3} sm={6}>
          <h4 className="text-warning fw-bold mb-3">Vroom 🚴‍♂️</h4>
          <p style={{ color: "#ccc" }}>
            Your trusted companion for quick, safe, and affordable city rides.  
            Book a ride in seconds and move faster with Vroom.
          </p>
        </Col>

        {/* Quick Links */}
        <Col md={3} sm={6}>
          <h5 className="text-warning mb-3">Quick Links</h5>
          <ul className="list-unstyled">
            <li><Link to="/" className="footer-link">🏠 Home</Link></li>
            <li><Link to="/book" className="footer-link">🚗 Book a Ride</Link></li>
            <li><Link to="/login" className="footer-link">🔐 Login</Link></li>
            <li><Link to="/signup" className="footer-link">🧾 Signup</Link></li>
          </ul>
        </Col>

        {/* Contact Info */}
        <Col md={3} sm={6}>
          <h5 className="text-warning mb-3">Contact Us</h5>
          <ul className="list-unstyled" style={{ color: "#ccc" }}>
            <li>📍 123, MG Road, Bengaluru</li>
            <li>📧 support@vroom.in</li>
            <li>📞 +91 98765 43210</li>
          </ul>
        </Col>

        {/* Social Media & App Links */}
        <Col md={3} sm={6}>
          <h5 className="text-warning mb-3">Follow Us</h5>
          <div className="d-flex gap-3 mb-3">
            <a href="https://facebook.com" target="_blank" rel="noreferrer" className="social-icon">
              <FaFacebookF />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer" className="social-icon">
              <FaTwitter />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="social-icon">
              <FaInstagram />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="social-icon">
              <FaLinkedinIn />
            </a>
          </div>

          <h6 className="text-warning mb-2">Get Our App</h6>
          <div className="d-flex flex-column">
            <button className="btn btn-outline-light btn-sm mb-2">📱 Play Store</button>
            <button className="btn btn-outline-light btn-sm">🍎 App Store</button>
          </div>
        </Col>
      </Row>

      <hr className="mt-4 mb-3" style={{ borderTop: "1px solid #555" }} />
      <Row>
        <Col className="text-center" style={{ color: "#aaa" }}>
          © {new Date().getFullYear()} <strong>Vroom</strong> | All Rights Reserved  
          <br />
          <small>Designed with ❤️ for smart city travel</small>
        </Col>
      </Row>
    </Container>
  </footer>
);

export default Footer;
