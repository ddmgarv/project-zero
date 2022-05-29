import { createContext } from "react";
import { User } from "@/@types/User";

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
