import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyB2UYPlpr8IGo6bBmihhUFqgUmk02lLEj0",
    authDomain: "foodieadda-d2064.firebaseapp.com",
    databaseURL: "https://foodieadda-d2064-default-rtdb.firebaseio.com",
    projectId: "foodieadda-d2064",
    storageBucket: "foodieadda-d2064.appspot.com",
    messagingSenderId: "775468418529",
    appId: "1:775468418529:web:5d4a2ce3f3c5eb0cdcbea0"
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const firestore = getFirestore(app);
const storage = getStorage(app);
const database = getDatabase(app, databaseURL);

export { app, firestore, storage, database };