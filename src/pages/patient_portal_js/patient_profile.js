// Function to save signup data to local storage
function saveSignupData() {
  // Sample user data (simulate form input)
  const userData = {
      firstName: "John",
      lastName: "Doe",
      gender: "Male",
      identity:"P12345",
      age: 23,
      height: "5'8",
      weight: "75 Kg",
      birthDate: "02-03-01",
      address: "23 Mile, LosAngels",
      phoneNumber: "+1234566789",
      email: "JohnDoe@gmail.com",
      prescriptions: [
          "Prescription 1: Painkillers - Take 2 tablets daily after meals",
          "Prescription 2: Vitamin D - Take 1 tablet daily in the morning",
          "Prescription 3: Antibiotics - Take 1 tablet every 8 hours for 7 days"
      ],
      diagnoses:[
        "Hypertension",
        "Diabetes Mellitus"
      ]
  };
  // Save to localStorage
  localStorage.setItem("userProfile", JSON.stringify(userData));
}

// Function to load user profile and display it
function loadUserProfile() {
  // Get user data from localStorage
  const userProfile = JSON.parse(localStorage.getItem("userProfile"));

  if (userProfile) {
      // Update profile details
      document.getElementById("name").textContent = `${userProfile.firstName} ${userProfile.lastName}`;
      document.getElementById("identity").textContent = userProfile.identity;
      document.getElementById("gender").textContent = userProfile.gender;
      document.getElementById("age").textContent = userProfile.age;
      document.getElementById("height").textContent = userProfile.height;
      document.getElementById("weight").textContent = userProfile.weight;
      document.getElementById("firstName").textContent = userProfile.firstName;
      document.getElementById("lastName").textContent = userProfile.lastName;
      document.getElementById("birthDate").textContent = userProfile.birthDate;
      document.getElementById("address").textContent = userProfile.address;
      document.getElementById("phoneNumber").textContent = userProfile.phoneNumber;
      document.getElementById("email").textContent = userProfile.email;

      // Update prescriptions
      const prescriptionList = document.getElementById("prescription-list");
      prescriptionList.innerHTML = ""; // Clear any existing prescriptions
      userProfile.prescriptions.forEach((prescription) => {
          const li = document.createElement("li");
          li.textContent = prescription;
          prescriptionList.appendChild(li);
      });
      const diagnose = document.getElementById("diagnoses");
      diagnose.innerHTML = ""; // Clear any existing prescriptions
      userProfile.diagnoses.forEach((diagnosed) => {
          const li = document.createElement("li");
          li.textContent = diagnosed;
          diagnose.appendChild(li);
      });
  } else {
      console.error("No user profile found.");
  }
}

// Save and load data on page load for demonstration
document.addEventListener("DOMContentLoaded", () => {
  saveSignupData(); // This simulates the signup data being saved
  loadUserProfile(); // This loads the profile data dynamically
});
// Logout button functionality
document.getElementById("logoutBtn").addEventListener("click", () => {
  // Redirect to login page after logout
  window.location.href = "patient_login.html";
});