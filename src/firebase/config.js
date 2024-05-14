import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'; 
import 'firebase/compat/firestore'
import 'firebase/compat/storage'

const firebaseConfig = {
    apiKey: "AIzaSyDohRyHbJHKgKZ34ZQiiKxC94V8OFVclLE",
    authDomain: "olx-1b8af.firebaseapp.com",
    projectId: "olx-1b8af",
    storageBucket: "olx-1b8af.appspot.com",
    messagingSenderId: "346154573332",
    appId: "1:346154573332:web:ec127b924bf6e8934c1101",
    measurementId: "G-34VQK7ZLN6"
  };

 export const Firebase = firebase.initializeApp(firebaseConfig)