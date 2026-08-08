// Firebase App
import { initializeApp } from
"https://www.gstatic.com/firebasejs/12.1.0/firebase-app.js";

// Firebase Authentication
import { getAuth } from
"https://www.gstatic.com/firebasejs/12.1.0/firebase-auth.js";

// Cloud Firestore
import { getFirestore } from
"https://www.gstatic.com/firebasejs/12.1.0/firebase-firestore.js";


// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAYbWCXY86pS_98RE44ldXtJEJrwh7pU9Q",
  authDomain: "cloud-based-lost-and-found.firebaseapp.com",
  projectId: "cloud-based-lost-and-found",
  storageBucket: "cloud-based-lost-and-found.firebasestorage.app",
  messagingSenderId: "114284476146",
  appId: "1:114284476146:web:2d86b05df6378a2c5c826b",
  measurementId: "G-WB3CGWLXSP"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Authentication
const auth = getAuth(app);


// Initialize Firestore
const db = getFirestore(app);


// Export Firebase services
export {
    app,
    auth,
    db
};