import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button, Card, CustomLink, Field } from "../../components";

const authFormScheme = yup.object().shape({
	login: yup
		.string()
		.required("Заполните логин")
		.matches(/^\w+$/, "Неверный логин. Допускаются только буквы и цифры")
		.min(3, "Неверный логин. Минимум 3 символа")
		.max(15, "Неверный логин. Максимум 15 символов"),
	password: yup
		.string()
		.required("Заполните пароль")
		.matches(
			/^[\w#%]+$/,
			"Неверный пароль. Допускаютя буквы, цифры, и знаки # %",
		)
		.min(6, "Неверный пароль. Минимум 6 символов")
		.max(30, "Неверный пароль. Максимум 30 символов"),
});

export const Authorization = () => {
	const {
		register,
		reset,
		handleSubmit,
		formState: { errors, isValid, submitCount },
	} = useForm({
		defaultValues: {
			login: "",
			password: "",
		},
		resolver: yupResolver(authFormScheme),
	});

	const onSubmit = (formDate) => {
		console.log("onSubmit:", formDate);
		reset();
	};

	return (
		<main className="flex justify-between h-full">
			<div className="w-3/5 flex flex-col justify-center">
				<h1 className="title text-center">Авторизация</h1>
				<form
					className="w-3/5 mx-auto"
					onSubmit={handleSubmit(onSubmit)}
				>
					<Field
						id="login"
						name="login"
						type="text"
						labelText="Логин"
						error={errors.login?.message}
						{...register("login")}
					/>
					<Field
						id="password"
						name="password"
						type="password"
						labelText="Пароль"
						error={errors.password?.message}
						{...register("password")}
					/>
					<div className="mt-8 pt-5px flex justify-center items-center">
						<Button
							type="submit"
							disabled={submitCount !== 0 && !isValid}
							widthClass="w-[180px]"
						>
							Войти
						</Button>
					</div>
				</form>
			</div>
			<Card
				classes="w-2/5"
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
