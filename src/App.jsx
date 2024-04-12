import { motion, AnimatePresence } from "framer-motion"
import { Route, Routes, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { MainLayout, PrivateLayout } from "./layouts";
import {
	Authorization,
	Main,
	Registration,
	Timer,
	Projects,
	Project,
	Analytics,
	Profile,
	Page404,
} from "./pages";
import { useLayoutEffect } from "react";
import { setUser } from "./store/actions";

export const App = () => {
	const dispatch = useDispatch();
	const location = useLocation()

	useLayoutEffect(() => {
		const currentUserDataJSON = sessionStorage.getItem("userData");

		if (!currentUserDataJSON) {
			return;
		}

		const currentUserData = JSON.parse(currentUserDataJSON);

		dispatch(
			setUser(currentUserData),
		);
	}, [dispatch]);

	return (
		<AnimatePresence mode="wait">
			<Routes location={location} key={location.pathname}>
				<Route element={<MainLayout />}>
					<Route path="/" element={<Main />} />
					<Route path="/login" element={<Authorization />} />
					<Route path="/register" element={<Registration />} />
				</Route>
				<Route element={<PrivateLayout />}>
					<Route path="/timer" element={<Timer />} />
					<Route path="/projects" element={<Projects />} />
					<Route path="/project" element={<Project />} />
					<Route path="/project/:id" element={<Project />} />
					<Route path="/analytics" element={<Analytics />} />
					<Route path="/profile" element={<Profile />} />
				</Route>
				<Route
					path="*"
					element={<Page404 />}
				/>
			</Routes>
		</AnimatePresence>
	);
};
