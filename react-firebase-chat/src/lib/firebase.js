import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "reactchat-75ed3.firebaseapp.com",
  projectId: "reactchat-75ed3",
  storageBucket: "reactchat-75ed3.firebasestorage.app",
  messagingSenderId: "460559700910",
  appId: "1:460559700910:web:5dfb2e4cd5eb93122fae3f"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getFirestore();
export const storage = getStorage();