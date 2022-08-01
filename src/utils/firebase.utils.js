import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB1vXzCheKGUZviG4wb1j3t8nLsyshJxUw",

  authDomain: "crwn-clothing-db-184a4.firebaseapp.com",

  projectId: "crwn-clothing-db-184a4",

  storageBucket: "crwn-clothing-db-184a4.appspot.com",

  messagingSenderId: "489579364387",

  appId: "1:489579364387:web:a9a849ba27763a4490f196",

  measurementId: "G-LL3P41PM9T",
};

// Initialize Firebase

const firebaseApp = initializeApp(firebaseConfig);

const analytics = getAnalytics(firebaseApp);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();

export const signInWithGooglePopUp = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, "users", userAuth.uid);

  const userSnapshot = await getDoc(userDocRef);

  //if user data does not exist
  //create / set the document with the data from userAuth in my collection
  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
      });
    } catch (error) {
      console.log("error creating the user", error.message);
    }
    //if user data exists
    //return userDocRef
    return userDocRef;
  }
};
