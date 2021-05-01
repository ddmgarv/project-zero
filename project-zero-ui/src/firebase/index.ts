import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/analytics";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyCUeDtmtHs5LQglG4fzvObRY0iX8vvqARc",
	authDomain: "project-zero-b5803.firebaseapp.com",
	projectId: "project-zero-b5803",
	storageBucket: "project-zero-b5803.appspot.com",
	messagingSenderId: "78383945335",
	appId: "1:78383945335:web:4efaf96124acc9ab555872",
	measurementId: "G-Y9SMVFXXQ1",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export * from "./utils";

export default firebase;
