const firebase = require('firebase');

const firebaseConfig = {
    apiKey: "AIzaSyBduoy60IGRNJPp6CFgoLFfvX4AgojdkKE",
    authDomain: "api-node-dane.firebaseapp.com",
    databaseURL: "https://api-node-dane.firebaseio.com",
    projectId: "api-node-dane",
    storageBucket: "api-node-dane.appspot.com",
    messagingSenderId: "368428171268",
    appId: "1:368428171268:web:024208d128eaa663273551",
    measurementId: "G-03H19PKCW3"
  };


  firebase.initializeApp(firebaseConfig);

  module.exports = {
    FIRESTORE: firebase.firestore(),
    AUTH: firebase.auth()
  }