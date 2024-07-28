import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD-uscyGpJBlOrUS2zDul-JcCeaX-4TVZk",
  authDomain: "carp-9b44e.firebaseapp.com",
  projectId: "carp-9b44e",
  storageBucket: "carp-9b44e.appspot.com",
  messagingSenderId: "402777565039",
  appId: "1:402777565039:web:85d43b76f13a0479ac2a9a"
};
  const app = initializeApp(firebaseConfig);
  export const database = getFirestore(app)