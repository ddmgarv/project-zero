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

export interface CreateUser extends User {
	password: string;
	confirmPassword: string;
}

export interface SignUpCredentials {
	email: string;
	password: string;
}
