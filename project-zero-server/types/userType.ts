export interface User {
	id: string;
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
