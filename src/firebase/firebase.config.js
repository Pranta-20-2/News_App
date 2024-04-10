// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBca5b-ie6wWPjgi0NZ5xgwKk5kFwmORHw",
  authDomain: "react-dragonnews-auth-782df.firebaseapp.com",
  projectId: "react-dragonnews-auth-782df",
  storageBucket: "react-dragonnews-auth-782df.appspot.com",
  messagingSenderId: "451863705776",
  appId: "1:451863705776:web:98ddd366c826c5f6dc6375"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;