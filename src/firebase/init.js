import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC-HwlLyNXqdApGR3SLj5qpQuHaXLYJOwQ",
  authDomain: "persondb-9311c.firebaseapp.com",
  projectId: "persondb-9311c",
  storageBucket: "persondb-9311c.appspot.com",
  messagingSenderId: "613650828064",
  appId: "1:613650828064:web:da63c0d83e26217ac3e545"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

const db = getFirestore(app);
export { db, auth };
