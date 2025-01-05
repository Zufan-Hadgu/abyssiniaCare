// Simulated doctor's data (in real implementation, fetch this from the backend)
const doctorData = {
    name: "Dr. John Doe",
    id: "D12345",
    specialty: "Cardiologist"
};

// Populate doctor details dynamically
document.getElementById("doctorName").textContent = doctorData.name;
document.getElementById("doctorId").textContent = doctorData.id;
document.getElementById("doctorSpecialty").textContent = doctorData.specialty;

// Logout button functionality
document.getElementById("logoutBtn").addEventListener("click", () => {
    // Redirect to login page after logout
    window.location.href = "doctor_login.html";
});
