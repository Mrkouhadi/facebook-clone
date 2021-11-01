import firebase from 'firebase';
import 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyCmS0WaAOMlBDvOX45AANzZOTyA6Tm1CTI",
  authDomain: "facebook-clone-b39e1.firebaseapp.com",
  projectId: "facebook-clone-b39e1",
  storageBucket: "facebook-clone-b39e1.appspot.com",
  messagingSenderId: "357393559832",
  appId: "1:357393559832:web:4699e7f3d1e3c79f136e6d"
};

const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

const db = app.firestore();
const storage = firebase.storage();

export { db, storage };