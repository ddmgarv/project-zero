import firebase from "firebase/app";
import Firebase from "./";

export const signInWithGoogle = async (): Promise<{
	token: firebase.auth.AuthCredential | null;
	user: firebase.User | null;
}> => {
	const result = await Firebase.auth.signInWithPopup(Firebase.provider);

	// This gives you a Google Access Token.
	const token = result.credential; //.accessToken;
	// The signed-in user info.
	const { user } = result;

	return {
		token,
		user,
	};
};

export const createUserProfileDocument = async (userAuth: any, additionalData = {}) => {
	if (!userAuth) return;
	// const userRef = Firebase.firestore.doc(`users/${userAuth.uid}`);
	// const user = await userRef.get();
	// if (!user.exists) {
	// 	console.log("here creating");
	// 	const { displayName, email } = userAuth;
	// 	try {
	// 		await userRef.set({
	// 			displayName,
	// 			email,
	// 			created_dt: new Date(),
	// 			...additionalData,
	// 		});
	// 	} catch (error) {
	// 		console.log("Error creating user", error.message);
	// 	}
	// }
	// return userRef;
};
