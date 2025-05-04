// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA9W7vAL23jNTge93N4kOpLfLIAnhwDAcA",
  authDomain: "intervueai-1da99.firebaseapp.com",
  projectId: "intervueai-1da99",
  storageBucket: "intervueai-1da99.firebasestorage.app",
  messagingSenderId: "559076239885",
  appId: "1:559076239885:web:82c7031402f4a649970344",
  measurementId: "G-TKE9B0F8F6"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
// const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const db = getFirestore(app);