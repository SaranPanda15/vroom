import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card, Button, Form, Badge } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { FaUserCircle, FaEnvelope, FaPhone, FaEdit } from "react-icons/fa";

const ProfilePage = () => {
  const [user, setUser] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const loggedUser = JSON.parse(localStorage.getItem("vroomUser"));
    if (!loggedUser) {
      alert("⚠️ Please login to view your profile.");
      navigate("/login");
    } else {
      setUser(loggedUser);
      setFormData(loggedUser);
    }
  }, [navigate]);

  const handleEditToggle = () => setIsEditing(!isEditing);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    localStorage.setItem("vroomUser", JSON.stringify(formData));
    setUser(formData);
    setIsEditing(false);
    alert("✅ Profile updated successfully!");
  };

  if (!user) return null;

  return (
    <Container className="py-5">
      <Row className="justify-content-center">
        <Col md={8}>
          <Card className="p-4 bg-dark text-light shadow-lg border-0 rounded-4">
            <div className="text-center mb-4">
              <FaUserCircle size={90} className="text-warning mb-3" />
              <h3 className="fw-bold">{user.name}</h3>
              <Badge bg="warning" text="dark" className="fw-semibold">
                Vroom Rider
              </Badge>
            </div>

            <Form>
              <Row>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label className="text-warning fw-semibold">Full Name</Form.Label>
                    <Form.Control
                      type="text"
                      name="name"
                      value={formData.name}
                      disabled={!isEditing}
                      onChange={handleChange}
                      className="bg-dark text-light border-secondary"
                    />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label className="text-warning fw-semibold">Email</Form.Label>
                    <Form.Control
                      type="email"
                      name="email"
                      value={formData.email}
                      disabled={!isEditing}
                      onChange={handleChange}
                      className="bg-dark text-light border-secondary"
                    />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label className="text-warning fw-semibold">Phone</Form.Label>
                    <Form.Control
                      type="text"
                      name="phone"
                      value={formData.phone || ""}
                      disabled={!isEditing}
                      onChange={handleChange}
                      className="bg-dark text-light border-secondary"
                      placeholder="Enter phone number"
                    />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label className="text-warning fw-semibold">City</Form.Label>
                    <Form.Control
                      type="text"
                      name="city"
                      value={formData.city || ""}
                      disabled={!isEditing}
                      onChange={handleChange}
                      className="bg-dark text-light border-secondary"
                      placeholder="Your city"
                    />
                  </Form.Group>
                </Col>
              </Row>
            </Form>

            <div className="text-center mt-4">
              {isEditing ? (
                <Button variant="warning" className="text-dark fw-bold px-4" onClick={handleSave}>
                  Save Changes
                </Button>
              ) : (
                <Button variant="outline-warning" className="fw-bold px-4" onClick={handleEditToggle}>
                  <FaEdit className="me-2" />
                  Edit Profile
                </Button>
              )}
            </div>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default ProfilePage;
