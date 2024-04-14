import { Link } from "react-router-dom";
import { PROP_TYPE } from "../../constants/prop-types";

export const Logo = ({ toPath, pathname }) => {
	return (
		<Link to={toPath} className="block w-fit focus:outline-none">
			<span
				className={`${pathname === "/" ? "text-40px" : "text-24px"} ${pathname === "/login" || pathname === "/" ? "text-primary" : "text-white"}`}
			>
				your<u className="font-rock-salt no-underline">T</u>ime
			</span>
		</Link>
	);
};

Logo.propTypes = {
	toPath: PROP_TYPE.STRING_REQUIRED,
	pathname: PROP_TYPE.STRING,
};
