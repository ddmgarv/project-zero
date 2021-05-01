import React, { useEffect, ReactElement, useState } from "react";
import { User, UserContext } from "@/contexts";

const UseProvider: React.FC = ({ children }) => {
	// const [userData, setUserData] = useState<User | undefined>(undefined);
	// const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		// get user request
	}, []);

	return (
		<UserContext.Provider
			value={{
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
			}}>
			{children}
		</UserContext.Provider>
	);
};

export default UseProvider;
