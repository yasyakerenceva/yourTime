import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { CustomSelect } from "../../components";
import { Stopwatch } from "./components";
import { request } from "../../utils";
import { loadProjectAsync } from "../../store/actions";

export const Timer = () => {
	const [projects, setProjects] = useState([]);
	const [tasks, setTasks] = useState([]);
	const [isDisabledTask, setIsDisabledTask] = useState(true);
	const [projectId, setProjectId] = useState("");
	const [taskId, setTaskId] = useState("");
	const dispatch = useDispatch();

	useEffect(() => {
		request("/projects").then(({ data: { projects } }) => {
			setProjects(projects);
		});
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	useEffect(() => {
		if (projectId) {
			dispatch(loadProjectAsync(projectId)).then((projectData) => {
				setTaskId("");
				setTasks(projectData?.data?.tasks || []);
				setIsDisabledTask(false);
			});
		}
	}, [dispatch, projectId]);

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
					isDisabled={isDisabledTask}
				/>
			</div>
			<Stopwatch projectId={projectId} taskId={taskId} />
		</>
	);
};
