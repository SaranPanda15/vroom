import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { FaCheckCircle, FaHome, FaMapMarkedAlt } from "react-icons/fa";

const RideSuccess = () => {
  const navigate = useNavigate();
  const [rideDetails, setRideDetails] = useState(null);
  const [bookingId, setBookingId] = useState("");

  useEffect(() => {
    const summary = JSON.parse(localStorage.getItem("rideSummary"));
    if (!summary) navigate("/book");
    else {
      setRideDetails(summary);
      setBookingId("VRM" + Math.floor(100000 + Math.random() * 900000));
    }
  }, [navigate]);

  return (
    <Container className="py-5 text-center">
      <Row className="justify-content-center">
        <Col md={8}>
          <Card className="p-5 shadow-lg border-0 success-card bg-dark text-light">
            <FaCheckCircle size={80} className="text-success mb-3 animate-bounce" />
            <h2 className="fw-bold text-warning mb-3">Ride Confirmed! 🎉</h2>
            <p className="text-muted fs-5">
              Your Vroom ride has been successfully booked.
            </p>

            <div className="my-4">
              <h5 className="fw-semibold text-light">
                Booking ID: <span className="text-warning">{bookingId}</span>
              </h5>
              <p className="text-secondary mt-2">
                {rideDetails?.pickup} ➜ {rideDetails?.drop}
              </p>
              <h5 className="fw-bold mt-3">Fare: ₹{rideDetails?.fare}</h5>
            </div>

            <div className="my-4">
              <img
                src="https://cdn.dribbble.com/users/418188/screenshots/17333528/media/fd17cc3a4f6c8e22ee894db9c3bdf0d3.gif"
                alt="Ride Success Animation"
                className="img-fluid rounded shadow mb-4"
              />
            </div>

            <div className="d-flex justify-content-center gap-3">
              <Button
                variant="warning"
                className="text-dark fw-bold px-4"
                onClick={() => navigate("/dashboard")}
              >
                <FaHome className="me-2" /> Back to Dashboard
              </Button>
              <Button
                variant="outline-light"
                className="fw-bold px-4"
                onClick={() => navigate("/book")}
              >
                <FaMapMarkedAlt className="me-2" /> Book Another Ride
              </Button>
            </div>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default RideSuccess;
