// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: 'chat-57369.firebaseapp.com',
  projectId: 'chat-57369',
  storageBucket: 'chat-57369.appspot.com',
  messagingSenderId: '135234871113',
  appId: '1:135234871113:web:e2e1732d9c63e15c720498'
}

// Initialize Firebase
export const app = initializeApp(firebaseConfig)
export const auth = getAuth()
export const storage = getStorage()
export const db = getFirestore()
