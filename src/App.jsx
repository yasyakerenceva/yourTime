import { Route, Routes } from "react-router-dom";
import { Main } from "./pages";

export const App = () => {
	return (
		<div className="h-screen">
			<Routes>
				<Route path="/" element={<Main />} />
				<Route path="/login" element={<h1>Login</h1>} />
				<Route path="/register" element={<h1>Regist</h1>} />
			</Routes>
		</div>
	);
};
