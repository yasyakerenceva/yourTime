export const Button = ({
	children,
	type,
	widthClass,
	modifier = "btn-background-primary",
	isAnimation = true,
}) => {
	return (
		<button
			type={type}
			className={`btn ${modifier} ${isAnimation ? "link-animation" : ""} ${widthClass} h-14`}
		>
			{children}
		</button>
	);
};
