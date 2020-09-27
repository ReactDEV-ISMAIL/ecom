import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const config = {
  apiKey: "AIzaSyCY_DIT9UOvxYrVh1vzKHtuk33TzQRKQog",
  authDomain: "crwn-db-b0681.firebaseapp.com",
  databaseURL: "https://crwn-db-b0681.firebaseio.com",
  projectId: "crwn-db-b0681",
  storageBucket: "crwn-db-b0681.appspot.com",
  messagingSenderId: "902455838437",
  appId: "1:902455838437:web:3d8fdfb140d67540cb360c",
  measurementId: "G-VF20CRVD6C",
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();
  console.log(userAuth, snapShot);

  if (!snapShot.exists) {
    const { displayName, email, photoURL } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        photoURL,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
