import { initializeApp } from "firebase/app";
import { getAuth } from "@firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyBHBuwghAxByIaha8zmnjAvvBnuYtNcNVM",
  authDomain: "authentication-2f072.firebaseapp.com",
  projectId: "authentication-2f072",
  storageBucket: "authentication-2f072.appspot.com",
  messagingSenderId: "845364286590",
  appId: "1:845364286590:web:b402c29d69984823c3742f",
  measurementId: "G-Q8B5Z332X2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const authentication = getAuth(app);