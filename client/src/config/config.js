// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC1e2XgFdaNGWsMpRce-w8cOGTua4st79Y",
  authDomain: "movieportal-authen.firebaseapp.com",
  projectId: "movieportal-authen",
  storageBucket: "movieportal-authen.appspot.com",
  messagingSenderId: "950533752204",
  appId: "1:950533752204:web:dd5a31838f3ff50cb042a9",
  measurementId: "G-53CZJCG1G4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);