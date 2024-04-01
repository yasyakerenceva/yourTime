import profileImage from "../../assets/images/profile.png";
import { Field } from "../../components";

export const Profile = () => {
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
						/>
						<Field
							classes="w-[calc(50%-10px)]"
							id="login"
							name="login"
							type="text"
							labelText="Логин"
						/>
					</div>
					<Field
						classes="mt-8"
						id="jobtitle"
						name="jobtitle"
						type="text"
						labelText="Должность"
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