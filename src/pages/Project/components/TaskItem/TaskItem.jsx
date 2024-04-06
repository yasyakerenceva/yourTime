import { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import {
	CLOSE_MODAL,
	openModal,
	removeTaskAsync,
} from "../../../../store/actions";
import { request } from "../../../../utils";
import { Icon } from "../../../../components";

export const TaskItem = ({ id, name, projectId }) => {
	const [taskValue, setTaskValue] = useState(name);
	const [isEditingEnabled, setIsEditingEnabled] = useState(false);
	const refInputEdit = useRef(null);
	const dispatch = useDispatch();

	const handleTaskRemove = (projectId, taskId) => {
		dispatch(
			openModal({
				title: "Удалить задачу?",
				onConfirm: () => {
					dispatch(removeTaskAsync(projectId, taskId));
					dispatch(CLOSE_MODAL);
				},

				onCancel: () => dispatch(CLOSE_MODAL),
			}),
		);
	};

	const handleTaskEdit = () => {
		setIsEditingEnabled(true);
		setTimeout(() => {
			refInputEdit.current.focus();
		}, 0);
	};

	const handleChange = ({ target }) => {
		setTaskValue(target.value);
	};

	const handleBlur = (projectId, taskId, value) => {
		if (!value) return;

		request(`/projects/${projectId}/tasks/${taskId}`, "PATCH", {
			name: value,
		});
		setIsEditingEnabled(false);
	};

	return (
		<li className="flex items-center justify-between">
			{isEditingEnabled ? (
				<input
					ref={refInputEdit}
					type="text"
					className="w-full outline-none pr-5"
					value={taskValue}
					onChange={handleChange}
					onBlur={() => handleBlur(projectId, id, taskValue)}
				/>
			) : (
				<span>{taskValue}</span>
			)}
			<div className="flex items-center">
				<button
					type="button"
					className="group w-9 h-9 flex items-center justify-center outline-none"
					onClick={handleTaskEdit}
				>
					<Icon
						iconId="pencil"
						classes="text-third transition-colors group-hover:text-primary group-focus:text-primary group-active:text-primary"
						width="18"
						height="18"
					/>
				</button>
				<button
					type="button"
					className="group w-9 h-9 flex items-center justify-center outline-none"
					onClick={() => handleTaskRemove(projectId, id)}
				>
					<Icon
						iconId="delete"
						classes="text-third transition-colors group-hover:text-primary group-focus:text-primary group-active:text-primary"
						width="18"
						height="18"
					/>
				</button>
			</div>
		</li>
	);
};
