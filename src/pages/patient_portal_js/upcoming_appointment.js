const patientHistory = [
    {
      doctor: {
        name: "Dr. John Doe",
        image: "https://via.placeholder.com/50"
      },
      date: "jan 28, 2025",
      time: "morning",
      status: "Confirmed",
    },
    {
      doctor: {
        name: "Dr. Sarah",
        image: "https://via.placeholder.com/50"
      },
      date: "feb 02, 2025",
      time: "afternoon",
      status:"Confirmed",
    }
  ];
  
  // Populate the table with upcoming appointments
  const appointmentTable = document.getElementById('appointment-table');
  
  patientHistory.forEach(record => {
    const row = document.createElement('tr');
  
    row.innerHTML = `
    <td>
        <div class="d-flex align-items-center">
            <img src="${record.doctor.image}" alt="${record.doctor.name}" class="rounded-circle me-2" width="40" height="40">
            <span>${record.doctor.name}</span>
        </div>
    </td>  
    <td>${record.date}</td>
    <td>${record.time}</td>
    <td> 
        <div class="text-end">
                <p>Status: <span class="badge ${
                    record.status === "Confirmed" ? "bg-success" : "bg-warning"
                }">${record.status}</span></p>
        </div>
    </td>
    `;
  
    appointmentTable.appendChild(row);
  });