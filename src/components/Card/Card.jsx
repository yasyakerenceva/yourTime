import { motion } from "framer-motion";
import {
	CARD_VARIANTS,
	PROP_TYPE,
	TRANSITION_ANIMATION,
} from "../../constants";

export const Card = ({ classes, title, description, component }) => {
	return (
		<motion.div
			variants={CARD_VARIANTS}
			initial="initial"
			animate="animate"
			exit="exit"
			transition={TRANSITION_ANIMATION}
			className={`${classes} bg-primary`}
		>
			<motion.div
				className=" h-full flex flex-col items-center justify-center text-center text-white "
				initial={{ opacity: 0 }}
				animate={{
					opacity: 1,
				}}
				exit={{ opacity: 0 }}
				transition={TRANSITION_ANIMATION}
			>
				<h2 className="text-24px font-bold">{title}</h2>
				<span className="text-16px mt-3 px-6 w-[400px]">
					{description}
				</span>
				<div className="mt-8 pt-5px">{component}</div>
			</motion.div>
		</motion.div>
	);
};

Card.propTypes = {
	classes: PROP_TYPE.STRING,
	title: PROP_TYPE.STRING_REQUIRED,
	description: PROP_TYPE.STRING_REQUIRED,
	component: PROP_TYPE.NODE,
};
