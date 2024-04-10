import { Icon } from "../../../../components";
import styles from "./control-btn.module.css";

export const ControlBtn = ({ iconId, onClick, isDisabled = false }) => {
	return (
		<button
			type="button"
			className={`group ${styles.controlBtn} ${isDisabled ? "btn-disabled" : ""}`}
			disabled={isDisabled}
			onClick={onClick}
		>
			<Icon
				classes={`${styles.controlBtnIcon} group-hover:text-white`}
				width="28"
				height="28"
				iconId={iconId}
			/>
		</button>
	);
};
