import admin from "firebase-admin";
import firebaseAdminCredentials from "@/config/firebaseAdminCredentials";
import firebaseCredentials from "@/config/firebaseCredentials";
import firebase from "firebase/app";
import { SignUpCredentials } from "@/typescript/User";

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

	async createUser({ email, password }: SignUpCredentials): Promise<void> {
		try {
			await this.auth.createUserWithEmailAndPassword(email, password);
		} catch (err) {
			console.log("EN EL REGISTER EL ERR");
			console.log(err);
		}
	}

	async createDocument(path: string, data: any) {
		try {
			const ref = this.firestore.doc(path);
			await ref.set(data, { merge: true });
		} catch (err) {
			console.log(err);
		}
		return true;
	}

	async updateDocument(path: string, data: any) {
		try {
			await this.firestore.doc(path).update(data);
		} catch (err) {
			console.log(err);
		}
	}

	async getDocument(route: string) {
		try {
			let result = null;
			const response = await this.firestore.doc(route).get();
			if (!response.exists) {
				result = false;
			} else {
				result = response.data();
			}
			return result;
		} catch (err) {
			console.error(err);
		}
	}
}

const instance = Firebase.instance;

export default instance;
