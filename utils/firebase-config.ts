// firebase-config.ts
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const apikey=process.env.NEXT_PUBLIC_FIREBASE_API_KEY;
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:apikey,
  authDomain: "bandu-manamperi.firebaseapp.com",
  projectId: "bandu-manamperi",
  storageBucket: "bandu-manamperi.appspot.com",
  messagingSenderId: "786744422951",
  appId: "1:786744422951:web:8c4c041b39c3a661a91402"
};

// Initialize Firebase and export the app
const app = initializeApp(firebaseConfig);
const auth=getAuth(app);

export default app;
