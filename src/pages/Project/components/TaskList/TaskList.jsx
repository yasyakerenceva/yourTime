import { TaskItem } from "../TaskItem/TaskItem";

export const TaskList = ({ tasks, projectId }) => {
	return (
		<ul className=" mt-2 pl-2 max-h-80 overflow-y-auto scroll">
			{tasks.map(({ id, name }) => (
				<TaskItem key={id} id={id} name={name} projectId={projectId} />
			))}
		</ul>
	);
};
