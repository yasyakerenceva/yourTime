import mainImage from "../../assets/images/main-image.png";
import { CustomLink } from "../../components";
import { motion } from "framer-motion";
import {
	LEFT_MOVE_VARIANTS,
	RIGHT_MOVE_VARIANTS,
	TRANSITION_ANIMATION,
} from "../../constants";

export const Main = () => {
	return (
		<main className="flex h-full pt-[100px]">
			<motion.div
				variants={LEFT_MOVE_VARIANTS}
				initial="initial"
				animate="animate"
				exit="exit"
				transition={TRANSITION_ANIMATION}
				className="w-2/5 self-center pl-20 pr-10"
			>
				<h1 className="title">
					Отслеживайте <br /> свое рабочее время
				</h1>
				<p className="description mt-4">
					Удобный тайм-трекер позволяет сохранять результаты работы,
					отслеживать прогресс и анализировать свою эффективность.
				</p>
				<div className="mt-8">
					<CustomLink
						toPageLink="/register"
						widthClass="w-[300px]"
						modifier="link-background-primary"
						isAnimation={false}
						isIcon={true}
					>
						Начать
					</CustomLink>
				</div>
			</motion.div>
			<motion.div
				variants={RIGHT_MOVE_VARIANTS}
				initial="initial"
				animate="animate"
				exit="exit"
				transition={TRANSITION_ANIMATION}
				className="w-3/5 self-center"
			>
				<img src={mainImage} alt="main" />
			</motion.div>
		</main>
	);
};
