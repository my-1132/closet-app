// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBYciCTpkgLlANlNwA6sOUN5MVuE7zcxLc",
    authDomain: "closet-97d27.firebaseapp.com",
    projectId: "closet-97d27",
    storageBucket: "closet-97d27.appspot.com",
    messagingSenderId: "681046491700",
    appId: "1:681046491700:web:d17dc94105fb75bfefc061",
    measurementId: "G-K1J456X436"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);