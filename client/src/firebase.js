// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: 'mern-estate-26939.firebaseapp.com',
  projectId: 'mern-estate-26939',
  storageBucket: 'mern-estate-26939.appspot.com',
  messagingSenderId: '431073468907',
  appId: '1:431073468907:web:0a541a40aeffd0ea3439ae',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
