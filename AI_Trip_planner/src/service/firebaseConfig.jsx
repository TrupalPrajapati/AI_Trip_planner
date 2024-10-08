// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCly_pwyajnxOAuYyacdVH30PQIDjkeRmM",
  authDomain: "ai-trip-planner-280bf.firebaseapp.com",
  projectId: "ai-trip-planner-280bf",
  storageBucket: "ai-trip-planner-280bf.appspot.com",
  messagingSenderId: "285068682748",
  appId: "1:285068682748:web:b90b61f2daef080a80fe79",
  measurementId: "G-1S0WYBEK7G"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
// const analytics = getAnalytics(app);