import { useSelector } from "react-redux";
import { getFormattedTime, request } from "../../utils";
import {
	BarChartDate,
	Card,
	PieChart,
	BarChartHorizontal,
	BarChartProjects,
} from "./components";
import { selectTags } from "../../store/selectors";
import { MessageDefault } from "../../components";
import { useEffect, useState } from "react";

export const Analytics = () => {
	const [projects, setProjects] = useState([]);
	const tags = useSelector(selectTags);

	useEffect(() => {
		request("/projects").then(({ data: { projects: projectsData } }) => {
			setProjects(projectsData);
		});
	}, []);

	const fullTiime = projects.reduce((acc, curr) => acc + curr.fullTime, 0);
	const [hours, minutes] = getFormattedTime(fullTiime);

	if (projects.length === 0) {
		return (
			<MessageDefault marginTop="mt-24">
				Аналитика не может быть построена, нет проектов.
			</MessageDefault>
		);
	}

	if (Number(minutes) < 30) {
		return (
			<MessageDefault marginTop="mt-24">
				Аналитика не может быть построена, слишком мало данных.
			</MessageDefault>
		);
	}

	return (
		<div className="overflow-y-auto h-full scroll px-2 py-4">
			<div className="grid grid-cols-3  gap-8">
				<Card
					iconId="project"
					name="Проекты"
					tooltip="Количество всех проектов"
				>
					<span>{projects.length}</span>
				</Card>
				<Card
					iconId="time"
					name="Общее время"
					tooltip="Затраченное время на всех проектах"
				>
					<span>{`${hours}ч ${minutes}м`}</span>
				</Card>
				<Card classes="row-span-2">
					<PieChart tags={tags} projects={projects} />
				</Card>
				<Card classes="col-span-2">
					<BarChartProjects projects={projects} />
				</Card>
				<Card classes="col-span-2">
					<BarChartDate projects={projects} />
				</Card>
				<Card classes="col-span-2">
					<BarChartHorizontal projects={projects} />
				</Card>
			</div>
		</div>
	);
};
