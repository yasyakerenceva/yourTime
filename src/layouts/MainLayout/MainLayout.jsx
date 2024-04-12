import { Outlet, Navigate } from "react-router-dom";
import { motion } from "framer-motion"
import { Header } from "../../components";
import { useSelector } from "react-redux";
import { selectUser } from "../../store/selectors";

export const MainLayout = () => {
	const {isAuth} = useSelector(selectUser);

	if (isAuth) {
		return <Navigate to="/timer" />;
	}

	return (
		<div
			className="h-screen relative overflow-hidden"
		>
			<Header />
			<Outlet />
		</div>
	);
};
