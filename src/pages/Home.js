import React from "react";
import { Link } from "react-router-dom";
import "./css/Home.css"; // Assuming you are adding custom CSS styles in a separate file
import Appimg from '../Assets/images/Appoin.jpg'
import recored from '../Assets/images/Recored.jpg'
import presc from '../Assets/images/Prescr.jpg'
import docfam from '../Assets/images/doctorwithfamily.jpg'
import heart from "../Assets/images/heart (1).png"
import nutriton from "../Assets/images/heart (2).png"
import mental from "../Assets/images/heart (3).png"
 

const Home = () => {
  return (
    <div>
      {/* Hero Section with Background Image */}
       
   
       
 
      <div className="hero-section">
        <div className="hero-content">
          {/* Overlapping Text Container */}
          <div className="text-container">
            <h1>We Take Care Of Your Healthy Health</h1>
            <p>
              Mimple dummy text of the printing type setting area lead spsum
              dolor onsecte dipiscing. Mimple dummy text printing apsum dolor
              onsecte dipiscing.
            </p>
            <button className="cta-button"><a className="nav-link" href="#Services"> see our Services</a></button>
          </div>
          {/* Image Section */}
          <div className="image-container">
            <img
              src={docfam}// Replace with your actual image path
              alt="Doctor with family"
            />
          </div>
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
                src={heart}
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
                src={nutriton}
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
                src={mental}
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
 
    <div id="Services" className="container mt-5 pb-3">
      <h1 className="text-center mb-4">Our Services</h1>
      <div className="row services-section">
        {/* Service 1 */}
        <div className="col-md-3 col-sm-6">
          <div className="service-card">
            <div className="service-icon">
              <i className="fas fa-user-md"></i>
            </div>
            <h5 className="service-title">Online Appointment Booking </h5>
            <p className="service-text">
            Book your appointments easily from the comfort of your home.
            </p>
          </div>
        </div>
        {/* Service 2 */}
        <div className="col-md-3 col-sm-6">
          <div className="service-card">
            <div className="service-icon">
              <i class="fa-solid fa-notes-medical"></i>
            </div>
            <h5 className="service-title">Digital Medical recoreds</h5>
            <p className="service-text">
            Access your medical history and records anytime, securely and conveniently.
            </p>
          </div>
        </div>
        {/* Service 3 */}
        <div className="col-md-3 col-sm-6">
          <div className="service-card">
            <div className="service-icon">
            <i className="fas fa-prescription"></i>
            </div>
            <h5 className="service-title">Prescription Management</h5>
            <p className="service-text">
            View and manage prescriptions issued by your doctor with ease.
            </p>
          </div>
        </div>
         
      </div>
    </div>
 

    </div>
  );
};

export default Home;
