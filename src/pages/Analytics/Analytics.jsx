import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFormattedTime } from "../../utils";
import {
	BarChartDate,
	Card,
	PieChart,
	BarChartHorizontal,
	BarChartProjects,
} from "./components";
import { selectProjectsAll, selectTags } from "../../store/selectors";
import { loadProjectsAllAsync } from "../../store/actions";
import { Loader, MessageDefault } from "../../components";

export const Analytics = () => {
	const [isLoading, setIsLoading] = useState(true);
	const tags = useSelector(selectTags);
	const projects = useSelector(selectProjectsAll);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(loadProjectsAllAsync()).finally(() =>
			setIsLoading(false),
		);
	}, [dispatch]);

	const fullTiime = projects.reduce((acc, curr) => acc + curr.fullTime, 0);
	const [hours, minutes] = getFormattedTime(fullTiime);

	if (isLoading) {
		return <Loader />;
	}

	if (projects.length === 0 && !isLoading) {
		return (
			<MessageDefault marginTop="mt-24">
				Аналитика не может быть построена, нет проектов.
			</MessageDefault>
		)
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
