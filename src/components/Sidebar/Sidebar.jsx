import { Logo } from "../Logo/Logo";
import { ExtendedLink } from "../ExtendedLink/ExtendedLink";
import { CustomLink } from "../CustomLink/CustomLink";

export const Sidebar = () => {
	return (
		<header className="w-1/5 flex flex-col justify-between bg-primary py-11">
			<div className="pl-14">
				<Logo toPath="/timer" />
				<nav className="flex flex-col mt-20">
					<ExtendedLink to="/timer">Таймер</ExtendedLink>
					<ExtendedLink to="/projects">Проекты</ExtendedLink>
					<ExtendedLink to="/analytics">Аналитика</ExtendedLink>
					<ExtendedLink to="/profile">Профиль</ExtendedLink>
				</nav>
			</div>
			<div className="pl-14">
				<CustomLink toPageLink="/login">Выйти</CustomLink>
			</div>
		</header>
	);
};
