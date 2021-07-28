// const firebaseConfig = {
// 	apiKey: "AIzaSyDEUz0oOLc9qdVfHUxgAsiMuHfPgNhotmU",
// 	authDomain: "task-manager-80b40.firebaseapp.com",
// 	projectId: "task-manager-80b40",
// 	storageBucket: "task-manager-80b40.appspot.com",
// 	messagingSenderId: "1064833044509",
// 	appId: "1:1064833044509:web:1ebc00b88d766ae43236f4",
// };

import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
	apiKey: "AIzaSyDEUz0oOLc9qdVfHUxgAsiMuHfPgNhotmU",
	authDomain: "task-manager-80b40.firebaseapp.com",
	projectId: "task-manager-80b40",
	storageBucket: "task-manager-80b40.appspot.com",
	messagingSenderId: "1064833044509",
	appId: "1:1064833044509:web:1ebc00b88d766ae43236f4",
});

const db = firebaseApp.firestore();

export default db;
