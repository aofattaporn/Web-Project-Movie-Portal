import firebase from 'firebase';
import 'firebase/analytics'

const firebaseConfig = firebase.initializeApp({
   apiKey: "AIzaSyC1e2XgFdaNGWsMpRce-w8cOGTua4st79Y",
   authDomain: "movieportal-authen.firebaseapp.com",
   projectId: "movieportal-authen",
   storageBucket: "movieportal-authen.appspot.com",
   messagingSenderId: "950533752204",
   appId: "1:950533752204:web:dd5a31838f3ff50cb042a9",
   measurementId: "G-53CZJCG1G4"
});

// Initail Firebase 
firebase.initializeApp(firebaseConfig);
firebase.analytics();

export default firebase;