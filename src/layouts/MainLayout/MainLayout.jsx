import { Outlet, Navigate } from "react-router-dom";
import { Header } from "../../components";
import { PROP_TYPE } from "../../constants";

export const MainLayout = ({ isAuth }) => {
	if (isAuth) {
		return <Navigate to="/timer" />;
	}

	return (
		<div className="h-screen relative overflow-hidden">
			<Header />
			<Outlet />
		</div>
	);
};

MainLayout.propTypes = {
	isAuth: PROP_TYPE.BOOLEAN_REQUIRED,
};
