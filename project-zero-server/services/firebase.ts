import admin from "firebase-admin";
import firebase from "firebase/app";
import firebaseAdminCredentials from "@/config/firebaseAdminCredentials";
import firebaseCredentials from "@/config/firebaseCredentials";
import { SignUpCredentials, User } from "@/typescript/User";

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

	async createUser({ email, password }: SignUpCredentials): Promise<firebase.auth.UserCredential | undefined | null> {
		try {
			const userCredentials = await this.auth.createUserWithEmailAndPassword(email, password);
			return userCredentials;
		} catch (err) {
			console.error(err);
			throw err;
		}
	}

	async createUserDocument(userCredential: firebase.auth.UserCredential | null | undefined, data: User) {
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

const instance = Firebase.instance;

export default instance;
