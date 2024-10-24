import React from 'react';
import './App.css';
// import './styles/public.css';
// import './styles/globle.css'
import './styles/section.css'
import './styles/resposiveness.css'

import { BrowserRouter } from 'react-router-dom';
import RoutesComponents from './routes/RoutesComponent';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
function App() {

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

  return (
    <BrowserRouter>
      <RoutesComponents />
    </BrowserRouter>
  );
}

export default App;