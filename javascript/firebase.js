import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/10.13.1/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyCcfnkETqjn0a9mpMAs-hah5bQFvIl7SkA",
  authDomain: "netro-form.firebaseapp.com",
  projectId: "netro-form",
  storageBucket: "netro-form.appspot.com",
  messagingSenderId: "59243158138",
  appId: "1:59243158138:web:31e17036416c778a85f9c3",
  measurementId: "G-RWNR7MCWEQ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export {
  auth,
  app,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
};
