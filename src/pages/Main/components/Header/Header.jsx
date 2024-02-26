import { CustomLink, Logo } from "../../../../components/";

export const Header = () => {
	return (
		<header className="flex items-center justify-between h-[100px] py-4 px-10 border-b border-solid border-zinc-500/25">
			<Logo />
			<div className="w-[360px] flex items-center justify-between">
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
		</header>
	);
};
