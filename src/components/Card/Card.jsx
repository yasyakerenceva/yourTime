export const Card = ({ classes, title, description, component }) => {
	return (
		<div
			className={`${classes} flex flex-col items-center justify-center text-white bg-primary`}
		>
			<h2 className="text-24px font-bold">{title}</h2>
			<span className="text-16px mt-3 text-center">{description}</span>
			<div className="mt-9 pt-5px">{component}</div>
		</div>
	);
};
