import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDB6L-zlHz1nfVGzFrN9CcyrJQ7z2dWufU",
  authDomain: "fir-blog-21158.firebaseapp.com",
  projectId: "fir-blog-21158",
  storageBucket: "fir-blog-21158.appspot.com",
  messagingSenderId: "63459245705",
  appId: "1:63459245705:web:553132bca27eeee03e5058",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
