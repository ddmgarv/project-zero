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
