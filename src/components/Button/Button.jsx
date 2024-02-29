export const Button = ({
	children,
	type,
	disabled,
	widthClass,
	modifier = "btn-background-primary",
	isAnimation = true,
}) => {
	return (
		<button
			type={type}
			disabled={disabled}
			className={`btn ${disabled ? "opacity-60" : `${isAnimation ? "link-animation" : ""}`} ${modifier}  ${widthClass} h-14`}
		>
			{children}
		</button>
	);
};
