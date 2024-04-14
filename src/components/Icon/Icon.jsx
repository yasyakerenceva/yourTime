import spriteSvg from "../../assets/icons.svg";
import { PROP_TYPE } from "../../constants/prop-types";

export const Icon = ({ iconId, classes = "", width, height }) => {
	return (
		<svg className={classes} width={width} height={height}>
			<use href={`${spriteSvg}#${iconId}`} />
		</svg>
	);
};

Icon.propTypes = {
	iconId: PROP_TYPE.STRING,
	classes: PROP_TYPE.STRING,
	width: PROP_TYPE.STRING_REQUIRED,
	height: PROP_TYPE.STRING_REQUIRED,
};
