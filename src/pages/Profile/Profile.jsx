import { useSelector } from "react-redux";
import profileImage from "../../assets/images/profile.png";
import { Field } from "../../components";
import { selectUser } from "../../store/selectors";
import { useState } from "react";

export const Profile = () => {
	const user = useSelector(selectUser);
	const [firstname, setFirstname] = useState(user.firstname);
	const [login, setLogin] = useState(user.login);
	const [jobtitle, setJobtitle] = useState(user.jobtitle);

	return (
		<div className="h-full flex flex-col justify-center">
			<div className="w-full h-auto flex items-start justify-between px-8 py-10 bg-white rounded-2xl shadow-lg">
				<div className="w-1/3">
					<img src={profileImage} alt="profile" />
				</div>
				<form className="w-2/3 self-center">
					<div className="flex items-center justify-between">
						<Field
							classes="w-[calc(50%-10px)]"
							id="firstname"
							name="firstname"
							type="text"
							labelText="Имя"
							// value={firstname}
							// onChange={({target}) => setFirstname(target.value)}
						/>
						<Field
							classes="w-[calc(50%-10px)]"
							id="login"
							name="login"
							type="text"
							labelText="Логин"
							// value={login}
							// onChange={({target}) => setLogin(target.value)}
						/>
					</div>
					<Field
						classes="mt-8"
						id="jobtitle"
						name="jobtitle"
						type="text"
						labelText="Должность"
						// value={jobtitle}
						// onChange={({target}) => setJobtitle(target.value)}
					/>
					<div className="mt-8 pt-5px flex justify-end items-center">
						<button
							type="submit"
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
