import { useState } from "react";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { request } from "../../utils";
import { setUser } from "../../store/actions";
import { Card, CustomLink, ErrorForm, Field } from "../../components";

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
		handleSubmit,
		formState: { errors, isValid, submitCount },
	} = useForm({
		defaultValues: {
			login: "",
			password: "",
		},
		resolver: yupResolver(authFormScheme),
	});

	const dispatch = useDispatch();
	const navigate = useNavigate();
	const [serverError, setServerError] = useState(null);

	const onSubmit = ({ login, password }) => {
		request("/login", "POST", { login, password }).then(
			({ error, user }) => {
				if (error) {
					setServerError(error);
					return;
				}
				dispatch(setUser(user));
				sessionStorage.setItem("userData", JSON.stringify(user));
				navigate("/timer");
			},
		);
	};

	return (
		<main className="flex justify-between h-full">
			<div className="w-3/5 flex flex-col justify-center">
				<h1 className="title text-center">Авторизация</h1>
				{serverError && (
					<div className=" self-center">
						<ErrorForm>{serverError}</ErrorForm>
					</div>
				)}
				<form
					className="w-3/5 mx-auto"
					onSubmit={handleSubmit(onSubmit)}
				>
					<Field
						id="login"
						name="login"
						type="text"
						classes="mt-8"
						labelText="Логин"
						error={errors.login?.message}
						{...register("login")}
					/>
					<Field
						id="password"
						name="password"
						type="password"
						labelText="Пароль"
						classes="mt-8"
						error={errors.password?.message}
						{...register("password")}
					/>
					<div className="mt-8 pt-5px flex justify-center items-center">
						<button
							className="btn btn-background-primary link-animation w-[180px] h-14 btn-disabled"
							type="submit"
							disabled={submitCount !== 0 && !isValid}
						>
							Войти
						</button>
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
