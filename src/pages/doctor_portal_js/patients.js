// Example patient data (replace with data fetched from the backend)
const patients = [
    {
        id: "P12345",
        name: "John Smith",
        email: "johnsmith@example.com",
        lastAppointment: "2025-01-02",
    },
    {
        id: "P67890",
        name: "Jane Doe",
        email: "janedoe@example.com",
        lastAppointment: "2024-12-30",
    },
];

// Populate the patient list dynamically
const patientsList = document.querySelector(".patients-list");

patients.forEach((patient) => {
    const card = document.createElement("div");
    card.className = "patient-card p-3 mb-3 bg-light rounded shadow-sm";

    card.innerHTML = `
        <div class="d-flex justify-content-between">
            <div>
                <h5>Patient: <span class="fw-bold">${patient.name}</span></h5>
                <p>ID: ${patient.id}</p>
                <p>Email: ${patient.email}</p>
                <p>Last Appointment: <span class="fw-bold">${patient.lastAppointment}</span></p>
            </div>
            <div class="text-end">
                <button class="btn btn-primary view-details-btn" data-id="${patient.id}">View Details</button>
            </div>
        </div>
    `;

    patientsList.appendChild(card);
});

// Handle "View Details" button clicks
document.addEventListener("click", (e) => {
    if (e.target.classList.contains("view-details-btn")) {
        const patientId = e.target.getAttribute("data-id");
        // Redirect to the patient details page or display a modal
        alert(`View details for patient ID: ${patientId}`);
    }
});
