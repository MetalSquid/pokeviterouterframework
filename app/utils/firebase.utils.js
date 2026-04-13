import { initializeApp } from "firebase/app";

import {
  getAuth,
  signOut,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  updateProfile,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";

import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  collection,
  writeBatch,
  query,
  getDocs,
} from "firebase/firestore";

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



export const db = getFirestore();

export const addCollectionAndDocuments = async (
  collectionKey,
  objectsToAdd,
  field,
) => {
  const collectionRef = collection(db, collectionKey);
  const batch = writeBatch(db);

  objectsToAdd.forEach((object) => {
    const docRef = doc(collectionRef, object.title.toLowerCase());
    batch.set(docRef, object);
  });

  await batch.commit();
  console.log("done");
};

export const getCategoriesAndDocuments = async () => {
  const collectionRef = collection(db, "categories");
  const q = query(collectionRef);

  const querySnapshot = await getDocs(q);
  const categoryMap = querySnapshot.docs.reduce((acc, docSnapshot) => {
    const { title, items } = docSnapshot.data();
    acc[title.toLowerCase()] = items;
    return acc;
  }, {});

  return categoryMap;
};

export const createUserDocumentFromAuth = async (
  userAuth,
  additionalInformation = {}
) => {
  if (!userAuth) return;

  const userDocRef = doc(db, 'users', userAuth.uid);

  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const {displayName, email} = userAuth;
    const createdAt = new Date();

      try {
        await setDoc(userDocRef, {
          displayName,
          email,
          createdAt,
          ...additionalInformation,
        });
      } catch (error) {
        console.log('error creating the user', error.message);
      }
  }

  return userDocRef;
};

//firestore helpers

export const signUpAndUpdateProfile = async (email, password, displayName) => {
  if (!email || !password || !displayName) return;

  const userCredential = await createUserWithEmailAndPassword(auth, email, password);

  // set displayName immediately after account creation
  await updateProfile(userCredential.user, { displayName });

  // save to firestore with the displayName already set
  await createUserDocumentFromAuth(userCredential.user);

  return userCredential;
};

export const logInEmail = async (email, password) => {
  if (!email || !password) return;

  return await signInWithEmailAndPassword(auth, email, password);
};

export const googleProvider = new GoogleAuthProvider();

export const signInWithGoogle = async () => {
  const result = await signInWithPopup(auth, googleProvider);
  await createUserDocumentFromAuth(result.user);
  return result;
};

export const loggingOut = async () => {
  await signOut(auth);
};

export const onAuthStateChangedListener = (callback) => {
  if (!callback) return () => {};
  return onAuthStateChanged(auth, callback);
};

export const getCurrentUser = () => auth.currentUser;

// firebase auth helpers

// persist cart to firestore on refreshes

export const saveCartToFirestore = async (userId, cartItems) => {
  const cartRef = doc(db, "users", userId, "cart", "items");
  await setDoc(cartRef, { cartItems });
};

export const getCartFromFirestore = async (userId) => {
  const cartRef = doc(db, "users", userId, "cart", "items");
  const cartSnapshot = await getDoc(cartRef);
  if (cartSnapshot.exists()) {
    return cartSnapshot.data().cartItems;
  }
  return [];
};