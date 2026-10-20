
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "ainotes-178fd.firebaseapp.com",
  projectId: "ainotes-178fd",
  storageBucket: "ainotes-178fd.firebasestorage.app",
  messagingSenderId: "264950270606",
  appId: "1:264950270606:web:06e9854d1343058281d7df",
  measurementId: "G-Z49T9FSQ2J"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

const provider = new GoogleAuthProvider()

export {auth , provider}