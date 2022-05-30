import { useEffect, useState } from "react";
import { UserContext } from "@/contexts";

export const UserProvider = ({ children }: { children: JSX.Element }) => {
	// const [userData, setUserData] = useState<User | undefined>(undefined);
	// const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		// get user request
	}, []);

	return (
		<UserContext.Provider
			value={{
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
			}}>
			{children}
		</UserContext.Provider>
	);
};
