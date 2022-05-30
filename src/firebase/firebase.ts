import { initializeApp } from "firebase/app";
import { Firestore, getFirestore, doc, setDoc, Timestamp } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
import {
	Auth,
	createUserWithEmailAndPassword,
	getAuth,
	GoogleAuthProvider,
	signInWithPopup,
	User,
	signInWithEmailAndPassword,
} from "firebase/auth";
import { SignUpData } from "@/@types";

// Initialize Firebase
class Firebase {
	private firebaseConfig = {
		apiKey: process.env.REACT_APP_API_KEY,
		authDomain: process.env.REACT_APP_AUTH_DOMAIN,
		projectId: process.env.REACT_APP_PROJECT_ID,
		storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
		messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
		appId: process.env.REACT_APP_APP_ID,
		measurementId: process.env.REACT_APP_MEASUREMENT_ID,
	};
	googleAuthProvider: GoogleAuthProvider;
	auth: Auth;
	firestore: Firestore;

	static instance = new Firebase();

	constructor() {
		console.log({
			apiKey: process.env.REACT_APP_API_KEY,
			authDomain: process.env.REACT_APP_AUTH_DOMAIN,
			projectId: process.env.REACT_APP_PROJECT_ID,
			storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
			messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
			appId: process.env.REACT_APP_APP_ID,
			measurementId: process.env.REACT_APP_MEASUREMENT_ID,
		});

		initializeApp(this.firebaseConfig);
		getAnalytics();
		this.auth = getAuth();
		this.firestore = getFirestore();
		this.googleAuthProvider = new GoogleAuthProvider();
		this.googleAuthProvider.addScope("profile");
		this.googleAuthProvider.addScope("email");
	}

	async signInWithGoogle(): Promise<{
		token: string | undefined;
		user: User | null;
	}> {
		const result = await signInWithPopup(this.auth, this.googleAuthProvider);
		const credential = GoogleAuthProvider.credentialFromResult(result);
		return {
			token: credential?.accessToken,
			user: result.user,
		};
	}

	async signIn(
		email: string,
		password: string
	): Promise<{
		user: User | null;
	}> {
		try {
			const result = await signInWithEmailAndPassword(this.auth, email, password);
			return {
				user: result.user,
			};
		} catch (error) {
			console.error(error);
			throw error;
		}
	}

	async createUserProfile(userData: Omit<SignUpData, "confirmPassword">) {
		try {
			const { user } = await createUserWithEmailAndPassword(this.auth, userData.email, userData.password);
			await setDoc(doc(this.firestore, "users"), {
				...userData,
				createdDate: Timestamp.fromDate(new Date()),
			});
			return user;
		} catch (error) {
			console.error(error);
			throw error;
		}
	}
}

const instance = Firebase.instance;

export default instance;
