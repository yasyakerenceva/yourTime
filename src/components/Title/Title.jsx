export const Title = ({ children, size }) => {
	const sizeVariants = {
		48: "text-5xl leading-snug",
	};

	return <h1 className={`${sizeVariants[size]} font-bold`}>{children}</h1>;
};
