import { Outlet } from "react-router-dom";
import { Sidebar } from "../../components";

export const PrivateLayout = () => {
	return (
		<div className="h-screen flex">
			<Sidebar />
			<main className="w-4/5 py-7 px-7 overflow-hidden">
				<Outlet />
			</main>
		</div>
	);
};
