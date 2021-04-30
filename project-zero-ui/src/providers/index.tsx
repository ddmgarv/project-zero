import React, { ComponentProps, FC } from "react";
import UserProvider from "./UserProvider";

const combineProviders = (components: FC[]): FC => {
	return components.reduce(
		(AccumulatedComponents: FC, CurrentComponent: FC) => {
			return ({ children }: ComponentProps<FC>): JSX.Element => {
				return (
					<AccumulatedComponents>
						<CurrentComponent>{children}</CurrentComponent>
					</AccumulatedComponents>
				);
			};
		},
		({ children }) => <>{children}</>
	);
};

export default combineProviders([UserProvider]);
