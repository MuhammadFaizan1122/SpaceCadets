import firebase from 'firebase';
import 'firebase/database'
import 'firebase/auth'

///////////////// Client's Account configuration


var firebaseConfig = {
       apiKey: "AIzaSyBQUJY9nLDuzUvwB3w14ivD4b8fqBQP3ac",
       authDomain: "space-cadets-1e928.firebaseapp.com",
       projectId: "space-cadets-1e928",
       storageBucket: "space-cadets-1e928.appspot.com",
       messagingSenderId: "580892917192",
       appId: "1:580892917192:web:f1ec8b365ce2ffb5cc14fd",
       measurementId: "G-D47CYVZXJ0"
};

// Initialize Firebase

firebase.initializeApp(firebaseConfig);

export default firebase;