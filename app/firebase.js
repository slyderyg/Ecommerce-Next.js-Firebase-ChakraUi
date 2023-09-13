import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
    apiKey: "AIzaSyCOmYM9riXYibC7lmpPzrWTBtItpoF8Rj0",
    authDomain: "next-firebase-ecommerce-c9c8e.firebaseapp.com",
    projectId: "next-firebase-ecommerce-c9c8e",
    storageBucket: "next-firebase-ecommerce-c9c8e.appspot.com",
    messagingSenderId: "1030442582056",
    appId: "1:1030442582056:web:05245569165f674e8b751d"
  };


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);