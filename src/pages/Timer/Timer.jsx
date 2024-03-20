import { CustomSelect } from "../../components";
import { Stopwatch } from "./components";

const projects = [
	{
		id: "001",
		userId: "001",
		name: "Web design",
		totalTime: "3:45",
		dataCreation: "2023-09-14",
		status: "work",
	},
	{
		id: "002",
		userId: "001",
		name: "todo",
		totalTime: "1:00",
		dataCreation: "2023-12-14",
		status: "work",
	},
];

const tasks = [
	{
		id: "001",
		projectId: "001",
		name: "1-task",
		time: "0.30",
	},
];

const optionsProject = projects.map((project) => {
	return {
		value: project.id,
		label: project.name,
	};
});

const optionsTasks = tasks.map((task) => {
	return {
		value: task.id,
		label: task.name,
	};
});

export const Timer = () => {
	return (
		<>
			<div className="mt-10 w-2/4 mx-auto flex flex-col items-center">
				<CustomSelect
					id="projects"
					label="Проект:"
					options={optionsProject}
					placeholder="Выберите проект"
					noOptionsMessage="Нет проектов"
				/>
				<CustomSelect
					classes="mt-5"
					id="tasks"
					label="Задача:"
					options={optionsTasks}
					placeholder="Выберите задачу"
					noOptionsMessage="Нет задач"
				/>
			</div>
			<Stopwatch />
		</>
	);
};
