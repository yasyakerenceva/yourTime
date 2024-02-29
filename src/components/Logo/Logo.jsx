import { Link } from "react-router-dom";

export const Logo = ({ pathname }) => {
	return (
		<Link
			to="/"
			className="flex items-center justify-center focus:outline-none"
		>
			<span
				className={`${pathname === "/" ? "text-40px" : "text-24px"} ${pathname === "/register" ? "text-white" : "text-primary"}`}
			>
				your<u className="font-rock-salt no-underline">T</u>ime
			</span>
		</Link>
	);
};
