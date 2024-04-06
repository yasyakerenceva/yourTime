import { useNavigate } from "react-router-dom";
import { Icon } from "../Icon/Icon";

export const Back = ({ children }) => {
	const navigate = useNavigate();
	return (
		<button
			className="group flex items-center justify-center"
			onClick={() => navigate(-1)}
		>
			<Icon
				classes="text-primary pr-2 rotate-180 transition duration-300 group-hover:-translate-x-2 mr-3"
				width="28"
				height="28"
				iconId="arrow-right"
			/>
			<span className="text-primary font-bold">{children}</span>
		</button>
	);
};
