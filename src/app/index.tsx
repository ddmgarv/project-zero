import { RoutesContainer } from "@/routes";
import UseProvider from "@/providers/UserProvider";

const App = () => (
	<UseProvider>
		<RoutesContainer />
	</UseProvider>
);

export default App;
