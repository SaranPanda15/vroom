import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { FaMotorcycle, FaWallet, FaMapMarkedAlt, FaSignOutAlt, FaUserCircle } from "react-icons/fa";

const Dashboard = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  // Mock recent rides data
  const recentRides = [
    { id: 1, from: "MG Road", to: "Koramangala", fare: "₹75", status: "Completed" },
    { id: 2, from: "Indiranagar", to: "Whitefield", fare: "₹180", status: "Completed" },
    { id: 3, from: "Majestic", to: "HSR Layout", fare: "₹120", status: "Cancelled" },
  ];

  useEffect(() => {
    const loggedUser = JSON.parse(localStorage.getItem("vroomUser"));
    if (!loggedUser) navigate("/login");
    else setUser(loggedUser);
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("vroomUser");
    navigate("/login");
  };

  return (
    <Container className="py-5">
      <Row className="align-items-center mb-5">
        <Col md={8}>
          <h2 className="fw-bold text-warning">
            👋 Welcome back, {user?.name || "Rider"}!
          </h2>
          <p className="text-muted fs-5">
            Ready for your next ride? Let’s keep moving with <strong>Vroom</strong> — fast, safe, and reliable.
          </p>
          <Button
            variant="warning"
            className="fw-bold text-dark px-4"
            onClick={() => navigate("/book")}
          >
            🚗 Book a New Ride
          </Button>
        </Col>
        <Col md={4} className="text-center">
          <img
            src="https://images.unsplash.com/photo-1617302224732-fcb5f9a7d8de?auto=format&fit=crop&w=600&q=80"
            alt="Rider Illustration"
            className="img-fluid rounded shadow"
          />
        </Col>
      </Row>

      {/* Quick Stats */}
      <Row className="gy-4">
        <Col md={4}>
          <Card className="p-4 text-center shadow-lg stat-card">
            <FaMotorcycle size={35} className="text-warning mb-3" />
            <h5>Total Rides</h5>
            <h3 className="fw-bold">28</h3>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="p-4 text-center shadow-lg stat-card">
            <FaWallet size={35} className="text-warning mb-3" />
            <h5>Wallet Balance</h5>
            <h3 className="fw-bold">₹540</h3>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="p-4 text-center shadow-lg stat-card">
            <FaMapMarkedAlt size={35} className="text-warning mb-3" />
            <h5>Active City</h5>
            <h3 className="fw-bold">Bengaluru</h3>
          </Card>
        </Col>
      </Row>

      {/* Recent Rides */}
      <Row className="mt-5">
        <Col>
          <h4 className="text-warning mb-4 fw-bold">🕒 Recent Rides</h4>
          <Card className="p-3 bg-dark text-light shadow-lg">
            <table className="table table-dark table-hover align-middle">
              <thead>
                <tr>
                  <th>#</th>
                  <th>From</th>
                  <th>To</th>
                  <th>Fare</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {recentRides.map((ride) => (
                  <tr key={ride.id}>
                    <td>{ride.id}</td>
                    <td>{ride.from}</td>
                    <td>{ride.to}</td>
                    <td>{ride.fare}</td>
                    <td
                      className={
                        ride.status === "Completed"
                          ? "text-success fw-semibold"
                          : "text-danger fw-semibold"
                      }
                    >
                      {ride.status}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Card>
        </Col>
      </Row>

      {/* Profile Section */}
      <Row className="mt-5 align-items-center">
        <Col md={6}>
          <Card className="p-4 d-flex flex-row align-items-center bg-dark text-light shadow-lg">
            <FaUserCircle size={60} className="text-warning me-3" />
            <div>
              <h5 className="mb-0">{user?.name || "Guest"}</h5>
              <small>{user?.email}</small>
              <p className="mt-2 text-muted">Regular Rider | Member since 2024</p>
            </div>
          </Card>
        </Col>

        <Col md={6} className="text-md-end text-center mt-3 mt-md-0">
          <Button variant="outline-light" className="fw-bold" onClick={handleLogout}>
            <FaSignOutAlt className="me-2" /> Logout
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;
