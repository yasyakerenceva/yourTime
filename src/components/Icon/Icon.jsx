import spriteSvg from "../../assets/icons.svg";

export const Icon = ({ iconId, classes, width, height }) => {
	return (
		<svg className={classes} width={width} height={height}>
			<use href={`${spriteSvg}#${iconId}`} />
		</svg>
	);
};
