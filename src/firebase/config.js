import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDBWcTqxTl7CmR2kvVo-RPMRSqvV2ZKZRo",
  authDomain: "cartabar-f34fa.firebaseapp.com",
  projectId: "cartabar-f34fa",
  storageBucket: "cartabar-f34fa.appspot.com",
  messagingSenderId: "313777203416",
  appId: "1:313777203416:web:6cc7903dd1991b8b088fad",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const initFirebase = () => app;
