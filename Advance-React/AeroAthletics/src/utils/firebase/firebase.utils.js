// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider 
} from "firebase/auth";

import { 
getFirestore,
doc,
getDoc,
addDoc,
setDoc,
collection
 } from "firebase/firestore";
// import { getAnalytics, logEvent } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyC9MMcvI8JMeJI60BfxysyOILl9zQnbOoA",
  authDomain: "aero-athletics.firebaseapp.com",
  projectId: "aero-athletics",
  storageBucket: "aero-athletics.appspot.com",
  messagingSenderId: "20465719848",
  appId: "1:20465719848:web:dbcca72aaf3e21a194331d",
  measurementId: "G-F982MSEG31"
};

// Initialize Firebase
const fireBaseApp = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
provider.setCustomParameters({
     prompt: 'select_account' 
    });

export const auth = getAuth(fireBaseApp);
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(fireBaseApp);

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, 'users', userAuth.uid);

  const userSnapshot = await getDoc(userDocRef);
  const {displayName, email } = userAuth;
  const createdAt = new Date(); 
  if (! userSnapshot.exists() ) {
    try {
      const createNewUser = await setDoc(userDocRef, {
        displayName,
        email,
        createdAt
      });
      console.log("Document written with ID: ", createNewUser.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
    
  }
  return userDocRef;
}













export default signInWithGooglePopup;


// const analytics = getAnalytics(app);
// logEvent(analytics, 'notification_received');