import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTaskAsync } from "../../../../store/actions";
import { Field } from "../../../../components";

export const TaskForm = ({ projectId }) => {
	const [newTask, setNewTask] = useState("");
	const [taskValueError, setTaskValueError] = useState(null);
	const dispatch = useDispatch();

	const handleChangeTask = ({ target }) => {
		setNewTask(target.value);

		let errorMessage = null;

		if (!target.value) {
			errorMessage = "Поле не должно быть пустым.";
		}
		setTaskValueError(errorMessage);
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		if (!newTask) {
			setTaskValueError("Поле не должно быть пустым.");
			return;
		}
		dispatch(addTaskAsync(projectId, newTask));
		setNewTask("");
	};

	return (
		<form className="mt-4" onSubmit={handleSubmit}>
			<Field
				id="task"
				name="task"
				value={newTask}
				onChange={handleChangeTask}
				labelText="Задачи"
				placeholder="Добавить задачу"
				error={taskValueError}
			/>
		</form>
	);
};
