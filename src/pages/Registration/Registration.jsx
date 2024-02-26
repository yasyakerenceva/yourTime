import { Button, Card, CustomLink, Field } from "../../components";

export const Registration = () => {
	return (
		<div className="flex justify-between h-full">
			<Card
				classes="w-2/5 px-36"
				title="Здравствуйте!"
				description="Вы уже зарегистрированы? Тогда просто войдите в свой аккаунт, используя свои учетные данные."
				component={
					<CustomLink
						toPageLink="/login"
						widthClass="w-[300px]"
						modifier="link-border-white"
					>
						Авторизация
					</CustomLink>
				}
			/>
			<div className="w-3/5 flex flex-col justify-center px-60">
				<h1 className="title">Регистрация</h1>
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
						<Button type="submit" widthClass="w-[300px]">
							Зарегистрироваться
						</Button>
					</div>
				</form>
			</div>
		</div>
	);
};
