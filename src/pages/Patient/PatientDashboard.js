 
import { Routes, Route,  useNavigate } from 'react-router-dom';
import Header from '../../components/Header'; // Import your existing header component

import React, { useState } from "react";
import Calendar from "react-calendar"; // Install with `npm install react-calendar`
import "react-calendar/dist/Calendar.css";
import "../css/AppointmentsContent.css"; 
import hero from "../../Assets/images/scott-graham-OQMZwNd3ThU-unsplash.jpg"
import "../css/patient_list.css"
 

 
 
 
 

const HomeContent = () => {
  const navigate = useNavigate();

  const handleNavigation = (route) => {
    navigate(route);
  };

  return (
    <div>
      {/* Hero Section */}
      <div
        className="hero-section"
        style={{
          backgroundImage: `url(${hero})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          width: "100vw", // Full width of the viewport
          height: "100vh", // Full height of the viewport
          margin: "0", // No margin
          padding: "0", // No padding
          overflow: "hidden", // Prevent any overflow
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          color: "white",
          textAlign: "center",
        }}
      >
        <div className="hero-content">
          <h1 className="display-4 fw-bold">Welcome to Your Dashboard</h1>
          <p className="lead">
            Empowering your health journey with convenience and care. Access your appointments, history, and more in one place.
          </p>
        </div>
      </div>

      {/* Cards Section */}
      <div className="container my-5">
        <div className="row">
          {/* Profile Card */}
          <div className="col-md-4">
            <div className="card shadow-sm">
              <div className="card-body text-center">
                <h5 className="card-title">Profile</h5>
                <p className="card-text">View and edit your personal profile details.</p>
                <button
                  className="btn btn-primary"
                  onClick={() => handleNavigation("/patient-dashboard/profile")}
                >
                  Go to Profile
                </button>
              </div>
            </div>
          </div>

          {/* Medical History Card */}
          <div className="col-md-4">
            <div className="card shadow-sm">
              <div className="card-body text-center">
                <h5 className="card-title">Medical History</h5>
                <p className="card-text">Access your complete medical history and your prescription detail</p>
                <button
                  className="btn btn-primary"
                  onClick={() => handleNavigation("/patient-dashboard/history")}
                >
                  View Medical History
                </button>
              </div>
            </div>
          </div>

          {/* Appointment Details Card */}
          <div className="col-md-4">
            <div className="card shadow-sm">
              <div className="card-body text-center">
                <h5 className="card-title">Appointment Details</h5>
                <p className="card-text">You can book you appointment with your prefered date and doctor</p>
                <button
                  className="btn btn-primary"
                  onClick={() => handleNavigation("/patient-dashboard/appointments")}
                >
                  View Appointments
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

 

 

 


 


const ProfileContent = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState({
    name: "John Doe",
    email: "johndoe@example.com",
    phone: "+123 456 7890",
    address: "123 Health Street, Wellness City",
    dob: "1990-01-01",
  });
  const [profilePhoto, setProfilePhoto] = useState(null);

  // Toggle edit mode
  const handleEdit = () => {
    setIsEditing(!isEditing);
  };

  // Update form field values
  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfileData({ ...profileData, [name]: value });
  };

  // Handle profile photo upload
  const handlePhotoUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => setProfilePhoto(e.target.result);
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="container my-4">
      <div className="row">
        {/* Left Card */}
        <div className="col-md-4">
          <div className="card shadow-lg" style={{ backgroundColor: "#e3f2fd" }}>
            <div className="card-body text-center">
              <div className="profile-photo mb-3">
                <img
                  src={profilePhoto || "https://via.placeholder.com/150?text=Your+Photo"}
                  alt="Profile"
                  className="rounded-circle img-fluid"
                  style={{ width: "150px", height: "150px", objectFit: "cover" }}
                />
              </div>
              <h5 className="mt-3">{profileData.name}</h5>
              <p><strong>Phone:</strong> {profileData.phone}</p>
            </div>
          </div>
        </div>

        {/* Right Card */}
        <div className="col-md-8">
          <div className="card shadow-lg" style={{ backgroundColor: "#bbdefb" }}>
            <div className="card-body">
              <h5 className="mb-4">Update Information</h5>
              {!isEditing ? (
                <div>
                  <p><strong>Name:</strong> {profileData.name}</p>
                  <p><strong>Email:</strong> {profileData.email}</p>
                  <p><strong>Phone:</strong> {profileData.phone}</p>
                  <p><strong>Address:</strong> {profileData.address}</p>
                  <p><strong>Date of Birth:</strong> {profileData.dob}</p>
                  <button
                    className="btn btn-primary mt-3"
                    onClick={handleEdit}
                  >
                    Edit Information
                  </button>
                </div>
              ) : (
                <form>
                  <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      name="name"
                      value={profileData.name}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      name="email"
                      value={profileData.email}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="phone" className="form-label">Phone</label>
                    <input
                      type="text"
                      className="form-control"
                      id="phone"
                      name="phone"
                      value={profileData.phone}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="address" className="form-label">Address</label>
                    <input
                      type="text"
                      className="form-control"
                      id="address"
                      name="address"
                      value={profileData.address}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="dob" className="form-label">Date of Birth</label>
                    <input
                      type="date"
                      className="form-control"
                      id="dob"
                      name="dob"
                      value={profileData.dob}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="profilePhoto" className="form-label">Upload Photo</label>
                    <input
                      type="file"
                      accept="image/*"
                      className="form-control"
                      onChange={handlePhotoUpload}
                    />
                  </div>
                  <button
                    type="button"
                    className="btn btn-success"
                    onClick={handleEdit}
                  >
                    Save Changes
                  </button>
                  <button
                    type="button"
                    className="btn btn-secondary ms-2"
                    onClick={() => setIsEditing(false)}
                  >
                    Cancel
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

 


 

 

const HistoryContent = () => {
  const [medicalHistory, setMedicalHistory] = useState([
    {
      date: "2024-01-01",
      doctor: "Dr. Sarah Johnson",
      description:
        "The patient reported symptoms of a common cold including mild fever and fatigue. Prescribed rest and hydration.",
      prescription: [
        { name: "Paracetamol", dosage: "500mg", time: "Twice a day" },
        { name: "Cough Syrup", dosage: "10ml", time: "Thrice a day" },
      ],
    },
    {
      date: "2024-02-15",
      doctor: "Dr. James Smith",
      description:
        "Routine check-up with no significant findings. Recommended a balanced diet and regular exercise.",
      prescription: [],
    },
    {
      date: "2024-03-10",
      doctor: "Dr. Emily White",
      description:
        "The patient presented with symptoms of seasonal allergies. Prescribed antihistamines.",
      prescription: [
        { name: "Cetirizine", dosage: "10mg", time: "Once a day" },
      ],
    },
  ]);

  return (
    <div className="container my-4">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title text-center">Medical History</h5>
          <table className="table table-bordered">
            <thead className="table-primary">
              <tr>
                <th>Date</th>
                <th>Doctor's Name</th>
                <th>Description</th>
                <th>Prescription</th>
              </tr>
            </thead>
            <tbody>
              {medicalHistory.map((history, index) => (
                <tr
                  key={index}
                  style={{
                    backgroundColor: index % 2 === 0 ? "skyblue" : "white",
                  }}
                >
                  <td>{history.date}</td>
                  <td>{history.doctor}</td>
                  <td>
                    <textarea
                      className="form-control"
                      rows="3"
                      readOnly
                      value={history.description}
                    />
                  </td>
                  <td>
                    {history.prescription.length > 0 ? (
                      <textarea
                        className="form-control"
                        rows={history.prescription.length}
                        readOnly
                        value={history.prescription
                          .map(
                            (item) =>
                              `${item.name}: ${item.dosage}, ${item.time}`
                          )
                          .join("\n")}
                      />
                    ) : (
                      <textarea
                        className="form-control"
                        rows="1"
                        readOnly
                        value="No Prescription"
                      />
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};


 

 

 

 

 

const AppointmentsContent = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState("");
  const [selectedDoctor, setSelectedDoctor] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  // Sample data: Available dates provided by the doctors
  const availableDates = ["2025-01-05", "2025-01-06", "2025-01-08"];

  // Sample data: List of doctors
  const doctors = ["Dr. Sarah Johnson", "Dr. James Smith", "Dr. Emily White"];

  const isAvailableDate = (date) => {
    const formattedDate = date.toISOString().split("T")[0];
    return availableDates.includes(formattedDate);
  };

  const handleDateChange = (date) => {
    const formattedDate = date.toISOString().split("T")[0];
    if (isAvailableDate(date)) {
      setSelectedDate(formattedDate);
      setSuccessMessage(""); // Clear any previous messages
    } else {
      setSelectedDate(null);
    }
  };

  const handleBookAppointment = () => {
    if (selectedDate && selectedTime && selectedDoctor) {
      setSuccessMessage(
        `Appointment booked successfully with ${selectedDoctor} on ${selectedDate} (${selectedTime}).`
      );
    } else {
      setSuccessMessage("Please select a doctor, a date, and a time to book an appointment.");
    }
  };

  return (
    <div className="container my-4">
      <div className="row">
        {/* Calendar Section */}
        <div className="col-md-8">
          <h5>Select an Available Date</h5>
          <Calendar onChange={handleDateChange} />
        </div>

        {/* Doctor and Time Selection Section */}
        <div className="col-md-4">
          <h5>Select a Doctor</h5>
          <select
            className="form-select mt-3"
            value={selectedDoctor}
            onChange={(e) => setSelectedDoctor(e.target.value)}
          >
            <option value="">Choose a Doctor</option>
            {doctors.map((doctor, index) => (
              <option key={index} value={doctor}>
                {doctor}
              </option>
            ))}
          </select>

          <h5 className="mt-4">Choose Time</h5>
          <div className="form-group mt-3">
            <label>
              <input
                type="radio"
                name="time"
                value="Morning"
                checked={selectedTime === "Morning"}
                onChange={(e) => setSelectedTime(e.target.value)}
              />
              Morning
            </label>
            <br />
            <label>
              <input
                type="radio"
                name="time"
                value="Afternoon"
                checked={selectedTime === "Afternoon"}
                onChange={(e) => setSelectedTime(e.target.value)}
              />
              Afternoon
            </label>
          </div>

          <button
            className="btn btn-primary btn-block mt-4"
            onClick={handleBookAppointment}
          >
            Book Appointment
          </button>

          {/* Success Message */}
          {successMessage && (
            <div className="alert alert-info mt-3" role="alert">
              {successMessage}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

 

 


 



const PatientDashboard = () => {
  return (
    <div>
     
      <div>
        <Routes>
          <Route path="/" element={<HomeContent />} />
          <Route path="profile" element={<ProfileContent />} />
          <Route path="history" element={<HistoryContent />} />
          <Route path="appointments" element={<AppointmentsContent />} />
        </Routes>
      </div>
    </div>
  );
};

export default PatientDashboard;
