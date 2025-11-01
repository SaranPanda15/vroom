// // import React from "react";
// // import { Link } from "react-router-dom";
// // import { Container, Nav, Navbar as BsNavbar } from "react-bootstrap";

// // const Navbar = () => (
// //   <BsNavbar bg="dark" variant="dark" expand="lg" sticky="top">
// //     <Container>
// //       <BsNavbar.Brand as={Link} to="/">🚴‍♂️ Vroom</BsNavbar.Brand>
// //       <BsNavbar.Toggle aria-controls="basic-navbar-nav" />
// //       <BsNavbar.Collapse id="basic-navbar-nav">
// //         <Nav className="ms-auto">
// //           <Nav.Link as={Link} to="/">Home</Nav.Link>
// //           <Nav.Link as={Link} to="/book">Book a Ride</Nav.Link>
// //           <Nav.Link as={Link} to="/login">Login</Nav.Link>
// //           <Nav.Link as={Link} to="/signup">Signup</Nav.Link>
// //         </Nav>
// //       </BsNavbar.Collapse>
// //     </Container>
// //   </BsNavbar>
// // );

// // export default Navbar;





// import React, { useEffect, useState } from "react";
// import { Navbar, Nav, Container, Button, Dropdown, Badge } from "react-bootstrap";
// import { Link, useNavigate } from "react-router-dom";
// import { FaBell, FaShoppingCart, FaUserCircle } from "react-icons/fa";

// const NavbarComponent = () => {
//   const [user, setUser] = useState(null);
//   const [notifications, setNotifications] = useState(2); // demo notifications
//   const navigate = useNavigate();

//   useEffect(() => {
//     const loggedUser = JSON.parse(localStorage.getItem("vroomUser"));
//     if (loggedUser) {
//       setUser(loggedUser);
//     }
//   }, []);

//   const handleLogout = () => {
//     localStorage.removeItem("vroomUser");
//     setUser(null);
//     navigate("/");
//   };

//   return (
//     <Navbar bg="dark" variant="dark" expand="lg" sticky="top" className="shadow-sm">
//       <Container>
//         {/* Brand / Logo */}
//         <Navbar.Brand as={Link} to="/" className="fw-bold text-warning fs-3">
//           Vroom 🚗
//         </Navbar.Brand>

//         <Navbar.Toggle aria-controls="vroom-navbar" />
//         <Navbar.Collapse id="vroom-navbar" className="justify-content-end">
//           {!user ? (
//             // =============== NAVBAR FOR VISITORS ===============
//             <Nav className="align-items-center">
//               <Nav.Link as={Link} to="/" className="mx-2 text-light">
//                 Home
//               </Nav.Link>
//               <Nav.Link as={Link} to="/about" className="mx-2 text-light">
//                 About
//               </Nav.Link>
//               <Nav.Link as={Link} to="/book" className="mx-2 text-light">
//                 Book a Ride
//               </Nav.Link>
//               <Button as={Link} to="/login" variant="outline-warning" className="mx-2">
//                 Login
//               </Button>
//               <Button as={Link} to="/signup" variant="warning" className="text-dark fw-bold mx-2">
//                 Sign Up
//               </Button>
//             </Nav>
//           ) : (
//             // =============== NAVBAR FOR LOGGED-IN USERS ===============
//             <Nav className="align-items-center">
//               <Nav.Link as={Link} to="/dashboard" className="mx-2 text-light">
//                 Dashboard
//               </Nav.Link>
//               <Nav.Link as={Link} to="/book" className="mx-2 text-light">
//                 Book a Ride
//               </Nav.Link>

//               {/* Notifications */}
//               {/* <Nav.Link as={Link} to="/notifications" className="mx-2 position-relative">
//                 <FaBell size={20} className="text-warning" />
//                 {notifications > 0 && (
//                   <Badge
//                     bg="danger"
//                     pill
//                     className="position-absolute top-0 start-100 translate-middle"
//                     style={{ fontSize: "0.7rem" }}
//                   >
//                     {notifications}
//                   </Badge>
//                 )}
//               </Nav.Link> */}

//               {/* Cart */}
//               <Nav.Link as={Link} to="/cart" className="mx-2">
//                 <FaShoppingCart size={20} className="text-warning" />
//               </Nav.Link>

//               {/* Profile Dropdown */}
//               <Dropdown align="end" className="ms-2">
//                 <Dropdown.Toggle variant="warning" className="text-dark fw-semibold border-0">
//                   <FaUserCircle className="me-2" />
//                   {user.name || "User"}
//                 </Dropdown.Toggle>

//                 <Dropdown.Menu>
//                   <Dropdown.Item as={Link} to="/profile">
//                     View Profile
//                   </Dropdown.Item>
//                   <Dropdown.Item as={Link} to="/myrides">
//                     My Rides
//                   </Dropdown.Item>
//                   <Dropdown.Divider />
//                   <Dropdown.Item onClick={handleLogout} className="text-danger fw-semibold">
//                     Logout
//                   </Dropdown.Item>
//                 </Dropdown.Menu>
//               </Dropdown>
//             </Nav>
//           )}
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// };

// export default NavbarComponent;




import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { FaUserCircle, FaShoppingCart } from "react-icons/fa";
import { Navbar, Nav, Container, Button, Dropdown } from "react-bootstrap";


const VroomNavbar = () => {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="shadow-sm">
      <Container>
        <Navbar.Brand as={Link} to="/" className="fw-bold text-warning">
          🚗 Vroom
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ms-auto align-items-center">
            {user ? (
              <>
                <Nav.Link as={Link} to="/dashboard">Dashboard</Nav.Link>
                {/* <Nav.Link as={Link} to="/myrides">My Rides</Nav.Link> */}
                <Nav.Link as={Link} to="/cart">
                  <FaShoppingCart className="me-1" /> Cart
                </Nav.Link>

                {/* <Nav.Link as={Link} to="/profile">
                  <FaUserCircle className="me-1" /> {user.name.split(" ")[0]}
                </Nav.Link> */}

                <Dropdown align="end" className="ms-2">
                  <Dropdown.Toggle variant="warning" className="text-dark fw-semibold border-0">
                    <FaUserCircle className="me-2" />
                    {user.name || "User"}
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item as={Link} to="/profile">
                      View Profile
                    </Dropdown.Item>
                    <Dropdown.Item as={Link} to="/myrides">
                      My Rides
                    </Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item onClick={handleLogout} className="text-danger fw-semibold">
                      Logout
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>

              </>
            ) : (
              <>
                <Nav className="align-items-center">
                  <Nav.Link as={Link} to="/" className="mx-2 text-light">
                    Home
                  </Nav.Link>
                  <Nav.Link as={Link} to="/about" className="mx-2 text-light">
                    About
                  </Nav.Link>
                  <Nav.Link as={Link} to="/book" className="mx-2 text-light">
                    Book a Ride
                  </Nav.Link>
                  <Button as={Link} to="/login" variant="outline-warning" className="mx-2">
                    Login
                  </Button>
                  <Button as={Link} to="/signup" variant="warning" className="text-dark fw-bold mx-2">
                    Sign Up
                  </Button>
                </Nav>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default VroomNavbar;
