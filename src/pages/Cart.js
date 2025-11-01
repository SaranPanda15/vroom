// import React, { useEffect, useState, useRef } from "react";
// import { Container, Row, Col, Card, Button, Form } from "react-bootstrap";
// import { useNavigate } from "react-router-dom";
// import { FaMapMarkerAlt, FaRupeeSign, FaClock, FaArrowRight } from "react-icons/fa";

// const CartPage = () => {
//   const navigate = useNavigate();
//   const mapRef = useRef(null);
//   const carMarkerRef = useRef(null);
//   const pathPolylineRef = useRef(null);

//   const [rideDetails, setRideDetails] = useState({
//     pickup: "MG Road, Bengaluru",
//     drop: "Electronic City, Bengaluru",
//     distance: "14.2 km",
//     time: "28 mins",
//     fare: 210,
//   });

//   const [paymentMethod, setPaymentMethod] = useState("cash");
//   const [user, setUser] = useState(null);

//   useEffect(() => {
//     const loggedUser = JSON.parse(localStorage.getItem("vroomUser"));
//     if (!loggedUser) {
//       alert("⚠️ Please login to continue booking your ride.");
//       navigate("/login");
//     } else {
//       setUser(loggedUser);
//     }

//     initMap();
//   }, [navigate]);

//   const handleProceed = () => {
//     localStorage.setItem("rideSummary", JSON.stringify({ ...rideDetails, paymentMethod }));
//     navigate("/payment");
//   };

//   // Initialize the Google Map with route animation
//   const initMap = () => {
//     if (!window.google) return;

//     const map = new window.google.maps.Map(mapRef.current, {
//       zoom: 13,
//       center: { lat: 12.9716, lng: 77.5946 },
//       disableDefaultUI: true,
//       styles: [
//         { elementType: "geometry", stylers: [{ color: "#1d1d1d" }] },
//         { elementType: "labels.text.fill", stylers: [{ color: "#ffffff" }] },
//         { featureType: "road", elementType: "geometry", stylers: [{ color: "#2b2b2b" }] },
//         { featureType: "water", elementType: "geometry", stylers: [{ color: "#000000" }] },
//       ],
//     });

//     const start = { lat: 12.975, lng: 77.604 };
//     const end = { lat: 12.843, lng: 77.677 };
//     const path = generateRandomPath(start, end, 6);

//     // Draw route
//     const polyline = new window.google.maps.Polyline({
//       path,
//       geodesic: true,
//       strokeColor: "#FFD700",
//       strokeOpacity: 0.9,
//       strokeWeight: 4,
//     });
//     polyline.setMap(map);
//     pathPolylineRef.current = polyline;

//     // Add car marker
//     const carIcon = {
//       url: "https://cdn-icons-png.flaticon.com/512/743/743131.png",
//       scaledSize: new window.google.maps.Size(50, 50),
//     };

//     const carMarker = new window.google.maps.Marker({
//       position: path[0],
//       map,
//       icon: carIcon,
//     });

//     carMarkerRef.current = carMarker;

//     // Animate car
//     animateCar(carMarker, path, map);
//   };

//   // Generate a random curved path between start and end
//   const generateRandomPath = (start, end, points = 5) => {
//     const path = [start];
//     for (let i = 1; i <= points; i++) {
//       const lat = start.lat + (end.lat - start.lat) * (i / (points + 1)) + (Math.random() - 0.5) * 0.02;
//       const lng = start.lng + (end.lng - start.lng) * (i / (points + 1)) + (Math.random() - 0.5) * 0.02;
//       path.push({ lat, lng });
//     }
//     path.push(end);
//     return path;
//   };

//   // Smooth car animation along route
//   const animateCar = (marker, path, map) => {
//     let index = 0;
//     function move() {
//       if (index < path.length) {
//         marker.setPosition(path[index]);
//         map.panTo(path[index]);
//         index++;
//         setTimeout(move, 1000);
//       } else {
//         index = 0;
//         move(); // loop animation
//       }
//     }
//     move();
//   };

