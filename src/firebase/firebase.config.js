// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBKDMWUfIfNEalWvYfo7H0euJZzDvJmDC0",
  authDomain: "portfolio-galib.firebaseapp.com",
  projectId: "portfolio-galib",
  storageBucket: "portfolio-galib.appspot.com",
  messagingSenderId: "838934045387",
  appId: "1:838934045387:web:470932faab09d9a4a9f14e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;