import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/analytics";

// Initialize Firebase
class Firebase {
	private firebaseConfig = {
		apiKey: process.env.APIKEY,
		authDomain: process.env.AUTHDOMAIN,
		projectId: process.env.PROJECTID,
		storageBucket: process.env.STORAGEBUCKET,
		messagingSenderId: process.env.MESSAGINGSENDERID,
		appId: process.env.APPID,
		measurementId: process.env.MEASUREMENTID,
	};
	provider: firebase.auth.GoogleAuthProvider;
	auth: firebase.auth.Auth;
	firestore: firebase.firestore.Firestore;

	static instance = new Firebase();

	constructor() {
		firebase.initializeApp(this.firebaseConfig);
		firebase.analytics();
		this.auth = firebase.auth();
		this.firestore = firebase.firestore();
		this.provider = new firebase.auth.GoogleAuthProvider();
		this.provider.addScope("profile");
		this.provider.addScope("email");
	}
}

const instance = Firebase.instance;

export * from "./utils";

export default instance;
