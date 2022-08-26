// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDTnAYhq_mCEGmVdjQiTrXjtQTvT1jCorw",
  authDomain: "ecom0001-zeon.firebaseapp.com",
  projectId: "ecom0001-zeon",
  storageBucket: "ecom0001-zeon.appspot.com",
  messagingSenderId: "513167388102",
  appId: "1:513167388102:web:f1fcc63ed5ca42e93896c7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
