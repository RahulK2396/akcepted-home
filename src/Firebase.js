// src/Firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth, sendPasswordResetEmail, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore'; 

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDiJETUA5C6VOM2YC4nBWI8Y_zXQLgjmVg",
  authDomain: "akcepted-a8785.firebaseapp.com",
  projectId: "akcepted-a8785",
  storageBucket: "akcepted-a8785.appspot.com",
  messagingSenderId: "609988651099",
  appId: "1:609988651099:web:5d7ca275e3fd8f6be6f77e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db,sendPasswordResetEmail, createUserWithEmailAndPassword, signInWithEmailAndPassword };















