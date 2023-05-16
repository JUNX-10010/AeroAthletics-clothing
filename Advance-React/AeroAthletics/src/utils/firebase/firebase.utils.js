// Import the necessary functions from the Firebase SDKs
import { initializeApp } from "firebase/app";
import { 
  getAuth, 
  signInWithRedirect, 
  signInWithPopup, 
  GoogleAuthProvider,
  createUserWithEmailAndPassword
} from "firebase/auth";
import { 
  getFirestore, 
  doc, 
  getDoc, 
  addDoc, 
  setDoc, 
  collection 
} from "firebase/firestore";

// Configure Firebase using the credentials
const firebaseConfig = {
  apiKey: "AIzaSyC9MMcvI8JMeJI60BfxysyOILl9zQnbOoA",
  authDomain: "aero-athletics.firebaseapp.com",
  projectId: "aero-athletics",
  storageBucket: "aero-athletics.appspot.com",
  messagingSenderId: "20465719848",
  appId: "1:20465719848:web:dbcca72aaf3e21a194331d",
  measurementId: "G-F982MSEG31"
};

// Initialize Firebase using the configuration above
const fireBaseApp = initializeApp(firebaseConfig);

// Configure the Google Auth Provider for sign-in
const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: 'select_account' });

// Export the authentication instance
export const auth = getAuth(fireBaseApp);

// Export functions for signing in with Google
export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, googleProvider);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(fireBaseApp);

// Create a new user document in Firestore using the user authentication data
export const createUserDocumentFromAuth = async (userAuth, additionalInformation) => {
  if (!userAuth) return;

  const userDocRef = doc(db, 'users', userAuth.uid);
  const userSnapshot = await getDoc(userDocRef);
  const { displayName, email } = userAuth;
  const createdAt = new Date(); 

  if (!userSnapshot.exists()) {
    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInformation
      });
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }
  
  return userDocRef;
};

// Create a new user document in Firestore using the user authentication data
export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  return createUserWithEmailAndPassword(auth, email, password);
  
};

export default signInWithGooglePopup;

// (Optional) Initialize Firebase Analytics and log an event
// const analytics = getAnalytics(app);
// logEvent(analytics, 'notification_received');