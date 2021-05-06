// export const createUserProfileDocument = async (userAuth, additionalData = {}) => {
// 	if (!userAuth) return;
// 	const userRef = firestore.doc(`users/${userAuth.uid}`);
// 	const user = await userRef.get();
// 	if (!user.exists) {
// 		console.log('here creating');
// 		const { displayName, email } = userAuth;
// 		try {
// 			await userRef.set({
// 				displayName,
// 				email,
// 				created_dt: new Date(),
// 				...additionalData,
// 			});
// 		} catch (error) {
// 			console.log('Error creating user', error.message);
// 		}
// 	}
// 	return userRef;
// };
