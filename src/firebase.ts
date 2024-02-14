// import firebase from "firebase/compat/app";
// import "firebase/compat/auth";
// import "firebase/compat/firestore";
// import "firebase/compat/analytics";
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyD_YqE4YaqmAd57R09E_NoMA6oV6U-tfoM",
    authDomain: "chat-app-c7b14.firebaseapp.com",
    projectId: "chat-app-c7b14",
    storageBucket: "chat-app-c7b14.appspot.com",
    messagingSenderId: "970639769365",
    appId: "1:970639769365:web:059d09c674d3d40dd4731c",
    measurementId: "G-1JRFC977TB"
};
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth();
// export const provider = new GoogleAuthProvider();
// provider.setCustomParameters({ prompt: 'select_account' });
// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
//  firebase.initializeApp(firebaseConfig);
//  firebase.analytics();

//  const auth= firebase.auth();
//  const db= firebase.firestore();

// export {auth, db}

// export default firebase
