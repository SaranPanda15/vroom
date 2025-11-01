import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import BookRide from "./pages/BookRide";
import Cart from "./pages/Cart";
import Payment from "./pages/Payment";
import RideSuccess from "./pages/RideSuccess";
import Footer from "./components/Footer";
import ProfilePage from "./pages/ProfilePage";
import MyRidesPage from "./pages/MyRidesPage";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/book" element={<BookRide />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/success" element={<RideSuccess />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/myrides" element={<MyRidesPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
