import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAI2ncnfoqZtDE5-PSg_QOk74ZISJ5Uj8M",
  authDomain: "projeto1-5663a.firebaseapp.com",
  projectId: "projeto1-5663a",
  storageBucket: "projeto1-5663a.appspot.com",
  messagingSenderId: "537948158249",
  appId: "1:537948158249:web:0f6323cadda21ccb0cdf38"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

const db = getFirestore(app);
export { db, auth };
