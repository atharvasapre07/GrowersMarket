// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAQMkKSv7Lgnc6v1SGoarp1ksRBw6sQTTk",
  authDomain: "growers-market-8904e.firebaseapp.com",
  projectId: "growers-market-8904e",
  storageBucket: "growers-market-8904e.firebasestorage.app",
  messagingSenderId: "835679324066",
  appId: "1:835679324066:web:cb8811abac11bd6f4e54fb",
  measurementId: "G-L53FTFWYC0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const fireDB = getFirestore(app);

const auth = getAuth(app);

export { auth, fireDB }