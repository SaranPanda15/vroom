// import React, { useState, useEffect } from "react";
// import { Form, Button, Container, Row, Col, Card, Alert } from "react-bootstrap";
// import { useNavigate } from "react-router-dom";

// const Login = () => {
//   const navigate = useNavigate();

//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");
//   const [success, setSuccess] = useState("");

//   // If already logged in, redirect
//   useEffect(() => {
//     const user = localStorage.getItem("vroomUser");
//     if (user) navigate("/dashboard");
//   }, [navigate]);

//   const handleLogin = (e) => {
//     e.preventDefault();
//     const storedUser = JSON.parse(localStorage.getItem("vroomUserData"));

//     if (!storedUser || storedUser.email !== email || storedUser.password !== password) {
//       setError("Invalid credentials! Please signup first or check your details.");
//       return;
//     }

//     localStorage.setItem("vroomUser", JSON.stringify(storedUser));
//     setSuccess("Login successful! Redirecting to Dashboard...");
//     setError("");
//     setTimeout(() => navigate("/dashboard"), 1500);
//   };

//   return (
//     <Container className="py-5">
//       <Row className="justify-content-center align-items-center">
//         <Col md={6}>
//           <Card className="p-4 shadow-lg border-0">
//             <h2 className="text-center mb-4 fw-bold text-warning">Welcome Back to Vroom 🚗</h2>
//             {error && <Alert variant="danger">{error}</Alert>}
//             {success && <Alert variant="success">{success}</Alert>}

//             <Form onSubmit={handleLogin}>
//               <Form.Group className="mb-3">
//                 <Form.Label className="fw-semibold text-white">Email</Form.Label>
//                 <Form.Control
//                   type="email"
//                   placeholder="Enter your email"
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                   required
//                 />
//               </Form.Group>

//               <Form.Group className="mb-4">
//                 <Form.Label className="fw-semibold text-white">Password</Form.Label>
//                 <Form.Control
//                   type="password"
//                   placeholder="Enter your password"
//                   value={password}
//                   onChange={(e) => setPassword(e.target.value)}
//                   required
//                 />
//               </Form.Group>

//               <div className="text-center mb-3">
//                 <Button type="submit" className="btn btn-warning text-dark fw-bold px-4">
//                   Login
//                 </Button>
//               </div>

//               <p className="text-center text-muted">
//                 Don’t have an account?{" "}
//                 <span
//                   onClick={() => navigate("/signup")}
//                   style={{ color: "#FFD700", cursor: "pointer", fontWeight: "600" }}
//                 >
//                   Signup here
//                 </span>
//               </p>
//             </Form>
//           </Card>
//         </Col>
//       </Row>
//     </Container>
//   );
// };

// export default Login;



import React, { useState, useContext } from "react";
import { Form, Button, Card, Container } from "react-bootstrap";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const { login } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // For demo, we’re not checking a real backend
    const demoUser = { name: "John Doe", email };
    login(demoUser); // update global context + localStorage
    alert("✅ Login successful!");
    navigate("/dashboard");
  };

  return (
    <Container className="py-5 d-flex justify-content-center">
      <Card className="p-5 bg-dark text-light shadow rounded-4" style={{ maxWidth: "400px" }}>
        <h3 className="text-warning text-center fw-bold mb-4">Login to Vroom</h3>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label className="fw-semibold text-white">Email</Form.Label>
            <Form.Control
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="Enter your email"
              className="bg-dark text-light border-secondary"
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label className="fw-semibold text-white">Password</Form.Label>
            <Form.Control
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="Enter your password"
              className="bg-dark text-light border-secondary"
            />
          </Form.Group>
          <Button variant="warning" type="submit" className="w-100 text-dark fw-bold">
            Login
          </Button>

          <p className="text-center text-muted mt-3">
            Don’t have an account?{" "}
            <span
              onClick={() => navigate("/signup")}
              style={{ color: "#FFD700", cursor: "pointer", fontWeight: "600" }}
            >
              Signup here
            </span>
          </p>
        </Form>
      </Card>
    </Container>
  );
};

export default LoginPage;
