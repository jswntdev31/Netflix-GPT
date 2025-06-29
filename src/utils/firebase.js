// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB5WDKBfBT7FESGgUXYWv5nUxRg0X-GCxw",
  authDomain: "netflix-gpt-28dc5.firebaseapp.com",
  projectId: "netflix-gpt-28dc5",
  storageBucket: "netflix-gpt-28dc5.firebasestorage.app",
  messagingSenderId: "114402672707",
  appId: "1:114402672707:web:96608cb768df746543d4f6",
  measurementId: "G-3B4N8KQ8N0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
