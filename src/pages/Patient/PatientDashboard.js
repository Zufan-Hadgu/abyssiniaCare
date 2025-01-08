 
import { Routes, Route,  useNavigate } from 'react-router-dom';
import Header from '../../components/Header'; // Import your existing header component

 
import React, { useState, useEffect } from "react";
import Calendar from "react-calendar"; // Install with `npm install react-calendar`
import "react-calendar/dist/Calendar.css";
import "../css/AppointmentsContent.css"; 
import hero from "../../Assets/images/scott-graham-OQMZwNd3ThU-unsplash.jpg"
import "../css/patient_list.css"
 
import { auth, db } from "../../../src/firebaseConfig"; // Adjust the path if needed
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { FaCamera } from "react-icons/fa"; // For profile picture upload icon
import { collection, addDoc } from "firebase/firestore";

 
 
 
 

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
  const [profileData, setProfileData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    dob: "",
    profilePic: "", // URL to profile picture
  });
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [editMode, setEditMode] = useState(false); // To toggle between view and edit modes
  const [newProfilePic, setNewProfilePic] = useState(null); // For handling profile pic uploads

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const user = auth.currentUser;
        if (!user) {
          setError("No user logged in.");
          return;
        }

        const docRef = doc(db, "users", user.uid);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setProfileData(docSnap.data());
        } else {
          setError("Profile not found.");
        }
      } catch (err) {
        console.error("Error fetching profile: ", err);
        setError("Failed to load profile. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfileData({ ...profileData, [name]: value });
  };

  const handleSave = async () => {
    setError("");
    setMessage("");

    try {
      const user = auth.currentUser;
      if (!user) {
        setError("No user logged in.");
        return;
      }

      const docRef = doc(db, "users", user.uid);
      await updateDoc(docRef, profileData);

      setMessage("Profile updated successfully.");
      setEditMode(false); // Switch back to view mode after saving
    } catch (err) {
      console.error("Error updating profile: ", err);
      setError("Failed to update profile. Please try again later.");
    }
  };

  const handleProfilePicChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setNewProfilePic(URL.createObjectURL(file));
    }
  };

  const toggleEditMode = () => {
    setEditMode(!editMode);
  };

  if (loading) return <div>Loading...</div>;

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <div className="d-flex justify-content-between">
            {/* Left Card - Profile Picture & Name */}
            <div className="card p-4" style={{ width: "30%" }}>
              <div className="text-center">
                <div
                  className="position-relative"
                  style={{ width: "150px", height: "150px", margin: "0 auto" }}
                >
                  <img
                    src={newProfilePic || profileData.profilePic || "/default-profile.jpg"} // Default image fallback
                    alt="Profile"
                    className="img-fluid rounded-circle"
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  />
                  <label htmlFor="profilePic" className="position-absolute bottom-0 end-0 p-2 bg-dark text-white rounded-circle">
                    <FaCamera size={20} />
                    <input
                      type="file"
                      id="profilePic"
                      className="d-none"
                      accept="image/*"
                      onChange={handleProfilePicChange}
                    />
                  </label>
                </div>
                <h3 className="mt-3">{profileData.name}</h3>
              </div>
            </div>

            {/* Right Card - Information with Editing */}
            <div className="card p-4" style={{ width: "65%" }}>
              <h2 className="text-center">Profile Information</h2>
              {error && <p className="alert alert-danger">{error}</p>}
              {message && <p className="alert alert-success">{message}</p>}
              <form>
                <div className="mb-3">
                  <label>Email</label>
                  <input
                    type="email"
                    name="email"
                    className="form-control"
                    value={profileData.email}
                    readOnly
                  />
                </div>
                <div className="mb-3">
                  <label>Phone</label>
                  <input
                    type="text"
                    name="phone"
                    className="form-control"
                    value={profileData.phone}
                    onChange={handleInputChange}
                    disabled={!editMode}
                  />
                </div>
                <div className="mb-3">
                  <label>Address</label>
                  <input
                    type="text"
                    name="address"
                    className="form-control"
                    value={profileData.address}
                    onChange={handleInputChange}
                    disabled={!editMode}
                  />
                </div>
                <div className="mb-3">
                  <label>Date of Birth</label>
                  <input
                    type="date"
                    name="dob"
                    className="form-control"
                    value={profileData.dob}
                    onChange={handleInputChange}
                    disabled={!editMode}
                  />
                </div>
                <button
                  type="button"
                  className="btn btn-primary w-100"
                  onClick={editMode ? handleSave : toggleEditMode}
                >
                  {editMode ? "Save Changes" : "Edit Profile"}
                </button>
              </form>
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
  // Update handleBookAppointment to save data to Firestore
  const handleBookAppointment = async () => {
    if (selectedDate && selectedTime && selectedDoctor) {
      try {
        // Fetch the patient name from the users collection
        const userRef = doc(db, "users", auth.currentUser.uid); // Get reference to current user document
        const userDoc = await getDoc(userRef);
  
        if (userDoc.exists()) {
          const patientName = userDoc.data().name;
  
          // Save the appointment details to the appointments collection
          await addDoc(collection(db, "appointments"), {
            patientName: patientName, // Use the fetched patient name
            doctor: selectedDoctor,
            date: selectedDate,
            time: selectedTime,
            status: "Booked", // Status of the appointment
          });
  
          setSuccessMessage(
            `Appointment booked successfully with ${selectedDoctor} on ${selectedDate} (${selectedTime}).`
          );
        } else {
          setSuccessMessage("Patient data not found. Please check your login status.");
        }
      } catch (error) {
        console.error("Error booking appointment: ", error);
        setSuccessMessage("There was an error booking your appointment. Please try again.");
      }
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
