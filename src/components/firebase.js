import { initializeApp } from 'firebase/app'
import {getAuth} from "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyAh6xBFzQj6bs6H0ejraIAwhwoXwlnmnzg",
    authDomain: "food-delivery-c9795.firebaseapp.com",
    projectId: "food-delivery-c9795",
    storageBucket: "food-delivery-c9795.appspot.com",
    messagingSenderId: "17756883545",
    appId: "1:17756883545:web:d3d88b6af9f3943479ff48"
  };
  
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  export {auth};