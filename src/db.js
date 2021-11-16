import * as firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyDXDKzDxq9XLnZySeihyoRipK17KfIGJtQ",
    authDomain: "cellphone-6c0ca.firebaseapp.com",
    projectId: "cellphone-6c0ca",
    storageBucket: "cellphone-6c0ca.appspot.com",
    messagingSenderId: "941114055042",
    appId: "1:941114055042:web:45aaa32345eb1ff982179b",
    measurementId: "G-QGZVHCVFK6"
  };

  firebase.initializeApp(firebaseConfig)

  const storage = firebase.storage()
  const db = firebase.firestore()
  
  // Initialize Firebase
export{
    db,
    storage
}