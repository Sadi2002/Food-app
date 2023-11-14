import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBVAH12oMz54MDnDvtuNZm-tmZTW7XHoLg",
  authDomain: "food-app-91235.firebaseapp.com",
  projectId: "food-app-91235",
  storageBucket: "food-app-91235.appspot.com",
  messagingSenderId: "27871959022",
  appId: "1:27871959022:web:b6c70b7d5a0a88e494e0ff",
};

firebase.initializeApp(firebaseConfig);

const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();
const projectStorage = firebase.storage();

export { projectFirestore, projectAuth, projectStorage };
