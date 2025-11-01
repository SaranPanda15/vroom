// import React, { useState, useEffect } from "react";
// import { Form, Button, Container, Row, Col, Alert, Card } from "react-bootstrap";
// import { useNavigate } from "react-router-dom";

// const BookRide = () => {
//   const navigate = useNavigate();

//   // Simulating login state (later you can manage it globally via context or localStorage)
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   // Ride form data
//   const [pickup, setPickup] = useState("");
//   const [drop, setDrop] = useState("");
//   const [rideType, setRideType] = useState("bike");
//   const [error, setError] = useState("");

//   // On page load, check login status
//   useEffect(() => {
//     const user = localStorage.getItem("vroomUser");
//     if (user) setIsLoggedIn(true);
//   }, []);

//   // Handle booking
//   const handleBooking = (e) => {
//     e.preventDefault();

//     if (!isLoggedIn) {
//       setError("Please login to continue booking your ride 🚦");
//       setTimeout(() => navigate("/login"), 1500); // Redirect after short delay
//       return;
//     }

//     if (!pickup || !drop) {
//       setError("Please fill in both pickup and drop locations.");
//       return;
//     }

//     // Redirect to cart / confirmation page
//     navigate("/cart", { state: { pickup, drop, rideType } });
//   };

//   return (
//     <Container className="py-5">
//       <Row className="justify-content-center">
//         <Col md={8}>
//           <Card className="p-4 shadow-lg border-0">
//             <h2 className="text-center mb-4 fw-bold text-warning">Book Your Ride 🏍️</h2>

//             {error && <Alert variant="warning">{error}</Alert>}

//             <Form onSubmit={handleBooking}>
//               <Form.Group className="mb-3">
//                 <Form.Label className="fw-semibold text-white">📍 Pickup Location</Form.Label>
//                 <Form.Control
//                   type="text"
//                   placeholder="Enter pickup location"
//                   value={pickup}
//                   onChange={(e) => setPickup(e.target.value)}
//                   required
//                 />
//               </Form.Group>

//               <Form.Group className="mb-3">
//                 <Form.Label className="fw-semibold text-white">🏁 Drop Location</Form.Label>
//                 <Form.Control
//                   type="text"
//                   placeholder="Enter drop location"
//                   value={drop}
//                   onChange={(e) => setDrop(e.target.value)}
//                   required
//                 />
//               </Form.Group>

//               <Form.Group className="mb-4">
//                 <Form.Label className="fw-semibold text-white">🚘 Select Ride Type</Form.Label>
//                 <Form.Select value={rideType} onChange={(e) => setRideType(e.target.value)}>
//                   <option value="bike">Bike Ride</option>
//                   <option value="auto">Auto Ride</option>
//                   <option value="car">Car Ride</option>
//                 </Form.Select>
//               </Form.Group>

//               <div className="text-center">
//                 <Button type="submit" className="btn btn-warning text-dark px-4 fw-bold">
//                   Book Now
//                 </Button>
//               </div>
//             </Form>
//           </Card>
//         </Col>
//       </Row>

//       {/* Additional info */}
//      <Row className="mt-5 text-center">
//         <Col md={10} className="mx-auto">
//           <h4 className="text-warning fw-bold mb-3">Why Ride with Vroom?</h4>
//           <p className="text-muted">
//             Whether it’s a quick commute, airport drop, or city tour — Vroom ensures the fastest,
//             safest, and most affordable ride. Our trained riders, live tracking, and instant booking
//             make every trip effortless.
//           </p>
//           <img
//             src="https://images.unsplash.com/photo-1605715231414-2093b7c8a2d2?auto=format&fit=crop&w=900&q=80"
//             alt="Vroom ride illustration"
//             className="img-fluid rounded shadow mt-4"
//             style={{ maxHeight: "400px", objectFit: "cover" }}
//           />
//         </Col>
//       </Row>
//     </Container>
//   );
// };

// export default BookRide;



import React, { useState, useContext } from "react";
import { Form, Button, Card, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const BookRide = () => {
  const { user } = useContext(AuthContext);
  const [pickup, setPickup] = useState("");
  const [drop, setDrop] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const rideData = { pickup, drop, date, time };

    if (!user) {
      alert("⚠️ Please login to continue booking your ride.");
      navigate("/login");
      return;
    }

    // Save to localStorage for persistence
    localStorage.setItem("vroomCurrentRide", JSON.stringify(rideData));

    // Redirect with state (for smoother transition)
    navigate("/cart", { state: rideData });
  };

  return (
    <Container className="py-5 d-flex justify-content-center">
      <Card className="p-5 bg-dark text-light shadow rounded-4" style={{ maxWidth: "500px" }}>
        <h3 className="text-warning text-center mb-4 fw-bold">Book Your Ride 🚖</h3>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label className="text-white">Pickup Location</Form.Label>
            <Form.Control
              type="text"
              value={pickup}
              onChange={(e) => setPickup(e.target.value)}
              placeholder="Enter pickup point"
              required
              className="bg-dark text-light border-secondary"
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label className="text-white">Drop Location</Form.Label>
            <Form.Control
              type="text"
              value={drop}
              onChange={(e) => setDrop(e.target.value)}
              placeholder="Enter drop point"
              required
              className="bg-dark text-light border-secondary"
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label className="text-white">Date</Form.Label>
            <Form.Control
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              required
              className="bg-dark text-light border-secondary"
            />
          </Form.Group>

          <Form.Group className="mb-4">
            <Form.Label className="text-white">Time</Form.Label>
            <Form.Control
              type="time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
              required
              className="bg-dark text-light border-secondary"
            />
          </Form.Group>

          <Button type="submit" variant="warning" className="w-100 text-dark fw-bold">
            Book Now
          </Button>
        </Form>
      </Card>
    </Container>
  );
};

export default BookRide;
