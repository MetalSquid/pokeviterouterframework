import { initializeApp } from "firebase/app";

import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";

import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyAgp--yTurEucQFOqVQQyKdGxDGk0VYiQg",
  authDomain: "pokestore2-bd347.firebaseapp.com",
  projectId: "pokestore2-bd347",
  storageBucket: "pokestore2-bd347.firebasestorage.app",
  messagingSenderId: "712727982156",
  appId: "1:712727982156:web:ce7c3ad1dd4b1efc7544e9",
  measurementId: "G-NLD9EDMC2E",
};

// Initialize Firebase

const firebaseApp = initializeApp(firebaseConfig);

// const analytics = getAnalytics(firebaseApp);

export const auth = getAuth(firebaseApp);

export const signUpEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password);
};

export const logInEmail = async (email, password) => {
  if (!email || !password) return;

  return await signInWithEmailAndPassword(auth, email, password);
};

export const loggingOut = async () => {
  await signOut(auth);
};

export const onAuthStateChangedListener = async (callback) => {
  if (!callback) return;

  return await onAuthStateChanged(auth, callback);
};

