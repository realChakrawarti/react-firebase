// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import {getAuth, GoogleAuthProvider} from "firebase/auth"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBCQLfCT4TxdbrmzsnkGDnrRcSznypUuyA",
  authDomain: "fir-go-c3121.firebaseapp.com",
  projectId: "fir-go-c3121",
  storageBucket: "fir-go-c3121.appspot.com",
  messagingSenderId: "774470780267",
  appId: "1:774470780267:web:5b230b357be067f3e1782e",
  measurementId: "G-0J85VP9Q9Z",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

// Initialize Firestore
export const firestore = getFirestore(app);
export const auth = getAuth(app)
export const googleAuthProvider = new GoogleAuthProvider()