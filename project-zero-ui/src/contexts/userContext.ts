import { createContext } from "react";

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

export const UserContext = createContext<User>({
	id: "",
	data: {
		age: 0,
		direction: "",
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
