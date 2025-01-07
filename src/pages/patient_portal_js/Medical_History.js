// Sample data for patient history
const patientHistory = [
    {
      date: "Feb 28, 2023",
      doctor: {
        name: "Dr. John Doe",
        image: "https://via.placeholder.com/50"
      },
      prescription: {
        medicine: "Adderall",
        strength: "100mg",
        amount: "1 Tablet"
      }
    },
    {
      date: "Nov 20, 2024",
      doctor: {
        name: "Dr. Sarah",
        image: "https://via.placeholder.com/50"
      },
      prescription: {
        medicine: "parastamol",
        strength: "50mg",
        amount: "1 Tablet"
      }
    }
  ];
  
  // Populate the table with patient history data
  const historyTable = document.getElementById('history-table');
  
  patientHistory.forEach(record => {
    const row = document.createElement('tr');
  
    row.innerHTML = `
      <td>${record.date}</td>
      <td>
        <div class="d-flex align-items-center">
          <img src="${record.doctor.image}" alt="${record.doctor.name}" class="rounded-circle me-2" width="40" height="40">
          <span>${record.doctor.name}</span>
        </div>
      </td>
      <td>
        <p>Medicine Name: ${record.prescription.medicine}</p>
        <p>Strength: ${record.prescription.strength}</p>
        <p>Amount: ${record.prescription.amount}</p>
      </td>
    `;
  
    historyTable.appendChild(row);
  });
  