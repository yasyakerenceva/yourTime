import { Icon } from "../../../../components";
import { PROP_TYPE } from "../../../../constants";

export const ControlBtn = ({ iconId, onClick, isDisabled = false }) => {
	return (
		<button
			type="button"
			className={`group btn control-btn ${isDisabled ? "btn-disabled" : ""}`}
			disabled={isDisabled}
			onClick={onClick}
		>
			<Icon
				classes="control-btn-icon group-hover:text-white"
				width="28"
				height="28"
				iconId={iconId}
			/>
		</button>
	);
};

ControlBtn.propTypes = {
	iconId: PROP_TYPE.STRING_REQUIRED,
	onClick: PROP_TYPE.FUNCTION_REQUIRED,
	isDisabled: PROP_TYPE.BOOLEAN,
};
