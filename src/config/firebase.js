import firebase from 'firebase/app';
import "firebase/firestore";
import "firebase/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_API_KEY,
    projectId: process.env.REACT_APP_API_KEY,
    storageBucket: process.env.REACT_APP_API_KEY,
    messagingSenderId: process.env.REACT_APP_API_KEY,
    appId: process.env.REACT_APP_API_KEY,
    measurementId: process.env.REACT_APP_API_KEY
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

export const db = firebase.firestore();

//const userPlus = () => {

//}

export default firebase;
