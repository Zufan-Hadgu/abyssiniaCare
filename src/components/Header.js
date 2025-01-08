import React from "react";
import './Header.css';
import { Link, useNavigate } from "react-router-dom";

const Header = ({ userType, setIsAuthenticated, setUserType }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    setIsAuthenticated(false);
    setUserType(null);
    navigate('/'); // Redirect to the landing page
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark custom-bg" style={{ backgroundColor: '#0089ba' }}>
      <div className="container d-flex justify-content-between align-items-center">
        <a className="navbar-brand" href="#hero">AbyssiniaCare</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            {userType === null && (
              <>
                <li className="nav-item">
                  <a className="nav-link" href="#hero">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#Services">Services</a>
                </li>
              </>
            )}
            {userType === 'patient' && (
              <>
                <li className="nav-item">
                  <Link className="nav-link" to="/patient-dashboard">Dashboard</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/patient-dashboard/profile">Profile</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/patient-dashboard/history">Medical History</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/patient-dashboard/appointments">Appointments</Link>
                </li>
              </>
            )}
            {userType === 'doctor' && (
              <>
                <li className="nav-item">
                  <Link className="nav-link" to="/doctor-dashboard">Home</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/doctor-dashboard/Profile">Profile</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/doctor-dashboard/Appointments">Appointment</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/doctor-dashboard/Patient">Patient</Link>
                </li>
              </>
            )}
            {userType === 'admin' && (
              <>
                <li className="nav-item">
                  <Link className="nav-link" to="/admin-dashboard">Dashboard</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/user-management">User Management</Link>
                </li>
              </>
            )}
            <li className="nav-item">
              {userType ? (
                <button className="nav-link btn btn-link" onClick={handleLogout}>Logout</button>
              ) : (
                <Link className="nav-link" to="/login">Login</Link>
              )}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
