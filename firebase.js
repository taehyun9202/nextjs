import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDMAVbVneSBybgCWo6sxPs_JuNm9ubGcYg",
  authDomain: "nextwhatsapp-2e815.firebaseapp.com",
  projectId: "nextwhatsapp-2e815",
  storageBucket: "nextwhatsapp-2e815.appspot.com",
  messagingSenderId: "920830306615",
  appId: "1:920830306615:web:a4c5a90aba12447a2652b2",
  measurementId: "G-S4FFBV6KBB",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();
const auth = app.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
