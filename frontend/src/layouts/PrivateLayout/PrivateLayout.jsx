import { Outlet } from "react-router-dom";
import {
	PROP_TYPE,
	ROUTE_VARIANTS,
	TRANSITION_ANIMATION,
} from "../../constants";
import { CustomLink, Error, Modal, Sidebar } from "../../components";
import { motion } from "framer-motion";

export const PrivateLayout = ({ isAuth, isLoginPage }) => {

	if (!isAuth && !isLoginPage) {
		return (
			<div className="overflow-hidden">
				<motion.div
					variants={ROUTE_VARIANTS}
					initial="initial"
					animate="animate"
					exit="exit"
					transition={TRANSITION_ANIMATION}
					className="h-screen w-full flex flex-col items-center justify-center "
				>
					<Error error="Ошибка доступа. Пожалуйста, войдите или зарегестрируйтесь." />
					<div className="mt-5 pt-5px flex flex-col items-center justify-between h-[117px]">
						<CustomLink
							toPageLink="/login"
							modifier="link-background-primary"
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
				</motion.div>
			</div>
		);
	}

	return (
		<div className="h-screen flex relative overflow-x-hidden">
			<Sidebar />
			<motion.main
				variants={ROUTE_VARIANTS}
				initial="initial"
				animate="animate"
				exit="exit"
				transition={TRANSITION_ANIMATION}
				className="w-4/5 relative py-7 px-7 overflow-hidden z-10"
			>
				<Outlet />
			</motion.main>
			<Modal />
		</div>
	);
};

PrivateLayout.propTypes = {
	isAuth: PROP_TYPE.BOOLEAN_REQUIRED,
	isLoginPage: PROP_TYPE.BOOLEAN_REQUIRED,
};
