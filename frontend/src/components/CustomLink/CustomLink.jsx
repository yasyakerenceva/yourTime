import { Link } from "react-router-dom";
import { Icon } from "../Icon/Icon";
import { PROP_TYPE } from "../../constants/prop-types";

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
						iconId="arrow-right"
					/>
				</div>
			)}
		</Link>
	);
};

CustomLink.propTypes = {
	children: PROP_TYPE.NODE,
	toPageLink: PROP_TYPE.STRING_REQUIRED,
	widthClass: PROP_TYPE.STRING,
	modifier: PROP_TYPE.STRING,
	isAnimation: PROP_TYPE.BOOLEAN,
	isIcon: PROP_TYPE.BOOLEAN,
};
