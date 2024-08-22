// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD2CCCS41ap72Q2Ma1JfifQufhwrN0C8sU",
  authDomain: "gurukulamai-a966d.firebaseapp.com",
  projectId: "gurukulamai-a966d",
  storageBucket: "gurukulamai-a966d.appspot.com",
  messagingSenderId: "710965450379",
  appId: "1:710965450379:web:d05c65783a88d7facfa68e",
  measurementId: "G-2LNDEHDEB4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);