import { Icon } from "../../../../components";
import { PROP_TYPE } from "../../../../constants";

export const Tooltip = ({ text = "" }) => {
	if (!text) {
		return;
	}

	return (
		<div className="group relative ml-5 cursor-pointer">
			<Icon iconId="question" width="15" height="15" />
			<span className="invisible absolute top-7 -left-2/4 -translate-x-2/4 w-[300px] text-center bg-[#ececec] p-7 rounded-md opacity-0 z-20 transition-opacity duration-300 ease-in-out group-hover:visible group-hover:opacity-100">
				{text}
			</span>
		</div>
	);
};

Tooltip.propTypes = {
	text: PROP_TYPE.STRING,
};
