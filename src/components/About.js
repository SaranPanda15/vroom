import React from "react";
import { Container, Row, Col, Image, Card } from "react-bootstrap";
import aboutImg from "../assets/about.jpg";
import rideImg from "../assets/ride.jpg";

const About = () => (
  <Container className="py-5 about-section">
    <Row className="align-items-center mb-5">
      <Col md={6}>
        <Image src={aboutImg} fluid rounded />
      </Col>
      <Col md={6}>
        <h2 className="mb-3">About Vroom</h2>
        <p>
          At <strong>Vroom</strong>, we believe city travel should be effortless, safe, and affordable.
          Inspired by industry leaders like Rapido and Uber, Vroom was created to simplify everyday commuting.
          From two-wheelers to cars, we connect you with trusted drivers ready to take you anywhere, anytime.
        </p>
        <p>
          Our mission is to empower drivers and make urban travel eco-friendly, faster, and smarter.
        </p>
      </Col>
    </Row>

    <Row className="text-center">
      <h3 className="mb-4 text-warning">Our Core Values</h3>
      <Col md={4}>
        <Card className="p-3 shadow-sm border-0">
          <Card.Body>
            <h5>💛 Safety First</h5>
            <p>Every driver on Vroom is background-verified and trained for passenger safety.</p>
          </Card.Body>
        </Card>
      </Col>
      <Col md={4}>
        <Card className="p-3 shadow-sm border-0">
          <Card.Body>
            <h5>⚡ Speed & Reliability</h5>
            <p>Book rides in seconds and reach your destination faster with optimized routes.</p>
          </Card.Body>
        </Card>
      </Col>
      <Col md={4}>
        <Card className="p-3 shadow-sm border-0">
          <Card.Body>
            <h5>🌱 Sustainability</h5>
            <p>We’re committed to promoting shared and eco-friendly rides to reduce congestion and emissions.</p>
          </Card.Body>
        </Card>
      </Col>
    </Row>

    <Row className="mt-5 align-items-center">
      <Col md={6}>
        <h3 className="mb-3">Our Drivers, Our Pride</h3>
        <p>
          Our drivers are the heart of Vroom. We provide them with fair earnings, flexible hours, and
          safety assurance. Every rider you meet is trained to deliver a comfortable, courteous experience.
        </p>
      </Col>
      <Col md={6}>
        <Image src={rideImg} fluid rounded />
      </Col>
    </Row>
  </Container>
);

export default About;
