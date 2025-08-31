// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyArhbI6z229MWp_mtMJlev2BPvFRJ7q7jc",
  authDomain: "private-aute.firebaseapp.com",
  projectId: "private-aute",
  storageBucket: "private-aute.firebasestorage.app",
  messagingSenderId: "898481451325",
  appId: "1:898481451325:web:cd3b40574ad688f6759554"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);