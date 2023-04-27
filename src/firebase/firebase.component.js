// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDLo67cXxKVbK-zKuDbdem6oB149O95dIE",
  authDomain: "e-commerce-4a2b2.firebaseapp.com",
  projectId: "e-commerce-4a2b2",
  storageBucket: "e-commerce-4a2b2.appspot.com",
  messagingSenderId: "396011933659",
  appId: "1:396011933659:web:3899d2fbb2fdb3b64061fe"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth= getAuth(app)