// Example appointment data (replace with data fetched from the backend)
const appointments = [
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
];

// Populate the appointment list dynamically
const appointmentsList = document.querySelector(".appointments-list");

appointments.forEach((appointment) => {
    const card = document.createElement("div");
    card.className = "appointment-card p-3 mb-3 bg-light rounded shadow-sm";

    card.innerHTML = `
        <div class="d-flex justify-content-between">
            <div>
                <h5>Patient: <span class="fw-bold">${appointment.patientName}</span></h5>
                <p>ID: ${appointment.patientId}</p>
            </div>
            <div>
                <p>Date: <span class="fw-bold">${appointment.date}</span></p>
                <p>Time: <span class="fw-bold">${appointment.time}</span></p>
            </div>
            <div class="text-end">
                <p>Status: <span class="badge ${
                    appointment.status === "Confirmed" ? "bg-success" : "bg-warning"
                }">${appointment.status}</span></p>
            </div>
        </div>
    `;

    appointmentsList.appendChild(card);
});

// Search functionality
document.getElementById("searchInput").addEventListener("input", (e) => {
    const searchTerm = e.target.value.toLowerCase();
    const cards = document.querySelectorAll(".appointment-card");

    cards.forEach((card) => {
        const patientName = card.querySelector("h5 span").textContent.toLowerCase();
        if (patientName.includes(searchTerm)) {
            card.style.display = "";
        } else {
            card.style.display = "none";
        }
    });
});