import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, setPersistence, browserLocalPersistence } from "firebase/auth";

export const firebaseConfig = {
  apiKey: "AIzaSyB5oDU-SJH87NFtiTb-XDmvk2B-L_QCOCg",
  authDomain: "tcg-corner.firebaseapp.com",
  projectId: "tcg-corner",
  storageBucket: "tcg-corner.appspot.com",
  messagingSenderId: "409104170287",
  appId: "1:409104170287:web:c405665321b4420fad75da",
  measurementId: "G-00Y9X43G83",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Set up persistence
setPersistence(auth, browserLocalPersistence);

const provider = new GoogleAuthProvider();

export { auth, provider };

export default app;

// Initialize Firebase
