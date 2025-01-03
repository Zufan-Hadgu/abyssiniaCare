import React from "react";
import { Link } from "react-router-dom";
import "./css/Home.css"; // Assuming you are adding custom CSS styles in a separate file
import Appimg from '../Assets/images/Appoin.jpg'
import recored from '../Assets/images/Recored.jpg'
import presc from '../Assets/images/Prescr.jpg'

const Home = () => {
  return (
    <div>
      {/* Hero Section with Background Image */}
      <div className="hero-section" id="hero">
        <div className="overlay">
          <h1 className="hero-text">Welcome to Medical Care</h1>
          <p className="hero-subtext">
            Your trusted platform for efficient and modern healthcare management.
          </p>
        </div>
      </div>

      {/* Medical Articles Section */}
      <div id="articles" className="container mt-5">
        <h2 className="mb-4">Latest Medical Articles</h2>
        <div className="row">
          {/* Article 1 */}
          <div className="col-md-4">
            <div className="card shadow-sm h-100">
              <img
                src="https://via.placeholder.com/300x200?text=Heart+Health"
                className="card-img-top"
                alt="Heart Health"
              />
              <div className="card-body">
                <h5 className="card-title">Understanding Heart Health</h5>
                <p className="card-text">
                  Learn about the importance of maintaining a healthy heart and
                  tips to improve cardiovascular wellness.
                </p>
                <a href="/articles/heart-health" className="btn btn-primary">
                  Read More
                </a>
              </div>
            </div>
          </div>
          {/* Article 2 */}
          <div className="col-md-4">
            <div className="card shadow-sm h-100">
              <img
                src="https://via.placeholder.com/300x200?text=Nutrition"
                className="card-img-top"
                alt="Nutrition"
              />
              <div className="card-body">
                <h5 className="card-title">Nutrition for a Healthy Life</h5>
                <p className="card-text">
                  Discover the key nutrients and dietary habits for a balanced
                  and healthy lifestyle.
                </p>
                <a href="/articles/nutrition" className="btn btn-primary">
                  Read More
                </a>
              </div>
            </div>
          </div>
          {/* Article 3 */}
          <div className="col-md-4">
            <div className="card shadow-sm h-100">
              <img
                src="https://via.placeholder.com/300x200?text=Mental+Health"
                className="card-img-top"
                alt="Mental Health"
              />
              <div className="card-body">
                <h5 className="card-title">Mental Health Matters</h5>
                <p className="card-text">
                  Explore ways to improve mental health and overcome everyday
                  stress and anxiety.
                </p>
                <a href="/articles/mental-health" className="btn btn-primary">
                  Read More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="Services" className="container mt-5">
      <h1 className="text-center mb-4">Our Services</h1>
      <div className="row">
        {/* Online Appointment Booking */}
        <div className="col-md-4">
          <div className="card shadow-sm h-100">
            <img
              src={Appimg}
              className="card-img-top"
              alt="Online Appointment Booking"
            />
            <div className="card-body">
              <h5 className="card-title">Online Appointment Booking</h5>
              <p className="card-text">
                Book your appointments easily from the comfort of your home and avoid long queues.
              </p>
            </div>
          </div>
        </div>
        {/* Digital Medical Records */}
        <div className="col-md-4">
          <div className="card shadow-sm h-100">
            <img
              src={recored}
              className="card-img-top"
              alt="Digital Medical Records"
            />
            <div className="card-body">
              <h5 className="card-title">Digital Medical Records</h5>
              <p className="card-text">
                Access your medical history and records anytime, securely and conveniently.
              </p>
            </div>
          </div>
        </div>
        {/* Prescription Management */}
        <div className="col-md-4">
          <div className="card shadow-sm h-100">
            <img
              src={presc}
              className="card-img-top"
              alt="Prescription Management"
            />
            <div className="card-body">
              <h5 className="card-title">Prescription Management</h5>
              <p className="card-text">
                View and manage prescriptions issued by your doctor with ease.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Home;
