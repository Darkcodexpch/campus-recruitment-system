import firebase from 'firebase/compat/app'
import 'firebase/compat/database'
import 'firebase/compat/auth'

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCJiVxzRYil_V0Giy-K1m2GHMd9RGdEs1E",
  authDomain: "ashtarglobalsolutionbootcamp.firebaseapp.com",
  projectId: "ashtarglobalsolutionbootcamp",
  storageBucket: "ashtarglobalsolutionbootcamp.appspot.com",
  messagingSenderId: "34578463897",
  appId: "1:34578463897:web:a08f841cd86df420e74c08",
  measurementId: "G-Y2FEV3TXHJ"

});

const db = firebaseApp.database();
const auth = firebaseApp.auth();
export{db,auth}