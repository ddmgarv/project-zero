import firebase from "firebase";

export interface User {
	id: string;
	email: string;
	data: {
		age: number;
		address: string;
		country: string;
		firstName: string;
		lastName: string;
		fullName: string;
	};
	status: {
		disabled: boolean;
		active: boolean;
		lastConnection: Date;
	};
}

export interface CreateUserFields extends User {
	password: string;
	confirmPassword: string;
}

export interface SignUpCredentials {
	email: string;
	password: string;
}

export type UserCredential = firebase.auth.UserCredential | undefined | null;
