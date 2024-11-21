// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDsAbHXceTyaKQVk8H1-aeNMqpGcHE0uv0",
  authDomain: "fir-data-91495.firebaseapp.com",
  databaseURL: "https://fir-data-91495-default-rtdb.firebaseio.com",
  projectId: "fir-data-91495",
  storageBucket: "fir-data-91495.firebasestorage.app",
  messagingSenderId: "213767067368",
  appId: "1:213767067368:web:b2463fcc3db0bf42ba9b5d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
 const auth=getAuth(app)
  

 export default auth
