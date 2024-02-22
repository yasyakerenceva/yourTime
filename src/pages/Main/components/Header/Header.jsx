import { ButtonLink, Logo } from "../../../../components/";

export const Header = () => {
	return (
		<header className="flex items-center justify-between h-[100px] py-4 px-10 border-b border-solid border-zinc-500/25">
			<Logo />
			<div className="w-[360px] flex items-center justify-between">
				<ButtonLink pageLink="/login" isAnimation={true}>
					Вход
				</ButtonLink>
				<ButtonLink
					pageLink="/register"
					width="180"
					background="primary"
					isAnimation={true}
				>
					Регистрация
				</ButtonLink>
			</div>
		</header>
	);
};
