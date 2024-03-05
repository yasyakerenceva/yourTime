import { Route, Routes } from "react-router-dom";
import { MainLayout, PrivateLayout } from "./layouts";
import { Authorization, Main, Registration, Timer } from "./pages";

export const App = () => {
	return (
		<Routes>
			<Route element={<MainLayout />}>
				<Route path="/" element={<Main />} />
				<Route path="/login" element={<Authorization />} />
				<Route path="/register" element={<Registration />} />
			</Route>
			<Route element={<PrivateLayout />}>
				<Route path="/timer" element={<Timer />} />
				<Route path="/projects" element={<span>projects</span>} />
				<Route path="/analytics" element={<span>analytics</span>} />
				<Route path="/profile" element={<span>profile</span>} />
			</Route>
		</Routes>
	);
};
