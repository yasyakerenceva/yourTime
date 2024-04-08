import { Outlet } from "react-router-dom";
import { useLayoutEffect } from "react";
import { useDispatch } from "react-redux";
import { setUser } from "../../store/actions";
import { Modal, Sidebar } from "../../components";

export const PrivateLayout = () => {
	const dispatch = useDispatch();

	useLayoutEffect(() => {
		const currentUserDataJSON = sessionStorage.getItem("userData");

		if (!currentUserDataJSON) {
			return;
		}

		const currentUserData = JSON.parse(currentUserDataJSON);

		dispatch(
			setUser({
				...currentUserData
			}),
		);
	}, [dispatch]);

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
