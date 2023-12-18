
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyD75knAEywZRku6CKbwECOrZ1AbjdWn3F0",
  authDomain: "house-marketplace-app-876e0.firebaseapp.com",
  projectId: "house-marketplace-app-876e0",
  storageBucket: "house-marketplace-app-876e0.appspot.com",
  messagingSenderId: "705278689852",
  appId: "1:705278689852:web:9d85d7344f9f585f52f939",
  measurementId: "G-QW1HH3PX7Y",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore()