import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDe4Lahfj4aounVrqaIxS-srwblQlxkx5Y",
  authDomain: "pruebareact-37ac8.firebaseapp.com",
  projectId: "pruebareact-37ac8",
  storageBucket: "pruebareact-37ac8.appspot.com",
  messagingSenderId: "955393356560",
  appId: "1:955393356560:web:4bfefc98bb57425580ab95",
};

const app = initializeApp(firebaseConfig); //Starts everything up

export const db = getFirestore(app);
