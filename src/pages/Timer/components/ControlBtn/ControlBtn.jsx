import { Icon } from "../../../../components";
import "./control-btn.css";

export const ControlBtn = ({ iconId, onClick }) => {
	return (
		<button
			type="button"
			className="group btn control-btn"
			onClick={onClick}
		>
			<Icon
				classes="control-btn-icon"
				width="28"
				height="28"
				iconId={iconId}
			/>
		</button>
	);
};
