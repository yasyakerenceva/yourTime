import { Outlet } from "react-router-dom";
import { motion } from "framer-motion"
import { useSelector } from "react-redux";
import { CustomLink, Error, Modal, Sidebar } from "../../components";
import { selectUser } from "../../store/selectors";

const routeVariants = {
	initial: {
		x: '100vh',
		opacity: 0
	},
	final: {
		x: 0,
		opacity: 1
	},
	exit: {
		x: 0,
		opacity: 0
	}
}

export const PrivateLayout = () => {
	const { isAuth } = useSelector(selectUser);

	if (!isAuth) {
		return (
			<div className="h-screen flex flex-col items-center justify-center">
				<Error error="Ошибка доступа. Пожалуйста, войдите или зарегестрируйтесь." />
				<div className="mt-5 pt-5px flex flex-col items-center justify-between h-[117px]">
					<CustomLink
						toPageLink="/login"
						modifier="link-background-primary "
						widthClass="w-[150px]"
					>
						Вход
					</CustomLink>
					<CustomLink
						toPageLink="/register"
						modifier="text-primary shadow-none"
						widthClass="w-fit"
					>
						Регистрация
					</CustomLink>
				</div>
			</div>
		)
	}

	return (
		<div className="h-screen flex relative overflow-x-hidden">
			<Sidebar />
			<motion.main
				variants={routeVariants}
				initial="initial"
				animate="final"
				exit="exit"
				transition={{
					duration: 0.3,
					type: "tween",
					ease: "easeIn"
				}}

				className="w-4/5 relative py-7 px-7 overflow-hidden z-10">
				<Outlet />
			</motion.main>
			<Modal />
		</div>
	);
};
