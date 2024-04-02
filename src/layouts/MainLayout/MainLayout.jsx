import { Outlet } from "react-router-dom";
import { Header } from "../../components";
import { useSelector } from "react-redux";
import { selectIsAuth } from "../../store/selectors";

export const MainLayout = () => {
	const isAuth = useSelector(selectIsAuth);

	console.log(isAuth);
	return (
		<div className="h-screen relative">
			<Header />
			<Outlet />
		</div>
	);
};
