// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword  , signInWithEmailAndPassword} from "firebase/auth"; // Import auth functions
import {getFirestore} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDQ4kRPCwkitkEjs6wi1X3QevrW407zo0w",
  authDomain: "connect-with-us-29750.firebaseapp.com",
  projectId: "connect-with-us-29750",
  storageBucket: "connect-with-us-29750.appspot.com",
  messagingSenderId: "994199260504",
  appId: "1:994199260504:web:94c66af851f34d44d9692d",
  measurementId: "G-E7JXMWV773"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app)
const firestore = getFirestore(app);

export { auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, firestore };
