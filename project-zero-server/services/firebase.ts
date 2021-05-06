import admin from "firebase-admin";
import firebaseAdminCredentials from "@/config/firebaseAdminCredentials";
// import firebase from "firebase/app";
// import firebaseCredentials from "@/config/firebaseCredentials";

admin.initializeApp({
	credential: admin.credential.cert(firebaseAdminCredentials),
});

// Initialize Firebase
class Firebase {
	auth: admin.auth.Auth;
	firestore: admin.firestore.Firestore;

	static instance = new Firebase();

	constructor() {
		this.auth = admin.auth();
		this.firestore = admin.firestore();
	}
}

const instance = Firebase.instance;

export default instance;

// export async function registerUser(ws) {
// 	try {
// 		const res = await authApp.auth().createUserWithEmailAndPassword(email, pwd);
// 		return [res.user.uid, email];
// 	} catch (err) {
// 		console.log("EN EL REGISTER EL ERR");
// 		console.log(err);
// 	}
// }

// async function changePassword(email, path, id) {
// 	try {
// 		console.log(email, email.split("@")[1].split(".com")[0]);
// 		await authApp.auth().signInWithEmailAndPassword(email, email.split("@")[1].split(".com")[0]);
// 		let user = authApp.auth().currentUser;
// 		const pwd = getPwd();
// 		console.log(email, pwd);
// 		await user.updateEmail(`${email.split("@")[0]}@${pwd}.com`);
// 		await user.updatePassword(pwd);
// 		await authApp.auth().signOut();
// 		await updateDocument(`${path}/${id}`, { email: `${email.split("@")[0]}@${pwd}.com` });
// 		return pwd;
// 	} catch (err) {
// 		console.error(err);
// 	}
// }
// exports.changePassword = changePassword;

// async function deleteInFirestore(path) {
// 	try {
// 		let ref;
// 		if (path.split("/").length % 2 === 0) {
// 			ref = db.doc(path).delete();
// 		} else {
// 			let batch = db.batch();
// 			let listOfDocuments = await db.collection(path).listDocuments();
// 			for (let i = 0; i < listOfDocuments.length; i++) {
// 				const doc = listOfDocuments[i];
// 				batch.delete(doc);
// 				if (batch.length == 200) {
// 					await batch.commit();
// 					batch = db.batch();
// 				}
// 			}
// 			batch.commit();
// 		}
// 		return true;
// 	} catch (err) {
// 		console.error(err);
// 	}
// }
// exports.deleteInFirestore = deleteInFirestore;

// async function getDocument(route: string) {
// 	let result;
// 	try {
// 		await db
// 			.doc(route)
// 			.get()
// 			.then((res) => {
// 				if (!res.exists) {
// 					result = false;
// 				} else {
// 					result = { ...res.data(), id: res.id };
// 				}
// 			});
// 	} catch (err) {
// 		console.error(err);
// 	}
// 	return result;
// }

// exports.getDocument = getDocument;

// async function setInFirebase(path, data) {
// 	try {
// 		let ref;
// 		if (path.split("/").length % 2 === 0) {
// 			ref = db.doc(path);
// 		} else {
// 			ref = db.collection(path);
// 		}
// 		await ref.set(data, { merge: true });
// 	} catch (err) {
// 		console.error(err);
// 	}
// 	return true;
// }

// exports.setInFirebase = setInFirebase;

// async function createDocument(path, data, merge = true) {
// 	try {
// 		let ref;
// 		if (path.split("/").length % 2 === 0) {
// 			ref = db.doc(path);
// 			ref.set(data, { merge });
// 		} else {
// 			ref = db.collection(path);
// 			ref.add(data, { merge });
// 		}
// 	} catch (err) {
// 		console.log(err);
// 	}
// 	return true;
// }
// exports.createDocument = createDocument;

// async function runTransaction(path, data, fn) {
// 	let transactionReference = "";
// 	if (path.split("/").length % 2 === 0) {
// 		transactionReference = db.doc(path);
// 	} else {
// 		transactionReference = db.collection(path);
// 	}

// 	try {
// 		await db.runTransaction(async (t) => {
// 			const doc = await t.get(transactionReference);
// 			return (res = await fn(t, doc.data(), transactionReference, data));
// 		});
// 		console.log("Transaction success!");
// 	} catch (e) {
// 		console.log("Transaction failure:", e);
// 	}
// }

// exports.runTransaction = runTransaction;

// async function updateDocument(path, data) {
// 	try {
// 		await db.doc(path).update(data);
// 	} catch (err) {
// 		console.log(err);
// 	}
// }
// exports.updateDocument = updateDocument;
