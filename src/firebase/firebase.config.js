// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCZ-LztysxRpgHDUT-GxQZhryxh3XgQ7_0",
  authDomain: "hotel-booking-61cec.firebaseapp.com",
  projectId: "hotel-booking-61cec",
  storageBucket: "hotel-booking-61cec.appspot.com",
  messagingSenderId: "867776999438",
  appId: "1:867776999438:web:1f19780381099e43178c5f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
