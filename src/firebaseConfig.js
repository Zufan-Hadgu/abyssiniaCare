import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";  // Import Firestore

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBUAJWH46fPT70gtYbfZlrZcXIZ-HNqwaQ",
  authDomain: "abyssiniacare.firebaseapp.com",
  projectId: "abyssiniacare",
  storageBucket: "abyssiniacare.firebasestorage.app",
  messagingSenderId: "226620023314",
  appId: "1:226620023314:web:b168b4719c02670131aecb",
  measurementId: "G-TQDJ7FNX1S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and Firestore
const auth = getAuth(app);
const db = getFirestore(app);  // Initialize Firestore

// Export auth and db for use in other files
export { auth, db };
