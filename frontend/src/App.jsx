import { AnimatePresence } from "framer-motion";
import { Route, Routes, useLocation, useMatch } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { MainLayout, PrivateLayout } from "./layouts";
import { selectUser } from "./store/selectors";
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
	const isLoginPage = !!useMatch("/login");
	const location = useLocation();
	const { isAuth } = useSelector(selectUser);

	useLayoutEffect(() => {
		const currentUserDataJSON = sessionStorage.getItem("userData");

		if (!currentUserDataJSON) {
			return;
		}

		const currentUserData = JSON.parse(currentUserDataJSON);

		dispatch(setUser(currentUserData));
	}, [dispatch]);

	return (
		<AnimatePresence mode="wait">
			<Routes location={location} key={location.pathname}>
				<Route element={<MainLayout isAuth={isAuth} />}>
					<Route path="/" element={<Main />} />
					<Route path="/login" element={<Authorization />} />
					<Route path="/register" element={<Registration />} />
				</Route>
				<Route
					element={
						<PrivateLayout
							isAuth={isAuth}
							isLoginPage={isLoginPage}
						/>
					}
				>
					<Route path="/timer" element={<Timer />} />
					<Route path="/projects" element={<Projects />} />
					<Route path="/project" element={<Project />} />
					<Route path="/project/:id" element={<Project />} />
					<Route path="/analytics" element={<Analytics />} />
					<Route path="/profile" element={<Profile />} />
				</Route>
				<Route path="*" element={<Page404 />} />
			</Routes>
		</AnimatePresence>
	);
};
