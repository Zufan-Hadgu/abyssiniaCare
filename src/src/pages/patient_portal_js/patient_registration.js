document.getElementById("registrationForm").addEventListener("submit", async (e) => {
    e.preventDefault(); // Prevent form from reloading the page

    const name = document.getElementById("name").value;
    const gender = document.getElementById("gender").value;
    const birthdate = document.getElementById("birthdate").value;
    const height = document.getElementById("height").value;
    const weight = document.getElementById("weight").value;
    const phonenumber = document.getElementById("phone").value;
    const address = document.getElementById("address").value;
    const email = document.getElementById("email").value;
    const emergencyname = document.getElementById("emaergency-name").value;
    const emergencyphone = document.getElementById("emergency-phone").value;

    // Example API call to register a doctor (adjust the URL for your backend)
    const response = await fetch("http://localhost:3000/api/doctor/signup", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, gender,birthdate,height,weight,phonenumber,address, email, emergencyname, emergencyphone }),
    });

    const result = await response.json();

    if (result.success) {
        alert("registration successful! Redirecting to login page.");
        window.location.href = "patient_login.html";
    } else {
        alert(result.message || "registration failed. Please try again.");
    }
});