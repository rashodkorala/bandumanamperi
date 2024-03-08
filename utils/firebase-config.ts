// firebase-config.ts
import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "bandu-manamperi.firebaseapp.com",
  projectId: "bandu-manamperi",
  storageBucket: "bandu-manamperi.appspot.com",
  messagingSenderId: "786744422951",
  appId: "1:786744422951:web:8c4c041b39c3a661a91402"
};

// Initialize Firebase and export the app
const app = initializeApp(firebaseConfig);

export default app;