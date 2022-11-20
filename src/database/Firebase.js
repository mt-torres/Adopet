import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore, Timestamp } from "firebase/firestore";
import { getStorage } from "firebase/storage";

    const firebaseConfig = {

    apiKey: process.env.REACT_APP_FIREBASE_KEY,
  
    authDomain: process.env.REACT_APP_FIREBASE_DOMAIN,
  
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  
    storageBucket: process.env.REACT_APP_FIREBASE_STOREGE_BUCKET,
  
    messagingSenderId: process.env.REACT_APP_FIREBASE_SENDER_ID,
  
    appId: process.env.REACT_APP_FIREBASE_APP_ID,
  
    measurementId: process.env.REACT_APP_FIREBASE_MEASURE_ID,

  
}; 


  const app = initializeApp(firebaseConfig)
  
  // init services
  export const auth = getAuth(app);
  export const db = getFirestore(app);
  export const storage = getStorage(app)

// timestamp

  export const timestamp = Timestamp




  