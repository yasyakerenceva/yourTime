import { Link } from "react-router-dom";

export const Logo = () => {
	return (
		<Link to="/" className="flex items-center justify-center">
			<span className="text-4xl text-primary">
				your<u className="font-rock-salt no-underline">T</u>ime
			</span>
		</Link>
	);
};
