import { useLayoutEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectUser } from "../../store/selectors";
import { setUser } from "../../store/actions";
import { request } from "../../utils";
import { Field } from "../../components";
import profileImage from "../../assets/images/profile.png";

export const Profile = () => {
	const {
		firstname: userFirstname,
		jobtitle: userJobtitle,
		login: userLogin,
	} = useSelector(selectUser);
	const dispatch = useDispatch();
	const [firstname, setFirstname] = useState(userFirstname);
	const [login, setLogin] = useState(userLogin);
	const [jobtitle, setJobtitle] = useState(userJobtitle);
	const [isSavingUser, setIsSavingUser] = useState(false);

	useLayoutEffect(() => {
		setFirstname(userFirstname);
		setJobtitle(userJobtitle);
		setLogin(userLogin);
	}, [userLogin, userJobtitle, userFirstname]);

	const checkValidation =
		!login ||
		isSavingUser ||
		(firstname === userFirstname &&
			login === userLogin &&
			jobtitle === userJobtitle);

	const handleSubmit = (e) => {
		e.preventDefault();
		setIsSavingUser(true);
		request(`/profile`, "PATCH", {
			firstname,
			login,
			jobtitle,
		})
			.then((userData) => {
				dispatch(setUser(userData.data));
				sessionStorage.setItem(
					"userData",
					JSON.stringify(userData.data),
				);
			})
			.finally(() => setIsSavingUser(false));
	};

	return (
		<div className="h-full flex flex-col justify-center">
			<div className="w-full h-auto flex items-start justify-between px-8 py-10 bg-white rounded-2xl shadow-lg">
				<div className="w-1/3">
					<img src={profileImage} alt="profile" />
				</div>
				<form className="w-2/3 self-center" onSubmit={handleSubmit}>
					<div className="flex items-center justify-between">
						<Field
							classes="w-[calc(50%-10px)]"
							id="firstname"
							name="firstname"
							type="text"
							labelText="Имя"
							value={firstname}
							onChange={({ target }) =>
								setFirstname(target.value)
							}
						/>
						<Field
							classes="w-[calc(50%-10px)]"
							id="login"
							name="login"
							type="text"
							labelText="Логин"
							value={login}
							onChange={({ target }) => setLogin(target.value)}
						/>
					</div>
					<Field
						classes="mt-8"
						id="jobtitle"
						name="jobtitle"
						type="text"
						labelText="Должность"
						value={jobtitle}
						onChange={({ target }) => setJobtitle(target.value)}
					/>
					<div className="mt-8 pt-5px flex justify-end items-center">
						<button
							type="submit"
							disabled={checkValidation}
							className="btn btn-background-primary link-animation w-[200px] h-14 disabled:opacity-60 disabled:translate-y-[5px] disabled:active:scale-100"
						>
							Сохранить
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};
