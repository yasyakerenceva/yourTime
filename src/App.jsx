import { Route, Routes } from "react-router-dom";
import { Authorization, Main, Registration } from "./pages";
import { Header } from "./components";

export const App = () => {
	return (
		<div className="h-screen relative">
			<Header />
			<Routes>
				<Route path="/" element={<Main />} />
				<Route path="/login" element={<Authorization />} />
				<Route path="/register" element={<Registration />} />
			</Routes>
		</div>
	);
};
