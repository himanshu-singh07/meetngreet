// Import the functions you need from the SDKs you need
// import firebase from "firebase/app";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCdN5orFkPwmeL-iGjkupgz_DlTmEIZ7Lc",
  authDomain: "twiter-clone-ede8f.firebaseapp.com",
  projectId: "twiter-clone-ede8f",
  storageBucket: "twiter-clone-ede8f.appspot.com",
  messagingSenderId: "190246700403",
  appId: "1:190246700403:web:53d35d65ad10c4e09eb106",
  measurementId: "G-LH4P5ZWXFP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// const firebaseApp = firebase.initializeApp(firebaseConfig);

// const db = firebaseApp.firestore();

export default analytics;