// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC3j8rZF1xTwlpBdf9PPH4KGhsegv9t4Xw",
  authDomain: "fire-contact-app-67e92.firebaseapp.com",
  databaseURL: "https://fire-contact-app-67e92-default-rtdb.firebaseio.com",
  projectId: "fire-contact-app-67e92",
  storageBucket: "fire-contact-app-67e92.appspot.com",
  messagingSenderId: "197774904079",
  appId: "1:197774904079:web:fe7c26cc04702624ebcc7a",
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);
export default firebase;
