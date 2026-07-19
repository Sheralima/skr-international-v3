import { initializeApp } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-app.js";
‎
‎import { getAuth } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-auth.js";
‎
‎import { getFirestore } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-firestore.js";
‎
‎const firebaseConfig = {
‎
‎  apiKey: "AIzaSyARX24b0EnCmh-3WcYfy9wtgj5vpHUNEPQ",
‎
‎  authDomain: "sherry-project-1214.firebaseapp.com",
‎
‎  projectId: "sherry-project-1214",
‎
‎  storageBucket: "sherry-project-1214.firebasestorage.app",
‎
‎  messagingSenderId: "692003406873",
‎
‎  appId: "1:692003406873:web:1addf2cb2437cfe1761688"
‎
‎};
‎
‎const app = initializeApp(firebaseConfig);
‎
‎const auth = getAuth(app);
‎
‎const db = getFirestore(app);
‎
‎export { auth, db };
‎
