import { NavLink } from "react-router-dom";

export const ExtendedLink = ({ to, children }) => {
	return (
		<NavLink to={to} className="navlink">
			<span>{children}</span>
		</NavLink>
	);
};
