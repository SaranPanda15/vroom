import React from "react";
import { Container, Button, Row, Col, Image } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import heroBg from "../assets/hero-bg.jpg";
import driver from "../assets/driver.jpg";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <div
      className="hero"
      style={{
        backgroundImage: `linear-gradient(rgba(17,17,17,0.7), rgba(17,17,17,0.7)), url(${heroBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: "#fff",
      }}
    >
      <Container className="py-5 text-center">
        <h1 className="fw-bold display-5 mb-3">
          Ride Fast. Ride Smart. Ride Vroom. 🏍️
        </h1>
        <p className="lead mb-4">
          Vroom brings you a quick, safe, and affordable way to travel around your city.  
          Whether it’s your daily commute, a quick errand, or a night out — we’ve got your ride ready in minutes.
        </p>

        <div className="d-flex justify-content-center gap-3 mb-4">
          <Button size="lg" variant="light" onClick={() => navigate("/book")}>
            🚗 Book a Ride
          </Button>
          <Button size="lg" variant="outline-light" onClick={() => navigate("/signup")}>
            👤 Become a Driver
          </Button>
        </div>

        <Row className="align-items-center mt-5">
          <Col md={4}>
            <Image src={driver} fluid rounded />
          </Col>
          <Col md={8} className="text-start mt-4 mt-md-0">
            <h4 className="fw-bold text-warning">Why Choose Vroom?</h4>
            <ul style={{ listStyle: "none", paddingLeft: 0, color: "#fff" }}>
              <li>✅ Instant booking within seconds</li>
              <li>✅ Verified and trained drivers</li>
              <li>✅ Affordable pricing and transparent fares</li>
              <li>✅ Real-time tracking & secure payment</li>
            </ul>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Hero;
