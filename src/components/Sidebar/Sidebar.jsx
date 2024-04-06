import { useDispatch } from "react-redux";
import { useLocation, useParams } from "react-router-dom";
import { logout } from "../../store/actions";
import { getActivePath, request } from "../../utils";
import { ExtendedLink } from "../ExtendedLink/ExtendedLink";
import { Logo } from "../Logo/Logo";

export const Sidebar = () => {
	const dispatch = useDispatch();
	const { pathname } = useLocation();
	const params = useParams();

	const handleLogout = () => {
		request("/logout", "POST");
		dispatch(logout());
		sessionStorage.removeItem("userData");
	};

	return (
		<header className="w-1/5 flex flex-col justify-between bg-primary py-11">
			<div className="pl-14">
				<Logo toPath="/timer" />
				<nav className="flex flex-col mt-20">
					<ExtendedLink to="/timer">Таймер</ExtendedLink>
					<ExtendedLink to={getActivePath(pathname, params.id)}>
						Проекты
					</ExtendedLink>
					<ExtendedLink to="/analytics">Аналитика</ExtendedLink>
					<ExtendedLink to="/profile">Профиль</ExtendedLink>
				</nav>
			</div>
			<div className="pl-14">
				<button
					className="w-fit link-background-primary link-animation shadow-none"
					onClick={handleLogout}
				>
					Выйти
				</button>
			</div>
		</header>
	);
};
