// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDl32haDC6xhLH9s2XMICemFusxCC8ImYE",
  authDomain: "budget-trucker-project.firebaseapp.com",
  projectId: "budget-trucker-project",
  storageBucket: "budget-trucker-project.appspot.com",
  messagingSenderId: "469384560386",
  appId: "1:469384560386:web:aab4310f69fb8acd358c1b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);