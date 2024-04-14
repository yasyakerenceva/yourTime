import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { CustomSelect } from "../../components";
import { Stopwatch } from "./components";
import { loadProjectAsync, setTagsData } from "../../store/actions";
import { request } from "../../utils";

export const Timer = () => {
	const [projects, setProjects] = useState([]);
	const [tasks, setTasks] = useState([]);
	const [isLoadingProjects, setIsLoadingProjects] = useState(true);
	const [isLoadingTasks, setIsLoadingTasks] = useState(false);
	const [isDisabledTasks, setIsDisabledTasks] = useState(true);
	const [projectId, setProjectId] = useState("");
	const [taskId, setTaskId] = useState("");
	const dispatch = useDispatch();

	useEffect(() => {
		Promise.all([request("/projects"), request("/projects/status")])
			.then(
				([
					{
						data: { projects: projectsData },
					},
					{ data: tagsData },
				]) => {
					setProjects(projectsData);
					dispatch(setTagsData(tagsData));
					sessionStorage.setItem("tags", JSON.stringify(tagsData));
				},
			)
			.finally(() => setIsLoadingProjects(false));
	}, [dispatch]);

	useEffect(() => {
		setIsDisabledTasks(true);
		if (projectId) {
			setIsLoadingTasks(true);
			dispatch(loadProjectAsync(projectId)).then((projectData) => {
				setTasks(projectData?.data?.tasks || []);
				setIsDisabledTasks(false);
				setIsLoadingTasks(false);
			});
		}
		setTaskId("");
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
					isLoading={isLoadingProjects}
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
					isLoading={isLoadingTasks}
					isDisabled={isDisabledTasks}
				/>
			</div>
			<Stopwatch projectId={projectId} taskId={taskId} />
		</>
	);
};