//   return (
//     <Container fluid className="py-5">
//       <Row className="justify-content-center">
//         {/* LEFT SIDE - Ride Details */}
//         <Col md={5} className="mb-4">
//           <Card className="p-4 shadow-lg border-0 cart-card bg-dark text-light">
//             <h3 className="fw-bold text-warning mb-4 text-center">🚗 Review Your Ride</h3>
//             <Row>
//               <Col xs={12} className="mb-3">
//                 <div className="d-flex align-items-center">
//                   <FaMapMarkerAlt className="text-warning me-2" />
//                   <div>
//                     <p className="mb-0 fw-semibold text-secondary">Pickup</p>
//                     <h6>{rideDetails.pickup}</h6>
//                   </div>
//                 </div>
//               </Col>
//               <Col xs={12} className="mb-3">
//                 <div className="d-flex align-items-center">
//                   <FaMapMarkerAlt className="text-warning me-2" />
//                   <div>
//                     <p className="mb-0 fw-semibold text-secondary">Drop</p>
//                     <h6>{rideDetails.drop}</h6>
//                   </div>
//                 </div>
//               </Col>
//               <Col md={4} className="mt-3">
//                 <FaClock className="text-warning me-2" /> {rideDetails.time}
//               </Col>
//               <Col md={4} className="mt-3">
//                 <FaRupeeSign className="text-warning me-2" /> {rideDetails.fare}
//               </Col>
//               <Col md={4} className="mt-3">
//                 <FaMapMarkerAlt className="text-warning me-2" /> {rideDetails.distance}
//               </Col>
//             </Row>
//             <hr className="my-4 text-secondary" />
//             <Form>
//               <Form.Group className="mb-3">
//                 <Form.Label className="fw-semibold text-warning">
//                   💳 Payment Method
//                 </Form.Label>
//                 <Form.Check
//                   type="radio"
//                   label="Cash"
//                   name="payment"
//                   value="cash"
//                   checked={paymentMethod === "cash"}
//                   onChange={(e) => setPaymentMethod(e.target.value)}
//                 />
//                 <Form.Check
//                   type="radio"
//                   label="UPI / Wallet"
//                   name="payment"
//                   value="upi"
//                   checked={paymentMethod === "upi"}
//                   onChange={(e) => setPaymentMethod(e.target.value)}
//                 />
//                 <Form.Check
//                   type="radio"
//                   label="Card"
//                   name="payment"
//                   value="card"
//                   checked={paymentMethod === "card"}
//                   onChange={(e) => setPaymentMethod(e.target.value)}
//                 />
//               </Form.Group>
//             </Form>
//             <div className="text-center mt-4">
//               <Button variant="warning" className="text-dark fw-bold px-4" onClick={handleProceed}>
//                 Proceed to Payment <FaArrowRight className="ms-2" />
//               </Button>
//             </div>
//           </Card>
//         </Col>

//         {/* RIGHT SIDE - Google Map */}
//         <Col md={6}>
//           <div
//             ref={mapRef}
//             style={{
//               width: "100%",
//               height: "550px",
//               borderRadius: "14px",
//               overflow: "hidden",
//               boxShadow: "0 0 15px rgba(255,215,0,0.25)",
//             }}
//           ></div>
//         </Col>
//       </Row>
//     </Container>
//   );
// };

// export default CartPage;


// //=======================================================================


// // import React, { useEffect, useState, useRef } from "react";
// // import { Container, Row, Col, Card, Button, Form } from "react-bootstrap";
// // import { useNavigate } from "react-router-dom";
// // import { FaMapMarkerAlt, FaRupeeSign, FaClock, FaArrowRight } from "react-icons/fa";

// // const CartPage = () => {
// //   const navigate = useNavigate();
// //   const mapRef = useRef(null);
// //   const carMarkerRef = useRef(null);
// //   const routePolylineRef = useRef(null);

// //   const [rideDetails, setRideDetails] = useState({
// //     pickup: "Indiranagar, Bengaluru",
// //     drop: "Electronic City, Bengaluru",
// //     distance: "0 km",
// //     time: "0 mins",
// //     fare: 0,
// //   });

// //   const [paymentMethod, setPaymentMethod] = useState("cash");
// //   const [user, setUser] = useState(null);

// //   useEffect(() => {
// //     const loggedUser = JSON.parse(localStorage.getItem("vroomUser"));
// //     if (!loggedUser) {
// //       alert("⚠️ Please login to continue booking your ride.");
// //       navigate("/login");
// //     } else {
// //       setUser(loggedUser);
// //       initMap();
// //     }
// //   }, [navigate]);

// //   const handleProceed = () => {
// //     localStorage.setItem("rideSummary", JSON.stringify({ ...rideDetails, paymentMethod }));
// //     navigate("/payment");
// //   };

// //   const initMap = () => {
// //     if (!window.google) return;

