import { useLocation } from "react-router-dom";
import { CustomLink } from "../CustomLink/CustomLink";
import { Logo } from "../Logo/Logo";

export const Header = () => {
	const { pathname } = useLocation();

	return (
		<header
			className={`fixed top-0 w-full flex items-center justify-between py-4 px-10 ${pathname === "/" ? "border-b border-solid border-zinc-500/25" : ""}`}
		>
			<Logo pathname={pathname} />
			{pathname === "/" && (
				<div className="w-[360px] flex items-center justify-between pt-5px">
					<CustomLink
						toPageLink="/login"
						modifier="link-border-primary"
						widthClass="w-[150px]"
					>
						Вход
					</CustomLink>
					<CustomLink
						toPageLink="/register"
						modifier="link-background-primary"
						widthClass="w-[180px]"
					>
						Регистрация
					</CustomLink>
				</div>
			)}
		</header>
	);
};
