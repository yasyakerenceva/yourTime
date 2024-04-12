import { motion } from "framer-motion"


export const Card = ({ classes, title, description, component}) => {
	return (
		<motion.div
			initial={{width: '100%', opacity: 1}}
			animate={{ width: '40%', opacity: 1, transition: {delayChildren: 5} }}
			exit={{width: '100%', opacity: 1}}
			transition={{
				duration: 0.3,
				type: "tween",
				ease: "easeIn",
			}}
			className={`${classes} bg-primary`}
		>
			<motion.div className=" h-full flex flex-col items-center justify-center text-center text-white "
				initial={{opacity: 0}}
				animate={{opacity: 1 }}
			>
				<h2 className="text-24px font-bold">{title}</h2>
				<span className="text-16px mt-3 px-6 w-[400px]">{description}</span>
				<div className="mt-8 pt-5px">{component}</div>
			</motion.div>

		</motion.div>
	);
};
