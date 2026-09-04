// Firebase Configuration

const firebaseConfig = {
    apiKey: "AIzaSyCp34m2bC18KMTCuuMrIqKf_4Fn87FXbds",
    authDomain: "ailifelens-89b4e.firebaseapp.com",
    projectId: "ailifelens-89b4e",
    storageBucket: "ailifelens-89b4e.firebasestorage.app",
    messagingSenderId: "1009517086364",
    appId: "1:1009517086364:web:4fd8057c1b96baeac28f59",
    measurementId: "G-7WBWM6TDGP"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Firebase Authentication
const auth = firebase.auth();

// Firebase Firestore
const db = firebase.firestore();