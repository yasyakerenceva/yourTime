import { Outlet } from "react-router-dom";
import { Header } from "../../components";
import { useSelector } from "react-redux";
import { selectUser } from "../../store/selectors";

export const MainLayout = () => {
	const user = useSelector(selectUser);

	console.log(user);
	return (
		<div className="h-screen relative">
			<Header />
			<Outlet />
		</div>
	);
};
