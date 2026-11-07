import { getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCB32qyCHnDCRM7b0-hP0lDvWks0bS1pmU",
  authDomain: "turborepo-review.firebaseapp.com",
  projectId: "turborepo-review",
  storageBucket: "turborepo-review.firebasestorage.app",
  messagingSenderId: "536942528348",
  appId: "1:536942528348:web:6e202d1982228115016399",
};

// Initialize Firebase
const firebaseApp =
  getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

const auth = getAuth(firebaseApp);

export { firebaseApp, auth };
