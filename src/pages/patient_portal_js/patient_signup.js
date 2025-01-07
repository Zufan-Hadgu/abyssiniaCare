document.getElementById("signupForm").addEventListener("submit", async (e) => {
    e.preventDefault(); // Prevent form from reloading the page

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // Example API call to register a doctor (adjust the URL for your backend)
    const response = await fetch("http://localhost:3000/api/doctor/signup", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, password }),
    });

    const result = await response.json();

    if (result.success) {
        alert("Signup successful! Redirecting to login page.");
        window.location.href = "patient_login.html";
    } else {
        alert(result.message || "Signup failed. Please try again.");
    }
});