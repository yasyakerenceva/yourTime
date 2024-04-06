import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { setUser } from "../../store/actions";
import { request } from "../../utils";
import { Card, CustomLink, ErrorForm, Field } from "../../components";

const regFormScheme = yup.object().shape({
	firstname: yup.string(),
	jobtitle: yup.string(),
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
	passcheck: yup
		.string()
		.required("Заполните пароль")
		.oneOf([yup.ref("password"), null], "Пароли не совподают"),
});

export const Registration = () => {
	const {
		register,
		reset,
		handleSubmit,
		formState: { errors, isValid, submitCount },
	} = useForm({
		defaultValues: {
			firstname: "",
			jobtitle: "",
			login: "",
			password: "",
			passcheck: "",
		},
		resolver: yupResolver(regFormScheme),
	});

	const dispatch = useDispatch();
	const navigate = useNavigate();
	const [serverError, setServerError] = useState(null);

	const onSubmit = ({ firstname, jobtitle, login, password }) => {
		request("/register", "POST", {
			firstname,
			jobtitle,
			login,
			password,
		}).then(({ error, user }) => {
			if (error) {
				setServerError(error);
				return;
			}
			dispatch(setUser(user));
			sessionStorage.setItem("userData", JSON.stringify(user));
			navigate("/timer");
		});
	};

	return (
		<main className="flex justify-between h-full">
			<Card
				classes="w-2/5"
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
			<div className="w-3/5 flex flex-col justify-center">
				<h1 className="title text-center">Регистрация</h1>
				{serverError && (
					<div className=" self-center">
						<ErrorForm>{serverError}</ErrorForm>
					</div>
				)}
				<form
					className="w-3/5 mx-auto"
					onSubmit={handleSubmit(onSubmit)}
				>
					<div className="flex items-center justify-between mt-8">
						<Field
							classes="w-[calc(50%-10px)]"
							id="firstname"
							name="firstname"
							type="text"
							labelText="Имя"
							error={errors.firstname?.message}
							{...register("firstname")}
						/>
						<Field
							classes="w-[calc(50%-10px)]"
							id="jobtitle"
							name="jobtitle"
							type="text"
							labelText="Должность"
							error={errors.jobtitle?.message}
							{...register("jobtitle")}
						/>
					</div>
					<Field
						id="login"
						name="login"
						type="text"
						labelText="Логин"
						classes="mt-8"
						error={errors.login?.message}
						{...register("login")}
					/>
					<Field
						id="password"
						name="password"
						type="password"
						labelText="Пароль"
						classes="mt-8"
						{...register("password")}
						error={errors.password?.message}
					/>
					<Field
						id="passcheck"
						name="passcheck"
						type="password"
						labelText="Повтор пароля"
						classes="mt-8"
						error={errors.passcheck?.message}
						{...register("passcheck")}
					/>
					<div className="mt-8 pt-5px flex justify-center items-center">
						<button
							type="submit"
							className="btn btn-background-primary link-animation w-[300px] h-14 btn-disabled"
							disabled={submitCount !== 0 && !isValid}
						>
							Зарегистрироваться
						</button>
					</div>
				</form>
			</div>
		</main>
	);
};
