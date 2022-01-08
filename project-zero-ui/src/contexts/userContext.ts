import { createContext } from "react";

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

export const UserContext = createContext<User>({
	id: "",
	email: "",
	data: {
		age: 0,
		address: "",
		country: "",
		firstName: "",
		lastName: "",
		fullName: "",
	},
	status: {
		disabled: false,
		active: false,
		lastConnection: new Date(),
	},
});
