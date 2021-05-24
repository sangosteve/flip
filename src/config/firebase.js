import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAkJHePoOG6bEHeI4aVH_vEcW_fqzBn6js",
  authDomain: "flip-e2635.firebaseapp.com",
  projectId: "flip-e2635",
  storageBucket: "flip-e2635.appspot.com",
  messagingSenderId: "88076980444",
  appId: "1:88076980444:web:ef88eca4fb4fbfe9b8a419",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
export { db, auth, provider };