// //     const map = new window.google.maps.Map(mapRef.current, {
// //       zoom: 13,
// //       center: { lat: 12.9716, lng: 77.5946 },
// //       disableDefaultUI: true,
// //       styles: [
// //         { elementType: "geometry", stylers: [{ color: "#1d1d1d" }] },
// //         { elementType: "labels.text.fill", stylers: [{ color: "#ffffff" }] },
// //         { featureType: "road", elementType: "geometry", stylers: [{ color: "#2b2b2b" }] },
// //         { featureType: "water", elementType: "geometry", stylers: [{ color: "#000000" }] },
// //       ],
// //     });

// //     const directionsService = new window.google.maps.DirectionsService();
// //     const directionsRenderer = new window.google.maps.DirectionsRenderer({
// //       suppressMarkers: true,
// //       polylineOptions: {
// //         strokeColor: "#FFD700",
// //         strokeWeight: 5,
// //       },
// //     });
// //     directionsRenderer.setMap(map);

// //     const start = rideDetails.pickup;
// //     const end = rideDetails.drop;

// //     directionsService.route(
// //       {
// //         origin: start,
// //         destination: end,
// //         travelMode: "DRIVING",
// //       },
// //       (response, status) => {
// //         if (status === "OK") {
// //           directionsRenderer.setDirections(response);

// //           const route = response.routes[0].overview_path;
// //           animateCarAlongRoute(map, route);

// //           const distance = response.routes[0].legs[0].distance.text;
// //           const duration = response.routes[0].legs[0].duration.text;
// //           const fare = Math.floor(Math.random() * 150) + 100;

// //           setRideDetails((prev) => ({
// //             ...prev,
// //             distance,
// //             time: duration,
// //             fare,
// //           }));
// //         } else {
// //           console.error("Directions request failed due to", status);
// //         }
// //       }
// //     );
// //   };

// //   const animateCarAlongRoute = (map, route) => {
// //     const carIcon = {
// //       url: "https://cdn-icons-png.flaticon.com/512/743/743131.png",
// //       scaledSize: new window.google.maps.Size(50, 50),
// //     };

// //     const carMarker = new window.google.maps.Marker({
// //       position: route[0],
// //       map,
// //       icon: carIcon,
// //     });
// //     carMarkerRef.current = carMarker;

// //     let index = 0;

// //     function moveCar() {
// //       if (index < route.length) {
// //         carMarker.setPosition(route[index]);
// //         map.panTo(route[index]);
// //         index++;
// //         setTimeout(moveCar, 200);
// //       } else {
// //         index = 0; // loop animation
// //         moveCar();
// //       }
// //     }

// //     moveCar();
// //   };

// //   return (
// //     <Container fluid className="py-5">
// //       <Row className="justify-content-center">
// //         {/* LEFT SIDE - Ride Details */}
// //         <Col md={5} className="mb-4">
// //           <Card className="p-4 shadow-lg border-0 cart-card bg-dark text-light">
// //             <h3 className="fw-bold text-warning mb-4 text-center">🚗 Review Your Ride</h3>
// //             <Row>
// //               <Col xs={12} className="mb-3">
// //                 <div className="d-flex align-items-center">
// //                   <FaMapMarkerAlt className="text-warning me-2" />
// //                   <div>
// //                     <p className="mb-0 fw-semibold text-secondary">Pickup</p>
// //                     <h6>{rideDetails.pickup}</h6>
// //                   </div>
// //                 </div>
// //               </Col>
// //               <Col xs={12} className="mb-3">
// //                 <div className="d-flex align-items-center">
// //                   <FaMapMarkerAlt className="text-warning me-2" />
// //                   <div>
// //                     <p className="mb-0 fw-semibold text-secondary">Drop</p>
// //                     <h6>{rideDetails.drop}</h6>
// //                   </div>
// //                 </div>
// //               </Col>
// //               <Col md={4} className="mt-3">
// //                 <FaClock className="text-warning me-2" /> {rideDetails.time}
// //               </Col>
// //               <Col md={4} className="mt-3">
// //                 <FaRupeeSign className="text-warning me-2" /> {rideDetails.fare}
// //               </Col>
// //               <Col md={4} className="mt-3">
// //                 <FaMapMarkerAlt className="text-warning me-2" /> {rideDetails.distance}
// //               </Col>
// //             </Row>
// //             <hr className="my-4 text-secondary" />
// //             <Form>
// //               <Form.Group className="mb-3">
// //                 <Form.Label className="fw-semibold text-warning">💳 Payment Method</Form.Label>
// //                 <Form.Check
// //                   type="radio"
// //                   label="Cash"
// //                   name="payment"
// //                   value="cash"
// //                   checked={paymentMethod === "cash"}
// //                   onChange={(e) => setPaymentMethod(e.target.value)}
// //                 />
// //                 <Form.Check
// //                   type="radio"
// //                   label="UPI / Wallet"
// //                   name="payment"
// //                   value="upi"
// //                   checked={paymentMethod === "upi"}
// //                   onChange={(e) => setPaymentMethod(e.target.value)}
// //                 />
// //                 <Form.Check
// //                   type="radio"
// //                   label="Card"
// //                   name="payment"
// //                   value="card"
// //                   checked={paymentMethod === "card"}
// //                   onChange={(e) => setPaymentMethod(e.target.value)}
// //                 />
// //               </Form.Group>
// //             </Form>
// //             <div className="text-center mt-4">
// //               <Button variant="warning" className="text-dark fw-bold px-4" onClick={handleProceed}>
// //                 Proceed to Payment <FaArrowRight className="ms-2" />
// //               </Button>
// //             </div>
// //           </Card>
// //         </Col>

