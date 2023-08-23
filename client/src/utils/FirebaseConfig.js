import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBFRYZjAoUOOqofaAX6PvKeg3t7kEQQWUQ",
    authDomain: "rubie-app.firebaseapp.com",
    projectId: "rubie-app",
    storageBucket: "rubie-app.appspot.com",
    messagingSenderId: "323873297697",
    appId: "1:323873297697:web:d6b2fcc2611adcc98eda60",
    measurementId: "G-RW2XE64PJF"
  };

const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);