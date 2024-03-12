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
				width="40"
				height="40"
				iconId={iconId}
			/>
		</button>
	);
};
