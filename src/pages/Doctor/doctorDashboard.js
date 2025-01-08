 
import React, { useState, useEffect } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
 
 
import doctorImage from '../../Assets/images/doctor_11.jpg'; // Replace with the actual path to the doctor's image
 



import "../css/doctor.css"; // Add a separate CSS file for styling

const HomeContent = () => {
  const [doctorData, setDoctorData] = useState({
    name: "",
    id: "",
    specialty: "",
  });

  useEffect(() => {
    const fetchDoctorData = () => {
      const data = {
        name: "Dr. John Doe",
        id: "D12345",
        specialty: "Cardiologist",
      };
      setDoctorData(data);
    };

    fetchDoctorData();
  }, []);

  return (
    <div className="home-content">
      <div className="container">
        <div className="row align-items-center">
          {/* Left Section: Doctor's Details */}
          <div className="col-md-6 text-section">
            <h1 className="doctor-name">
              {doctorData.name}
            </h1>
            <h2 className="doctor-specialty text-primary">
              {doctorData.specialty}
            </h2>
            <p className="doctor-id">
              ID: {doctorData.id}
            </p>
            <p className="description">
  
 I am a highly esteemed cardiologist with over 5 years of experience in the diagnosis, treatment, and prevention of heart diseases. Having completed my medical degree at Addis Abab, where I gained extensive knowledge in the latest advancements in cardiac care.
            </p>
            <button className="btn btn-primary me-2">Get Started</button>
            <button className="btn btn-outline-primary">Read More</button>
          </div>
          {/* Right Section: Doctor's Image */}
          <div className="col-md-6 image-section text-center">
            <img
              src={doctorImage}
              alt="Doctor"
              className="doctor-image img-fluid rounded"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
const ProfileContent = () => {
  const [profileData, setProfileData] = useState({
    name: "Dr. John Doe",
    address: "123 Main Street, City, Country",
    phone: "+123456789",
    specialization: "Cardiologist",
  });

  const [updateData, setUpdateData] = useState({
    name: "",
    address: "",
    phone: "",
    specialization: "",
  });

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdateData({ ...updateData, [name]: value });
  };

  // Handle form submission (simulation)
  const handleSubmit = (e) => {
    e.preventDefault();
    setProfileData({ ...profileData, ...updateData });
    setUpdateData({ name: "", address: "", phone: "", specialization: "" });
  };

  return (
    <div className="profile-content container py-5">
      <div className="row">
        {/* Updated Information Card */}
        <div className="col-md-6">
          <div className="card updated-info">
            <div className="card-body">
              <h3 className="card-title">Updated Information</h3>
              <p>
                <strong>Name:</strong> {profileData.name}
              </p>
              <p>
                <strong>Address:</strong> {profileData.address}
              </p>
              <p>
                <strong>Phone:</strong> {profileData.phone}
              </p>
              <p>
                <strong>Specialization:</strong> {profileData.specialization}
              </p>
            </div>
          </div>
        </div>

        {/* Updating Information Card */}
        <div className="col-md-6">
          <div className="card updating-info">
            <div className="card-body">
              <h3 className="card-title">Update Your Information</h3>
              <p className="description">
                Update your profile details to ensure they are always accurate
                and up-to-date.
              </p>
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={updateData.name}
                    onChange={handleChange}
                    className="form-control input-field"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="address" className="form-label">
                    Address
                  </label>
                  <input
                    type="text"
                    id="address"
                    name="address"
                    value={updateData.address}
                    onChange={handleChange}
                    className="form-control input-field"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="phone" className="form-label">
                    Phone
                  </label>
                  <input
                    type="text"
                    id="phone"
                    name="phone"
                    value={updateData.phone}
                    onChange={handleChange}
                    className="form-control input-field"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="specialization" className="form-label">
                    Specialization
                  </label>
                  <input
                    type="text"
                    id="specialization"
                    name="specialization"
                    value={updateData.specialization}
                    onChange={handleChange}
                    className="form-control input-field"
                  />
                </div>
                <button type="submit" className="btn btn-primary">
                  Update
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

 


 


 
 

 

const PatientsContent = () => {
  const [patients, setPatients] = useState([]);
  const [selectedPatient, setSelectedPatient] = useState(null);

  useEffect(() => {
    const fetchPatients = () => {
      const data = [
        {
          id: "P12345",
          name: "Jane Doe",
          email: "jane.doe@example.com",
          lastAppointment: "2025-01-02",
          medicalHistory: [
            { date: "2025-01-02", prescription: "Paracetamol", detail: "Fever and headache" },
            { date: "2024-12-15", prescription: "Antibiotics", detail: "Throat infection" },
          ],
        },
        {
          id: "P67890",
          name: "John Smith",
          email: "john.smith@example.com",
          lastAppointment: "2025-01-04",
          medicalHistory: [
            { date: "2025-01-03", prescription: "Ibuprofen", detail: "Back pain" },
          ],
        },
      ];
      setPatients(data);
    };
    fetchPatients();
  }, []);

  const handleViewDetails = (patient) => {
    setSelectedPatient(patient);
  };

  const handleInputChange = (index, field, value) => {
    const updatedHistory = selectedPatient.medicalHistory.map((entry, i) =>
      i === index ? { ...entry, [field]: value } : entry
    );
    setSelectedPatient({ ...selectedPatient, medicalHistory: updatedHistory });
  };

  const handleAddRow = () => {
    const newRow = { date: "", prescription: "", detail: "" };
    setSelectedPatient({
      ...selectedPatient,
      medicalHistory: [...selectedPatient.medicalHistory, newRow],
    });
  };

  return (
    <div className="container my-4">
      <h2>Patient List</h2>
      <div className="patients-grid">
        {patients.map((patient) => (
          <div
            key={patient.id}
            className="patient-card p-3 mb-3 bg-light rounded shadow-sm"
          >
            <div className="d-flex justify-content-between">
              <div>
                <h5>Name: <span className="fw-bold">{patient.name}</span></h5>
                <p>ID: {patient.id}</p>
                <p>Email: {patient.email}</p>
                <p>
                  Last Appointment:{" "}
                  <span className="fw-bold">{patient.lastAppointment}</span>
                </p>
              </div>
              <div>
                <button
                  className="btn btn-primary btn-sm"
                  onClick={() => handleViewDetails(patient)}
                >
                  View Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {selectedPatient && (
        <div className="patient-details p-4 mt-4 bg-light rounded shadow-sm">
          <h3>Medical History for {selectedPatient.name}</h3>
          <table className="table">
            <thead>
              <tr>
                <th>Date</th>
                <th>Prescription</th>
                <th>Details</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {selectedPatient.medicalHistory.map((entry, index) => (
                <tr key={index}>
                  <td>
                    <input
                      type="date"
                      value={entry.date}
                      onChange={(e) =>
                        handleInputChange(index, "date", e.target.value)
                      }
                      className="form-control"
                    />
                  </td>
                  <td>
                    <textarea
                      value={entry.prescription}
                      onChange={(e) =>
                        handleInputChange(index, "prescription", e.target.value)
                      }
                      className="form-control"
                      rows={2}
                    ></textarea>
                  </td>
                  <td>
                    <textarea
                      value={entry.detail}
                      onChange={(e) =>
                        handleInputChange(index, "detail", e.target.value)
                      }
                      className="form-control"
                      rows={2}
                    ></textarea>
                  </td>
                  <td>
                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() => {
                        const updatedHistory =
                          selectedPatient.medicalHistory.filter(
                            (_, i) => i !== index
                          );
                        setSelectedPatient({
                          ...selectedPatient,
                          medicalHistory: updatedHistory,
                        });
                      }}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <button className="btn btn-success btn-sm" onClick={handleAddRow}>
            Add Row
          </button>
        </div>
      )}
    </div>
  );
};

 


 

 


 

 



const AppointmentsContent = () => {
  // Appointment data (replace with real API data fetching in production)
  const [appointments, setAppointments] = useState([
    {
      patientName: "John Smith",
      patientId: "P12345",
      date: "2025-01-10",
      time: "10:30 AM",
      status: "Confirmed",
    },
    {
      patientName: "Jane Doe",
      patientId: "P54321",
      date: "2025-01-12",
      time: "2:00 PM",
      status: "Pending",
    },
  ]);

  // Search state
  const [searchTerm, setSearchTerm] = useState("");

  // Filter appointments based on the search term
  const filteredAppointments = appointments.filter((appointment) =>
    appointment.patientName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container my-4">
      {/* Notifications and Search */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div className="notifications">
          <img
            src="/path/to/bell-icon.svg" // Replace with the actual path to the bell icon
            alt="Notifications"
            width="30"
            className="me-3"
          />
          <span className="badge bg-danger">3</span>
        </div>
        <div className="search-bar">
          <input
            type="text"
            className="form-control"
            placeholder="Search appointments..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      {/* Appointments Section */}
      <h2 className="mb-4">Appointments</h2>
      <div className="appointments-list">
        {filteredAppointments.map((appointment, index) => (
          <div
            key={index}
            className="appointment-card p-3 mb-3 bg-light rounded shadow-sm"
          >
            <div className="d-flex justify-content-between">
              <div>
                <h5>
                  Patient: <span className="fw-bold">{appointment.patientName}</span>
                </h5>
                <p>ID: {appointment.patientId}</p>
              </div>
              <div>
                <p>
                  Date: <span className="fw-bold">{appointment.date}</span>
                </p>
                <p>
                  Time: <span className="fw-bold">{appointment.time}</span>
                </p>
              </div>
              <div className="text-end">
                <p>
                  Status:{" "}
                  <span
                    className={`badge ${
                      appointment.status === "Confirmed" ? "bg-success" : "bg-warning"
                    }`}
                  >
                    {appointment.status}
                  </span>
                </p>
              </div>
            </div>
          </div>
        ))}
        {filteredAppointments.length === 0 && (
          <p className="text-muted">No appointments found.</p>
        )}
      </div>
    </div>
  );
};




const DoctorDashboard = () => {
  return (
    <div>
     
      <div className="tab-content">
        <Routes>
          <Route path="/" element={<HomeContent />} />
          <Route path="Profile" element={<ProfileContent />} />
          <Route path="Patient" element={<PatientsContent />} />
          <Route path="Appointments" element={<AppointmentsContent />} />
        </Routes>
      </div>
    </div>
  );
};

export default DoctorDashboard;
