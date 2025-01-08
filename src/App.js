import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import PatientDashboard from "./pages/Patient/PatientDashboard";
import DoctorDashboard from "./pages/Doctor/doctorDashboard";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(
    localStorage.getItem("isAuthenticated") === "true" // Persist state
  );
  const [userType, setUserType] = useState(localStorage.getItem("userType")); // Persist user type

  useEffect(() => {
    // Update localStorage when authentication changes
    localStorage.setItem("isAuthenticated", isAuthenticated);
    localStorage.setItem("userType", userType);
  }, [isAuthenticated, userType]);

  return (
    <Router>
      <div className="d-flex flex-column min-vh-100">
        <Header userType={userType} setIsAuthenticated={setIsAuthenticated} setUserType={setUserType} />
        <main className="flex-grow-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
  path="/login"
  element={
    <Login
      setIsAuthenticated={setIsAuthenticated}
      setUserType={setUserType}
    />
  }
/>

            <Route path="/register" element={<Register />} />
            <Route
              path="/patient-dashboard/*"
              element={
                isAuthenticated && userType === "patient" ? (
                  <PatientDashboard />
                ) : (
                  <Navigate to="/login" />
                )
              }
            />
            <Route
              path="/doctor-dashboard/*"
              element={
                isAuthenticated && userType === "doctor" ? (
                  <DoctorDashboard />
                ) : (
                  <Navigate to="/login" />
                )
              }
            />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;