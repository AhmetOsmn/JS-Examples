import firebase from 'firebase';
import 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyBTzvNNErb6oXXfhzjiihl5T1kayXXszAo",
    authDomain: "twitter-clone-mine.firebaseapp.com",
    projectId: "twitter-clone-mine",
    storageBucket: "twitter-clone-mine.appspot.com",
    messagingSenderId: "184697886973",
    appId: "1:184697886973:web:c8ee3b82186205665d0694",
    measurementId: "G-V2B5KMF3YW"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  const db = firebase.firestore();

  export default db;