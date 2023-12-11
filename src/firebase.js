// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore"; 
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration

const firebaseConfig = {
    apiKey: "AIzaSyDjbEdHzcv-Gsg-FEgRU_0h8TTTb_pKKBg",
    authDomain: "firestoretest-ec56f.firebaseapp.com",
    projectId: "firestoretest-ec56f",
    storageBucket: "firestoretest-ec56f.appspot.com",
    messagingSenderId: "505529610301",
    appId: "1:505529610301:web:ebcfa203ba77307cacba54"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app); 
export const db = getFirestore(app);
console.log(app,auth);