
import { async } from "@firebase/util";
import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth';
import {
    getFirestore,
    doc,
    getDoc,
    setDoc,
    collection,
    writeBatch,
    query,
    getDocs,
    updateDoc
  } from 'firebase/firestore';

//testing CartContext
import { useContext } from 'react'
import { CartContext } from "../../context/cart.context";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBN8He7kq5Lh59diZPlBgfXqeKPZ1gQxIk",
  authDomain: "marvelmerch-9caeb.firebaseapp.com",
  projectId: "marvelmerch-9caeb",
  storageBucket: "marvelmerch-9caeb.appspot.com",
  messagingSenderId: "547040626286",
  appId: "1:547040626286:web:f01e1a3cbc1e6fc53e487f"
};
const firebaseApp = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
  prompt: 'select_account',
});

export const auth = getAuth();
export const signInWithGooglePopup = () =>
  signInWithPopup(auth, googleProvider);
export const signInWithGoogleRedirect = () =>
  signInWithRedirect(auth, googleProvider);

export const db = getFirestore();

export const addCollectionAndDocuments = async (
  collectionKey,
  objectsToAdd,
  field
) => {
  const collectionRef = collection(db, collectionKey);
  const batch = writeBatch(db);

  objectsToAdd.forEach((object) => {
    const docRef = doc(collectionRef, object.title.toLowerCase());
    batch.set(docRef, object);
  });

  await batch.commit();
  console.log('done');
};

export const getCategoriesAndDocuments = async () => {
  const collectionRef = collection(db, 'categories');
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
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    const cart = [];
    const storedOrders = []

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        cart,
        storedOrders,
        ...additionalInformation,
      });
    } catch (error) {
      console.log('error creating the user', error.message);
    }
  }

  return userDocRef;
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password);
};

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await signInWithEmailAndPassword(auth, email, password);
};

//cart test for storing Cart in Firebase
// export const firebaseAddToCollection = async (
//     userAuth, cartItems  ) => {
//     if (!userAuth) return;

//     const userDocRef = doc(db, 'users', userAuth.uid);

//     const userSnapshot = await getDoc(userDocRef)

//   const userCart = collection(db, 'users')
//   console.log('this is the user cart', userCart)
//   console.log('this is the logged in user', userSnapshot._document.data.value.mapValue.fields.displayName)
//   try {
//     await setDoc(userDocRef, {
//       cart: cartItems
//     });
//   } catch (error) {
//     console.log('error creating the cart', error.message);
//   }

// }

export const storeOrderedCart = async (userAuth, cartItems) => {
  if (!userAuth) return;
  const userDocRef = doc(db, 'users', userAuth.uid);

    const userSnapshot = await getDoc(userDocRef)

  try {
        await updateDoc(userDocRef, {
          storedOrders: cartItems
        });
      } catch (error) {
        console.log('error creating the stored cart', error.message);
      }
}

export const getUserStoredCartFromCollection = async (userAuth) => {
  if (!userAuth) return;

    try {
      const userDocRef = doc(db, 'users', userAuth.uid);

      const userSnapshot = await getDoc(userDocRef)
      // console.log('this is the user snapshot', userSnapshot)
      const collectedStoredCartValue = userSnapshot._document.data.value.mapValue.fields.storedOrders.arrayValue.values[0].mapValue.fields.name.stringValue
      //can I get the cartContext into this
      //if I can, set the stored, then simply access the stored through the account page
      console.log('this is the usersnapshot stored cart test', collectedStoredCartValue)

      return collectedStoredCartValue
    } catch (error) {
      console.log("error with try/catch from getUserStoredCartFromCollection", error.message)
    }

}


// export const getUserCartFromCollection = async (userAuth) => {

//   if (!userAuth) return;

//     try {
//       const userDocRef = doc(db, 'users', userAuth.uid);

//       const userSnapshot = await getDoc(userDocRef)
//       const collectedCartValue = userSnapshot._document.data.value.mapValue.fields.cart

//       console.log('this is the usersnapshot cart test', collectedCartValue)

//       return collectedCartValue
//     } catch (error) {
//       console.log("error with try/catch from getUserCartFromCollection", error.message)
//     }

// }

export const signOutUser = async () => await signOut(auth);

export const onAuthStateChangedListener = (callback) =>
  onAuthStateChanged(auth, callback);
