import { NavLink, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { TRANSITION_ANIMATION } from "../../constants/animation";
import { PROP_TYPE } from "../../constants/prop-types";

export const ExtendedLink = ({ to, children }) => {
	const location = useLocation();

	return (
		<NavLink to={to} className="navlink">
			<span
				className={`${location.pathname === to ? "relative z-10 " : ""} `}
			>
				{children}
			</span>
			{location.pathname === to ? (
				<motion.div
					transition={TRANSITION_ANIMATION}
					layoutId="underline"
					className="absolute w-full h-full left-0 bottom-0 rounded-l-[45px] bg-white shadow-sm"
				></motion.div>
			) : null}
		</NavLink>
	);
};

ExtendedLink.propTypes = {
	to: PROP_TYPE.STRING_REQUIRED,
	children: PROP_TYPE.NODE,
};
