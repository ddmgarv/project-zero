import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import ContextProviders from "../providers";
import Login from "../containers/Login";
import Signup from "../containers/Signup";

const App: React.FC = () => (
	<ContextProviders>
		<BrowserRouter>
			<Route exact component={Login} path="/" />
			<Route exact component={Signup} path="/signup" />
		</BrowserRouter>
	</ContextProviders>
);

export default App;
