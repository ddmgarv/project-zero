import firebase, { firestore } from "./";

// Using a popup.
const provider = new firebase.auth.GoogleAuthProvider();
provider.addScope("profile");
provider.addScope("email");

export const signInWithGoogle = () =>
	firebase
		.auth()
		.signInWithPopup(provider)
		.then(function (result) {
			// This gives you a Google Access Token.
			const token = result.credential; //.accessToken;
			// The signed-in user info.
			const { user } = result;
			return {
				token,
				user,
			};
		});

export const createUserProfileDocument = async (userAuth: any, additionalData = {}) => {
	if (!userAuth) return;
	const userRef = firestore.doc(`users/${userAuth.uid}`);
	const user = await userRef.get();
	if (!user.exists) {
		console.log("here creating");
		const { displayName, email } = userAuth;
		try {
			await userRef.set({
				displayName,
				email,
				created_dt: new Date(),
				...additionalData,
			});
		} catch (error) {
			console.log("Error creating user", error.message);
		}
	}
	return userRef;
};
