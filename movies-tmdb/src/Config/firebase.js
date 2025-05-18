// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCDXyTz2C-nVIgDOjqypqEtHq0K1KxNheY",
  authDomain: "movies-tmdb-5ceb1.firebaseapp.com",
  projectId: "movies-tmdb-5ceb1",
  storageBucket: "movies-tmdb-5ceb1.firebasestorage.app",
  messagingSenderId: "477998985398",
  appId: "1:477998985398:web:c042e9c49c7bca87bbb617",
  measurementId: "G-88W5L0N39Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export default app;