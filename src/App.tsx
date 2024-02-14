/* eslint-disable react-hooks/exhaustive-deps */
import './App.css'
import { signInWithPopup, FacebookAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import { auth } from './firebase';
import { CollectionReference, DocumentData, collection, doc, setDoc } from "firebase/firestore";
import 'firebase/compat/database'; 
import firebase from 'firebase/compat/app'; 
import { db } from './firebase';
import { useEffect, useState } from 'react'
const provider = new FacebookAuthProvider();
const providerGoogle = new GoogleAuthProvider()
function App() {

  const handleLoginFacebook = async () => {
    try {
      provider.setCustomParameters({ prompt: 'select_account' });
      const result = await signInWithPopup(auth, provider)
      console.log(result)
    } catch (error) {
      console.log(error)
    }
  }

  const handleLoginGoogle = async () => {
    try {
      providerGoogle.setCustomParameters({ prompt: 'select_account' });
      const { user } = await signInWithPopup(auth, providerGoogle)

      const { email, displayName, photoURL, uid } = user
      const userDocRef = doc(db, 'users', uid); // Thay 'users' bằng tên của bộ sưu tập bạn muốn sử dụng
      const userData = { displayName, email, photoURL, uid };

      // Lưu dữ liệu vào tài liệu
      await setDoc(userDocRef, userData);

      // console.log(res)
    } catch (error) {
      console.log(error)
    }
  }

  const [notesList, setNotesList] = useState([]);
  const [data, setData] = useState(null);

  useEffect(() => {
    // Reference to the Firebase Realtime Database
    const database = firebase.database();

    // Reference to the specific location in the database
    const dataRef = database.ref('path_to_your_data');

    // Fetch data in real-time
    const fetchData = () => {
      dataRef.on('value', (snapshot) => {
        setData(snapshot.val());
      });
    };

    fetchData();

    // Cleanup function to remove the listener when component unmounts
    return () => {
      dataRef.off('value');
    };
  }, []); // empty dependency array ensures useEffect runs only once

  return (
    <>
      <button onClick={handleLoginGoogle}>google</button>
      <button onClick={handleLoginFacebook}>facebook</button>
    </>
  )
}

export default App


