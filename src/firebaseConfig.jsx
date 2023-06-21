/* eslint-disable*/

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth,createUserWithEmailAndPassword } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCwlZ4fzSkTikdsxijdrLLHx_nzuxV_NdU",
  authDomain: "savoricius.firebaseapp.com",
  projectId: "savoricius",
  storageBucket: "savoricius.appspot.com",
  messagingSenderId: "778628992194",
  appId: "1:778628992194:web:de128da967350d4919bf5b",
  measurementId: "G-G8YGCFCMP7",
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
export const db = getFirestore(app);
export const firebaseAuthentication = getAuth(app);
export const createuser = createUserWithEmailAndPassword(app)
