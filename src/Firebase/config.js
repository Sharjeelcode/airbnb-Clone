import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA-hkkLF8_KKQ2AxRVWirJ19HvyQWGVCEg",
  authDomain: "airbnb-clone-112eb.firebaseapp.com",
  projectId: "airbnb-clone-112eb",
  storageBucket: "airbnb-clone-112eb.appspot.com",
  messagingSenderId: "924840585271",
  appId: "1:924840585271:web:085ad5cbddd53f0f5737b2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider(app);
const db = getFirestore(app);
export { app, auth, provider ,db};