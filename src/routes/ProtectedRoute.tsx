import React from "react";
import { Route } from "react-router-dom";

export const ProtectedRoute: React.FC = (props) => {
	return <Route {...props} />;
};
