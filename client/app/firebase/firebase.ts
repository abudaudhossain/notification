// firebase.js
import { getMessaging, getToken } from 'firebase/messaging';
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBg9VGBZredsRpizZTa8ICI3PFE3cA9Tpo",
    authDomain: "lead-management-sg.firebaseapp.com",
    projectId: "lead-management-sg",
    storageBucket: "lead-management-sg.firebasestorage.app",
    messagingSenderId: "50274245974",
    appId: "1:50274245974:web:5708424bccf1be9bcd8af7",
    // measurementId: "G-XB743WTCKD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Get Firebase messaging instance
const messaging = getMessaging(app);

const auth = getAuth();




const getFCMToken = async () => {
    const user = auth.currentUser;
    console.log("user--------------", auth)
    if (user) {
        // Request permission to show notifications

    } else {
        console.log('User is not authenticated');
    }
};



export { messaging, getToken, getFCMToken, signInWithPopup, auth };
