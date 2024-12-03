// firebase.js
import { getMessaging, getToken } from 'firebase/messaging';
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAFNYI5O94JP7Drum9ivVe6CiKPuNQDahE",
    authDomain: "notification-75b36.firebaseapp.com",
    projectId: "notification-75b36",
    storageBucket: "notification-75b36.firebasestorage.app",
    messagingSenderId: "910218300815",
    appId: "1:910218300815:web:cd3180a289927d9e500ffa"
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
