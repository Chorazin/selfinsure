import firebase from 'firebase'
import firestore from 'firebase/firestore'

// Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyC-Q-S_GKtFSTeDaVIooJ6elh_KSNZ2FJE",
    authDomain: "sample-self-insure.firebaseapp.com",
    databaseURL: "https://sample-self-insure.firebaseio.com",
    projectId: "sample-self-insure",
    storageBucket: "sample-self-insure.appspot.com",
    messagingSenderId: "945138823813",
    appId: "1:945138823813:web:0cdaf89090082039"
  };

// Initialize Firebase
const firebase_app = firebase.initializeApp(firebaseConfig);


//export firestore database
export default firebase_app.firestore()
