import { initializeApp } from 'firebase/app';
import { getAuth,initializeAuth,browserSessionPersistence,browserPopupRedirectResolver } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyA4pihdPVfDMfrzu_snltETwNOD_DFSBUk",
    authDomain: "ars-digital-marketing.firebaseapp.com",
    projectId: "ars-digital-marketing",
    storageBucket: "ars-digital-marketing.appspot.com",
    messagingSenderId: "331583679575",
    appId: "1:331583679575:web:cf5143286b2ae9541e8712",
    measurementId: "G-F19WHX9E88"
  };
  const app = initializeApp(firebaseConfig);
  const auth = initializeAuth(app, {
    persistence: browserSessionPersistence,
    popupRedirectResolver: browserPopupRedirectResolver,
 });
  const db = getFirestore();
  
  export { auth, db, app };
// return app;