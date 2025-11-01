import React, { useState, useEffect } from "react";
import { Form, Button, Container, Row, Col, Card, Alert } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  // Redirect if already logged in
  useEffect(() => {
    const user = localStorage.getItem("vroomUser");
    if (user) navigate("/dashboard");
  }, [navigate]);

  const handleSignup = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError("Passwords do not match!");
      return;
    }

    const userData = { name, email, password };
    localStorage.setItem("vroomUserData", JSON.stringify(userData));

    setSuccess("Signup successful! Redirecting to login...");
    setError("");
    setTimeout(() => navigate("/login"), 1500);
  };

  return (
    <Container className="py-5">
      <Row className="justify-content-center align-items-center">
        <Col md={6}>
          <Card className="p-4 shadow-lg border-0">
            <h2 className="text-center mb-4 fw-bold text-warning">Join Vroom Today 🛵</h2>
            {error && <Alert variant="danger">{error}</Alert>}
            {success && <Alert variant="success">{success}</Alert>}

            <Form onSubmit={handleSignup}>
              <Form.Group className="mb-3">
                <Form.Label className="fw-semibold text-white">Full Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label className="fw-semibold text-white">Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label className="fw-semibold text-white">Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Enter a password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-4">
                <Form.Label className="fw-semibold text-white">Confirm Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Re-enter password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                />
              </Form.Group>

              <div className="text-center mb-3">
                <Button type="submit" className="btn btn-warning text-dark fw-bold px-4">
                  Signup
                </Button>
              </div>

              <p className="text-center text-muted">
                Already have an account?{" "}
                <span
                  onClick={() => navigate("/login")}
                  style={{ color: "#FFD700", cursor: "pointer", fontWeight: "600" }}
                >
                  Login here
                </span>
              </p>
            </Form>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Signup;
