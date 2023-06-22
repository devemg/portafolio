// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCU5s8zkcm6xKERDoPD3YbDIF9JUF8Payw",
  authDomain: "devemg-f044d.firebaseapp.com",
  projectId: "devemg-f044d",
  storageBucket: "devemg-f044d.appspot.com",
  messagingSenderId: "421902825236",
  appId: "1:421902825236:web:c50e1c5fbcac729db13401",
  measurementId: "G-2K2FK6YJS5"
};


// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
export const analytics = getAnalytics(firebaseApp);