// //         {/* RIGHT SIDE - Google Map */}
// //         <Col md={6}>
// //           <div
// //             ref={mapRef}
// //             style={{
// //               width: "100%",
// //               height: "550px",
// //               borderRadius: "14px",
// //               overflow: "hidden",
// //               boxShadow: "0 0 15px rgba(255,215,0,0.25)",
// //             }}
// //           ></div>
// //         </Col>
// //       </Row>
// //     </Container>
// //   );
// // };

// // export default CartPage;





import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { GoogleMap, LoadScript, DirectionsRenderer } from "@react-google-maps/api";

const CartPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [ride, setRide] = useState(null);
  const [directions, setDirections] = useState(null);

  useEffect(() => {
    // Get from router state or localStorage fallback
    const stateRide = location.state;
    const storedRide = localStorage.getItem("vroomCurrentRide");

    if (stateRide) {
      setRide(stateRide);
      localStorage.setItem("vroomCurrentRide", JSON.stringify(stateRide));
    } else if (storedRide) {
      setRide(JSON.parse(storedRide));
    } else {
      alert("⚠️ No ride details found! Please book a ride first.");
      navigate("/book");
    }
  }, [location.state, navigate]);

  // Load Google Directions for actual route
  useEffect(() => {
    if (!ride?.pickup || !ride?.drop) return;

    const directionsService = new window.google.maps.DirectionsService();
    directionsService.route(
      {
        origin: ride.pickup,
        destination: ride.drop,
        travelMode: window.google.maps.TravelMode.DRIVING,
      },
      (result, status) => {
        if (status === "OK") {
          setDirections(result);
        } else {
          console.error(`Error fetching directions: ${status}`);
        }
      }
    );
  }, [ride]);

  return (
    <Container className="py-4">
      <Row>
        <Col md={5}>
          <Card className="p-4 bg-dark text-light shadow-lg border-0 rounded-4">
            <h4 className="text-warning mb-4 fw-bold">🧾 Review Your Ride</h4>
            {ride ? (
              <>
                <p><strong>Pickup: </strong> {ride.pickup}</p>
                <p><strong>Drop: </strong> {ride.drop}</p>
                <p><strong>Date: </strong> {ride.date}</p>
                <p><strong>Time: </strong> {ride.time}</p>
                <hr />
                <h5 className="text-warning">Estimated Fare: ₹{Math.floor(Math.random() * 150 + 120)}</h5>
                <Button
                  variant="warning"
                  className="w-100 text-dark fw-bold mt-3"
                  onClick={() => navigate("/payment")}
                >
                  Proceed to Payment
                </Button>
              </>
            ) : (
              <p>Loading ride details...</p>
            )}
          </Card>
        </Col>

        <Col md={7} className="mt-4 mt-md-0">
          <div style={{ height: "400px", width: "100%" }}>
            {ride && (
              <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY">
                <GoogleMap
                  mapContainerStyle={{ height: "100%", width: "100%" }}
                  center={{ lat: 12.9716, lng: 77.5946 }}
                  zoom={12}
                >
                  {directions && <DirectionsRenderer directions={directions} />}
                </GoogleMap>
              </LoadScript>
            )}
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default CartPage;
