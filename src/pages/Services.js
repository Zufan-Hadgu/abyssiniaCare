import React from "react";
import Appimg from '../images/Appoin.jpg'
import recored from '../images/Recored.jpg'
import presc from '../images/Prescr.jpg'

const Services = () => {
  return (
    <div className="container mt-5">
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
  );
};

export default Services;
