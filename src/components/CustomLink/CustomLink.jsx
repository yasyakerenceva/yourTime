import { Link } from "react-router-dom";

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
					<svg
						className="text-primary"
						height="22"
						width="22"
						viewBox="0 0 24 24"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path d="M0 0h24v24H0z" fill="none"></path>
						<path
							d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
							fill="currentColor"
						></path>
					</svg>
				</div>
			)}
		</Link>
	);
};
