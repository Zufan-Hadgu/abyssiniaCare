import React, { useState } from "react";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    role: "patient", // Default role
  });

  const [message, setMessage] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simulate a successful registration response
    if (formData.name && formData.email && formData.phone && formData.password) {
      setMessage("Registration successful!");
    } else {
      setMessage("Please fill out all fields.");
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-lg-4 col-md-6 col-sm-8 col-10">
          <div className="card p-4">
            <h2 className="text-center">Register</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label>Name</label>
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  onChange={handleInputChange}
                  value={formData.name}
                />
              </div>
              <div className="mb-3">
                <label>Email</label>
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  onChange={handleInputChange}
                  value={formData.email}
                />
              </div>
              <div className="mb-3">
                <label>Phone</label>
                <input
                  type="text"
                  name="phone"
                  className="form-control"
                  onChange={handleInputChange}
                  value={formData.phone}
                />
              </div>
              <div className="mb-3">
                <label>Password</label>
                <input
                  type="password"
                  name="password"
                  className="form-control"
                  onChange={handleInputChange}
                  value={formData.password}
                />
              </div>
              <div className="mb-3">
                <label>Role</label>
                <select
                  name="role"
                  className="form-select"
                  onChange={handleInputChange}
                  value={formData.role}
                >
                  <option value="patient">Patient</option>
                  <option value="doctor">Doctor</option>
                  <option value="admin">Admin</option>
                </select>
              </div>
              <button type="submit" className="btn btn-primary w-100">
                Register
              </button>
            </form>
            {message && <p className="mt-3 alert alert-info">{message}</p>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
