document.getElementById("loginForm").addEventListener("submit", async (e) => {
    e.preventDefault(); // Prevent form from reloading the page

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // Example API call to login (adjust the URL for your backend)
    const response = await fetch("http://localhost:3000/api/doctor/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
    });

    const result = await response.json();

    if (result.success) {
        alert("Login successful!");
        window.location.href = "doctor_dashboard.html"; // Redirect to the doctor's dashboard
    } else {
        alert(result.message || "Login failed. Please try again.");
    }
});