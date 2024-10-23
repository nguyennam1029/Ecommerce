// src/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCKOBxCuAlGPT-24mlpo35NOPsrcAH-S-s",
  authDomain: "fir-crud-e586c.firebaseapp.com",
  databaseURL: "https://fir-crud-e586c-default-rtdb.firebaseio.com",
  projectId: "fir-crud-e586c",
  storageBucket: "fir-crud-e586c.appspot.com",
  messagingSenderId: "962189898874",
  appId: "1:962189898874:web:289b174281eb8d6c5df7c3",
};

// Khởi tạo Firebase
const app = initializeApp(firebaseConfig);

// Lấy Firestore instance
const db = getFirestore(app);

export { db };
