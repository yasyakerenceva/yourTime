import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CustomSelect } from "../../components";
import { Stopwatch } from "./components";
import { request } from "../../utils";
import { loadProjectAsync, loadProjectsAsync } from "../../store/actions";
import { selectProjects } from "../../store/selectors";

export const Timer = () => {
	const [projects, setProjects] = useState([]);
	const [tasks, setTasks] = useState([]);
	const [projectId, setProjectId] = useState('');
	const [taskId, setTaskId] = useState(null);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(loadProjectsAsync(false))
		.then(({ data: { projects } }) => {
			setProjects(projects);
		});
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const onBlur = () => {
		dispatch(loadProjectAsync(projectId)).then((projectData) => {
			setTasks(projectData.data.tasks);
		});
	}

	return (
		<>
			<div className="mt-10 w-2/4 mx-auto flex flex-col items-center">
				<CustomSelect
					id="projects"
					label="Проект:"
					arrayOptions={projects}
					placeholder="Выберите проект"
					noOptionsMessage="Нет проектов"
					currentValue={projectId}
					setCurrentValue={setProjectId}
					onBlur={onBlur}
				/>
				<CustomSelect
					classes="mt-5"
					id="tasks"
					label="Задача:"
					arrayOptions={tasks}
					placeholder="Выберите задачу"
					noOptionsMessage="Нет задач"
					currentValue={taskId}
					setCurrentValue={setTaskId}
				/>
			</div>
			<Stopwatch />
		</>
	);
};
