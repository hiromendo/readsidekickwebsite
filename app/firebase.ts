// Import the functions you need from the SDKs you need
import  {initializeApp}  from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// Import the functions you need from the SDKs you need
//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBCjnePn1RTyyLIijl0_1LQXYUg42Y-x5g",
  authDomain: "readsidekick.firebaseapp.com",
  projectId: "readsidekick",
  storageBucket: "readsidekick.firebasestorage.app",
  messagingSenderId: "397611226779",
  appId: "1:397611226779:web:4347327b7066e69130183e",
  measurementId: "G-PD32HJDE11"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export const initFirebase = () => {
  return app;
};
