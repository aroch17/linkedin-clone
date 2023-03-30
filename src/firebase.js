import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyAAHj56Cm8TkGV3wp65YmrVHfP_WH83j0g",
    authDomain: "linkedin-clone-c46ff.firebaseapp.com",
    projectId: "linkedin-clone-c46ff",
    storageBucket: "linkedin-clone-c46ff.appspot.com",
    messagingSenderId: "617006014661",
    appId: "1:617006014661:web:8a8569fdb0f6e0f2c4d0ac"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };