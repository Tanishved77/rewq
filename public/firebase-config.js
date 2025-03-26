// Import Firebase modules
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js";

// Your Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAoqGolDqRRlSBc9J2QrIjvcDVp7ZcZy8k",
    authDomain: "recipe-21146.firebaseapp.com",
    projectId: "recipe-21146",
    storageBucket: "recipe-21146.appspot.com", // FIXED YOUR STORAGE BUCKET
    messagingSenderId: "393938858080",
    appId: "1:393938858080:web:3f4102099015866e425305"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// Export them so other files can use them
export { app, auth, db };
