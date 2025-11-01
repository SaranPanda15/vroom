import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card, Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { FaCreditCard, FaMoneyBillWave, FaMobileAlt, FaArrowRight } from "react-icons/fa";

const PaymentPage = () => {
  const navigate = useNavigate();
  const [rideSummary, setRideSummary] = useState(null);
  const [selectedMethod, setSelectedMethod] = useState("");

  useEffect(() => {
    const summary = JSON.parse(localStorage.getItem("rideSummary"));
    if (!summary) {
      alert("⚠️ No ride details found. Please book a ride first.");
      navigate("/book");
    } else {
      setRideSummary(summary);
      setSelectedMethod(summary.paymentMethod || "cash");
    }
  }, [navigate]);

  const handlePayment = () => {
    setTimeout(() => {
      navigate("/success");
    }, 2000);
  };

  return (
    <Container className="py-5">
      <Row className="justify-content-center">
        <Col md={7}>
          <Card className="p-4 shadow-lg border-0 bg-dark text-light payment-card">
            <h3 className="fw-bold text-warning mb-4 text-center">
              💳 Complete Your Payment
            </h3>

            {rideSummary && (
              <>
                <div className="mb-4 text-center">
                  <h5 className="fw-semibold mb-2">
                    From <span className="text-warning">{rideSummary.pickup}</span> <br />
                    To <span className="text-warning">{rideSummary.drop}</span>
                  </h5>
                  <p className="text-muted">Estimated Fare: ₹{rideSummary.fare}</p>
                </div>

                <Form>
                  <Form.Group className="mb-4">
                    <Form.Label className="fw-semibold text-warning">
                      Select Payment Method
                    </Form.Label>

                    <Form.Check
                      type="radio"
                      label={
                        <>
                          <FaMoneyBillWave className="me-2 text-warning" />
                          Cash on Ride
                        </>
                      }
                      name="payment"
                      value="cash"
                      checked={selectedMethod === "cash"}
                      onChange={(e) => setSelectedMethod(e.target.value)}
                    />

                    <Form.Check
                      type="radio"
                      label={
                        <>
                          <FaMobileAlt className="me-2 text-warning" />
                          UPI / Wallet
                        </>
                      }
                      name="payment"
                      value="upi"
                      checked={selectedMethod === "upi"}
                      onChange={(e) => setSelectedMethod(e.target.value)}
                    />

                    <Form.Check
                      type="radio"
                      label={
                        <>
                          <FaCreditCard className="me-2 text-warning" />
                          Credit / Debit Card
                        </>
                      }
                      name="payment"
                      value="card"
                      checked={selectedMethod === "card"}
                      onChange={(e) => setSelectedMethod(e.target.value)}
                    />
                  </Form.Group>
                </Form>

                {selectedMethod === "upi" && (
                  <Form.Group className="mb-4">
                    <Form.Label className="fw-semibold">Enter UPI ID</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="e.g. username@upi"
                      className="bg-dark text-light border-warning"
                    />
                  </Form.Group>
                )}

                {selectedMethod === "card" && (
                  <>
                    <Form.Group className="mb-3">
                      <Form.Label className="fw-semibold">Card Number</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="XXXX-XXXX-XXXX-1234"
                        className="bg-dark text-light border-warning"
                      />
                    </Form.Group>
                    <Row>
                      <Col md={6}>
                        <Form.Group className="mb-3">
                          <Form.Label className="fw-semibold">Expiry</Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="MM/YY"
                            className="bg-dark text-light border-warning"
                          />
                        </Form.Group>
                      </Col>
                      <Col md={6}>
                        <Form.Group className="mb-3">
                          <Form.Label className="fw-semibold">CVV</Form.Label>
                          <Form.Control
                            type="password"
                            placeholder="***"
                            className="bg-dark text-light border-warning"
                          />
                        </Form.Group>
                      </Col>
                    </Row>
                  </>
                )}

                <div className="text-center mt-4">
                  <Button
                    variant="warning"
                    className="text-dark fw-bold px-5"
                    onClick={handlePayment}
                  >
                    Confirm & Pay ₹{rideSummary.fare} <FaArrowRight className="ms-2" />
                  </Button>
                </div>
              </>
            )}
          </Card>
        </Col>
      </Row>

      <Row className="justify-content-center mt-5">
        <Col md={6} className="text-center">
          <img
            src="https://cdn.dribbble.com/users/4382412/screenshots/15569847/media/bbc30a1d46f3f70b070c20d65733d67b.gif"
            alt="Payment Illustration"
            className="img-fluid rounded shadow"
          />
        </Col>
      </Row>
    </Container>
  );
};

export default PaymentPage;
