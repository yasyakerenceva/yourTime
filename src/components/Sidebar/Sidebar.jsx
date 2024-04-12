import { useDispatch } from "react-redux";
import { useLocation, useParams, useNavigate } from "react-router-dom";
import { logout } from "../../store/actions";
import { getActivePath, request } from "../../utils";
import { ExtendedLink } from "../ExtendedLink/ExtendedLink";
import { Logo } from "../Logo/Logo";

export const Sidebar = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const { pathname } = useLocation();
	const params = useParams();

	const handleLogout = () => {
		request("/logout", "POST");
		dispatch(logout());
		navigate("/login");
		sessionStorage.removeItem("userData");
		sessionStorage.removeItem("tagsData");
	};

	return (
		<header className="w-1/4 min-w-min flex flex-col bg-primary py-11 px-3">
			<div className="pl-7">
				<Logo toPath="/timer" />
			</div>
			<nav className="flex flex-col mt-20">
				<ExtendedLink to="/timer">Таймер</ExtendedLink>
				<ExtendedLink to={getActivePath(pathname, params.id)}>
					Проекты
				</ExtendedLink>
				<ExtendedLink to="/analytics">Аналитика</ExtendedLink>
				<ExtendedLink to="/profile">Профиль</ExtendedLink>
			</nav>
			<div className="pl-7 mt-auto">
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
