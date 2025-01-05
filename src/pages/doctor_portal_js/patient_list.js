// Example patient data (replace with dynamic backend data)
const patients = [
    {
        id: "P12345",
        name: "Jane Doe",
        email: "jane.doe@example.com",
        lastAppointment: "2025-01-02",
    },
    {
        id: "P67890",
        name: "John Smith",
        email: "john.smith@example.com",
        lastAppointment: "2025-01-04",
    },
];

// Populate the patient list dynamically
const patientsGrid = document.querySelector(".patients-grid");

patients.forEach((patient) => {
    const card = document.createElement("div");
    card.className = "patient-card p-3 mb-3 bg-light rounded shadow-sm";

    card.innerHTML = `
        <div class="d-flex justify-content-between">
            <div>
                <h5>Name: <span class="fw-bold">${patient.name}</span></h5>
                <p>ID: ${patient.id}</p>
                <p>Email: ${patient.email}</p>
                <p>Last Appointment: <span class="fw-bold">${patient.lastAppointment}</span></p>
            </div>
            <div>
                <button class="btn btn-primary btn-sm view-details-btn" data-id="${patient.id}">View Details</button>
            </div>
        </div>
    `;

    patientsGrid.appendChild(card);
});

// Handle "View Details" button clicks
document.querySelectorAll(".view-details-btn").forEach((button) => {
    button.addEventListener("click", (event) => {
        const patientId = event.target.getAttribute("data-id");
        // Redirect to a detailed view (you can create patient_detail.html)
        window.location.href = `patient_detail.html?id=${patientId}`;
    });
});
