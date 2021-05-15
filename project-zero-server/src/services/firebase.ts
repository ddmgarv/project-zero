import admin from "firebase-admin";
import firebase from "firebase";
import { firebaseCredentials, firebaseAdminCredentials } from "../config";
import { SignUpCredentials, User, UserCredential } from "../@types/User";

// Initialize Firebase
class Firebase {
	private adminAuth: admin.auth.Auth;
	private firestore: admin.firestore.Firestore;
	private auth: firebase.auth.Auth;

	// Singleton.
	static instance = new Firebase();

	constructor() {
		admin.initializeApp({
			credential: admin.credential.cert(firebaseAdminCredentials),
		});
		firebase.initializeApp(firebaseCredentials);
		this.adminAuth = admin.auth();
		this.firestore = admin.firestore();
		this.auth = firebase.auth();
	}

	async createUser({ email, password }: SignUpCredentials): Promise<UserCredential> {
		try {
			const userCredentials = await this.auth.createUserWithEmailAndPassword(email, password);
			return userCredentials;
		} catch (err) {
			console.error(err);
			throw err;
		}
	}

	async createUserDocument(userCredential: UserCredential, data: User) {
		const uid = userCredential?.user?.uid;
		if (uid) {
			try {
				const ref = this.firestore.doc(`users/${uid}`);
				await ref.set(data);
				return true;
			} catch (err) {
				console.error(err);
				throw err;
			}
		} else {
			return false;
		}
	}

	async updateUserDocument(id: string, data: Partial<User>) {
		try {
			await this.firestore.doc(`users/${id}`).update(data);
		} catch (err) {
			console.error(err);
		}
	}

	async getDocument(route: string): Promise<FirebaseFirestore.DocumentData | undefined | false> {
		try {
			const response = await this.firestore.doc(route).get();
			if (!response.exists) {
				return false;
			} else {
				return response.data();
			}
		} catch (err) {
			console.error(err);
		}
	}
}

export default Firebase.instance;
