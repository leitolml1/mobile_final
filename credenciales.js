// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCsbNChAQmLURVd80PUioF_Q6r2llkljcc",
  authDomain: "hostalppmovil.firebaseapp.com",
  projectId: "hostalppmovil",
  storageBucket: "hostalppmovil.appspot.com",
  messagingSenderId: "439250145456",
  appId: "1:439250145456:web:1d92aac8f56cee98f1ab75",
  measurementId: "G-P2EYET426C"
};

// Initialize Firebase
const appFirebase = initializeApp(firebaseConfig);
export default appFirebase