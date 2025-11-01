import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card, Badge } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { FaMapMarkerAlt, FaClock, FaRupeeSign, FaCheckCircle } from "react-icons/fa";

const MyRidesPage = () => {
  const [rides, setRides] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const loggedUser = JSON.parse(localStorage.getItem("vroomUser"));
    if (!loggedUser) {
      alert("⚠️ Please login to view your rides.");
      navigate("/login");
    } else {
      const storedRides = JSON.parse(localStorage.getItem("vroomRides")) || demoRides;
      setRides(storedRides);
    }
  }, [navigate]);

  // Example demo rides (for testing)
  const demoRides = [
    {
      id: 1,
      pickup: "Koramangala",
      drop: "Whitefield",
      distance: "16.2 km",
      time: "32 mins",
      fare: 220,
      status: "Completed",
    },
    {
      id: 2,
      pickup: "Indiranagar",
      drop: "HSR Layout",
      distance: "8.5 km",
      time: "18 mins",
      fare: 140,
      status: "Completed",
    },
    {
      id: 3,
      pickup: "BTM Layout",
      drop: "Electronic City",
      distance: "12.3 km",
      time: "26 mins",
      fare: 180,
      status: "Upcoming",
    },
  ];

  return (
    <Container className="py-5">
      <h3 className="fw-bold text-warning text-center mb-4">🚕 My Rides</h3>
      <Row className="justify-content-center">
        {rides.map((ride) => (
          <Col md={8} key={ride.id} className="mb-4">
            <Card className="p-3 bg-dark text-light shadow-sm border-0 rounded-4">
              <Row>
                <Col md={8}>
                  <h5 className="fw-bold text-warning">Ride #{ride.id}</h5>
                  <p className="mb-1">
                    <FaMapMarkerAlt className="text-warning me-2" />
                    <strong>Pickup:</strong> {ride.pickup}
                  </p>
                  <p className="mb-1">
                    <FaMapMarkerAlt className="text-warning me-2" />
                    <strong>Drop:</strong> {ride.drop}
                  </p>
                  <p className="mb-0">
                    <FaClock className="text-warning me-2" />
                    {ride.time} | {ride.distance}
                  </p>
                </Col>
                <Col
                  md={4}
                  className="d-flex flex-column align-items-end justify-content-center text-end"
                >
                  <h5 className="fw-bold text-light mb-1">
                    <FaRupeeSign className="text-warning me-1" />
                    {ride.fare}
                  </h5>
                  <Badge
                    bg={ride.status === "Completed" ? "success" : "warning"}
                    text={ride.status === "Completed" ? "light" : "dark"}
                  >
                    <FaCheckCircle className="me-1" />
                    {ride.status}
                  </Badge>
                </Col>
              </Row>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default MyRidesPage;
