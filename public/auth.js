// Import Firebase modules
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-auth.js";
import { getFirestore, doc, setDoc } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js";
import { app } from "./firebase-config.js"; // Import initialized app

// Initialize auth and firestore
const auth = getAuth(app);
const db = getFirestore(app);

// Signup Logic
const signupBtn = document.getElementById('signupBtn');
if (signupBtn) {
  signupBtn.addEventListener('click', () => {
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();

    if (!username || !password) {
      alert("Please fill in both fields.");
      return;
    }

    // Firebase requires email, append dummy domain for educational use
    createUserWithEmailAndPassword(auth, `${username}@test.com`, password)
      .then(async (userCredential) => {
        const user = userCredential.user;
        await setDoc(doc(db, "users", user.uid), {
          username: username,
          password: password
        });
        alert("Signup successful!");
        window.location.href = "recipe.html";
      })
      .catch((error) => {
        alert("Signup Error: " + error.message);
      });
  });
}

// Login Logic
const loginBtn = document.getElementById('loginBtn');
if (loginBtn) {
  loginBtn.addEventListener('click', () => {
    const username = document.getElementById('login-username').value.trim();
    const password = document.getElementById('login-password').value.trim();

    if (!username || !password) {
      alert("Please fill in both fields.");
      return;
    }

    signInWithEmailAndPassword(auth, `${username}@test.com`, password)
      .then((userCredential) => {
        alert("Login successful!");
        window.location.href = "recipe.html";
      })
      .catch((error) => {
        alert("Login Error: " + error.message);
      });
  });
}
