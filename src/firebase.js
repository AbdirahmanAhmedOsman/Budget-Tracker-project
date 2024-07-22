// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB-Q7QNLye-D2qBcsVgMyJq1eRTQraMPrk",
  authDomain: "abdiproject-b957d.firebaseapp.com",
  projectId: "abdiproject-b957d",
  storageBucket: "abdiproject-b957d.appspot.com",
  messagingSenderId: "171660597338",
  appId: "1:171660597338:web:bea26fe492fd31e760e063",
  measurementId: "G-70YCWE8MT7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);