
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBfmvJnahwe8QnsiHuVMQ5_PM2XVI4b5BQ",
  authDomain: "react-contact-crud-f0ad9.firebaseapp.com",
  projectId: "react-contact-crud-f0ad9",
  storageBucket: "react-contact-crud-f0ad9.appspot.com",
  messagingSenderId: "261123070696",
  appId: "1:261123070696:web:0f5e2ab017bd10cfcec75d",
  measurementId: "G-E4CGYSEQV7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export {
    db
}