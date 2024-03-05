import { CustomSelect } from "../../components";
import { svgPause, svgPlay, svgStop } from "../../utils/svg";

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
		<div className=" mt-10 flex flex-col items-center">
			<div>
				<CustomSelect
					id="projects"
					label="Проект:"
					options={optionsProject}
					placeholder="Выберите проект"
					noOptionsMessage="Нет проектов"
				/>
				<CustomSelect
					id="tasks"
					label="Задача:"
					options={optionsTasks}
					placeholder="Выберите задачу"
					noOptionsMessage="Нет задач"
				/>
			</div>
			<div>
				<div className="text-[80px]">
					<span>37</span>
					<span>:</span>
					<span>04</span>
					<span className="text-black opacity-20">:</span>
					<span className="text-black opacity-20">56</span>
				</div>
				<span>Общее время: 3ч 45м</span>
				<div className="flex">
					<button type="button" className="btn w-14 h-14">
						{svgPlay()}
					</button>
					<button type="button" className="btn w-14 h-14">
						{svgPause()}
					</button>
					<button type="button" className="btn w-14 h-14">
						{svgStop()}
					</button>
				</div>
			</div>
		</div>
	);
};
