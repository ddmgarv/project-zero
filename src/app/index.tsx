import RoutesContainer from "@/routes";
import { UserProvider } from "@/providers/UserProvider";

const App = () => (
	<UserProvider>
		<RoutesContainer />
	</UserProvider>
);

export default App;
