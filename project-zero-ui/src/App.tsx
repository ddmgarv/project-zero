import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import ContextProviders from "./providers";
import Login from "./containers/Login";

const App: React.FC = () => (
	<ContextProviders>
		<BrowserRouter>
			<Route exact component={Login} path="/signin" />
		</BrowserRouter>
	</ContextProviders>
);

export default App;
