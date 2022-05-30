import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login } from "../containers/Login";
import { Signup } from "../containers/Signup";
import { ProtectedRoute } from "./ProtectedRoute";

const RoutesContainer = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route element={<Login />} path="/" />
				<Route element={<Signup />} path="/signup" />
				{/* <ProtectedRoute element={<div>home</div>} path="/somepath" /> */}
			</Routes>
		</BrowserRouter>
	);
};

export default RoutesContainer;
