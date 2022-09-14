import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCfcvMAuhcYCAmoXyAf57GAcmBl6S7lvls",
  authDomain: "spotify-example-1e45a.firebaseapp.com",
  projectId: "spotify-example-1e45a",
  storageBucket: "spotify-example-1e45a.appspot.com",
  messagingSenderId: "358314423142",
  appId: "1:358314423142:web:e771ea65a6d82c7e544ea7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);