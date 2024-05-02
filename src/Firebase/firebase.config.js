// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCyLTVrgKJ7cJXNgdngCaOXSySah0Wv3fU",
  authDomain: "cars-doctor-386ea.firebaseapp.com",
  projectId: "cars-doctor-386ea",
  storageBucket: "cars-doctor-386ea.appspot.com",
  messagingSenderId: "185663222071",
  appId: "1:185663222071:web:17e73cdfcafca1544caab2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth
