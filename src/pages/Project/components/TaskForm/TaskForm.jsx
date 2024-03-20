import { Field } from "../../../../components";

export const TaskForm = () => {
	return (
		<form>
			<Field
				id="task"
				name="task"
				labelText="Задачи"
				placeholder="Добавить задачу"
			/>
		</form>
	);
};
