export const Error = ({ error }) => {
	return (
		<div className="flex items-center justify-center h-full">
			<span className=" text-primary font-bold">{error}</span>
		</div>
	);
};
