// SKR INTERNATIONAL V3 Firebase Setup

import { initializeApp } from "https://www.gstatic.com/firebasejs/12.15.0/firebase-app.js";

import { 
getAuth 
} from "https://www.gstatic.com/firebasejs/12.15.0/firebase-auth.js";


// Firebase Configuration
// Apna Firebase Console wala code yahan paste karein

const firebaseConfig = {

  apiKey: "YOUR_API_KEY",

  authDomain: "YOUR_PROJECT.firebaseapp.com",

  projectId: "YOUR_PROJECT_ID",

  storageBucket: "YOUR_PROJECT.appspot.com",

  messagingSenderId: "YOUR_SENDER_ID",

  appId: "YOUR_APP_ID"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);


// Authentication

const auth = getAuth(app);


export { auth };
