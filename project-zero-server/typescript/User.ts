export interface User {
	id: string;
  email: string;
	data: {
		age: number;
		direction: string;
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

export interface UserCredentials {
  uid: string;
  email: string;
  password: string;
}

export type SignUpCredentials = Pick<UserCredentials, "email" | "password">