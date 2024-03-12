import { Link } from "react-router-dom";
import { Icon } from "../Icon/Icon";

export const CustomLink = ({
	children,
	toPageLink,
	widthClass = "w-fit",
	modifier = "link-background-primary",
	isAnimation = true,
	isIcon = false,
}) => {
	return (
		<Link
			to={toPageLink}
			className={`group link ${modifier} ${isAnimation ? "link-animation" : ""} ${widthClass} relative h-14`}
		>
			{children}
			{isIcon && (
				<div className="link__icon">
					<Icon
						classes="text-primary"
						width="22"
						height="22"
						iconId="icon-arrow"
					/>
				</div>
			)}
		</Link>
	);
};
