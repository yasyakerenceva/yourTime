import { Button, Card, CustomLink, Field } from "../../components";

export const Authorization = () => {
	return (
		<main className="flex justify-between h-full">
			<div className="w-3/5 flex flex-col justify-center px-60">
				<h1 className="title">Авторизация</h1>
				<form>
					<Field
						id="login"
						name="login"
						type="text"
						labelText="Логин"
					/>
					<Field
						id="password"
						name="password"
						type="password"
						labelText="Пароль"
					/>
					<div className="mt-9 pt-5px">
						<Button type="submit" widthClass="w-[180px]">
							Войти
						</Button>
					</div>
				</form>
			</div>
			<Card
				classes="w-2/5 px-36"
				title="Добро пожаловать!"
				description="Хотите начать пользоваться тайм-трекером? Зарегистрируйтесь!"
				component={
					<CustomLink
						toPageLink="/register"
						widthClass="w-[300px]"
						modifier="link-border-white"
					>
						Регистрация
					</CustomLink>
				}
			/>
		</main>
	);
};
