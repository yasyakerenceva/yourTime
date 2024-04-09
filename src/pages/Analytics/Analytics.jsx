import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFormattedTime, request } from "../../utils";
import {
	BarChart,
	BarChartDate,
	Card,
	PieChart,
	BarChartHorizontal,
} from "./components";
import { selectTags } from "../../store/selectors";
import { setTagsData } from "../../store/actions";
import { Loader } from "../../components";

export const Analytics = () => {
	const [projects, setProjects] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const dispatch = useDispatch();
	const tags = useSelector(selectTags);

	useEffect(() => {
		setIsLoading(true);
		request("/projects")
			.then(({ data: { projects } }) => {
				setProjects(projects);
			})
			.then(() => setIsLoading(false));
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	useEffect(() => {
		const tagsDataJSON = sessionStorage.getItem("tagsData");

		if (!tagsDataJSON) {
			return;
		}

		const tagsData = JSON.parse(tagsDataJSON);

		dispatch(setTagsData(tagsData));
	}, [dispatch]);

	const fullTiime = projects.reduce((acc, curr) => acc + curr.fullTime, 0);
	const [hours, minutes, seconds] = getFormattedTime(fullTiime);

	if (isLoading) {
		return <Loader />;
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
				<Card iconId="time" name="Общее время">
					<span>{`${hours}ч ${minutes}м ${seconds}сек`}</span>
				</Card>
				<Card classes="row-span-2">
					<PieChart tags={tags} projects={projects} />
				</Card>
				<Card classes="col-span-2">
					<BarChart projects={projects} />
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
