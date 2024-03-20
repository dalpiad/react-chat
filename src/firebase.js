// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyADyZHju1Wg0k0EWGuy-I-e6P9AkGlsA_o",
  authDomain: "react-chat-c4603.firebaseapp.com",
  projectId: "react-chat-c4603",
  storageBucket: "react-chat-c4603.appspot.com",
  messagingSenderId: "469514364821",
  appId: "1:469514364821:web:51065c4f16ac0be2e7389c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);