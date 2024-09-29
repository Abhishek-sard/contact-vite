// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDmr410jn-qjsKZNe4WcSxcTUxhJWLCZl8",
  authDomain: "vite-contact-49be0.firebaseapp.com",
  projectId: "vite-contact-49be0",
  storageBucket: "vite-contact-49be0.appspot.com",
  messagingSenderId: "876322102134",
  appId: "1:876322102134:web:b2b83cffd741bfe0e23857"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);