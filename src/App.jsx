import { Route, Routes } from "react-router-dom";
import { Authorization, Main, Registration } from "./pages";

export const App = () => {
	return (
		<div className="h-screen">
			<Routes>
				<Route path="/" element={<Main />} />
				<Route path="/login" element={<Authorization />} />
				<Route path="/register" element={<Registration />} />
			</Routes>
		</div>
	);
};
