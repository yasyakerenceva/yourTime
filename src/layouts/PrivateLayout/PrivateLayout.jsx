import { Navigate, Outlet } from "react-router-dom";
import { Modal, Sidebar } from "../../components";
import { useSelector } from "react-redux";
import { selectIsAuth } from "../../store/selectors";

export const PrivateLayout = () => {
	// if (isAuth) {
	// 	return (
	// 		<div className="h-screen flex">
	// 			<Sidebar />
	// 			<main className="w-4/5 relative py-7 px-7 overflow-hidden z-10">
	// 				<Outlet />
	// 			</main>
	// 		</div>
	// 	);
	// } else {
	// 	return <Navigate to="/login" />;
	// }

	return (
		<div className="h-screen flex relative">
			<Sidebar />
			<main className="w-4/5 relative py-7 px-7 overflow-hidden z-10">
				<Outlet />
			</main>
			<Modal />
		</div>
	);
};
