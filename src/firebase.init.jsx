// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCSpo7ql8tgxyeP0BOrr3Ol5GDRxZ90RvQ",
  authDomain: "travel-guru-e24b0.firebaseapp.com",
  projectId: "travel-guru-e24b0",
  storageBucket: "travel-guru-e24b0.appspot.com",
  messagingSenderId: "99531206763",
  appId: "1:99531206763:web:ba49075fbc730a2bc6c12e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;