import { getFormattedTime } from "../../utils";
import { BarChart, Card, PieChart } from "./components";

const TAGS_MOCK = [
	{ id: 1, value: "В процессе" },
	{ id: 2, value: "Завершенные" },
];

const PROJECT_MOCK = [
	{
		status: 1,
		name: "Frontend",
		fullTime: 39900,
	},
	{
		status: 2,
		name: "Ui",
		fullTime: 120900,
	},
	{
		status: 2,
		name: "React",
		fullTime: 65900,
	},
	{
		status: 1,
		name: "Vue",
		fullTime: 3339900,
	},
	{
		status: 1,
		name: "Angular",
		fullTime: 3567899900,
	},
];

export const Analytics = () => {
	const [hours, minutes] = getFormattedTime(9000000);
	return (
		<div className="overflow-y-auto h-full scroll">
			<div className="grid grid-cols-3  gap-8">
				<Card
					iconId="project"
					name="Проекты"
					tooltip="Количество всех проектов"
				>
					<span>25</span>
				</Card>
				<Card iconId="time" name="Общее время">
					<span>{`${hours}ч ${minutes}м`}</span>
				</Card>
				<Card classes="row-span-2">
					<PieChart tags={TAGS_MOCK} projects={PROJECT_MOCK} />
				</Card>
				<Card classes="col-span-2">
					<BarChart projects={PROJECT_MOCK} />
				</Card>
				<Card classes="col-span-2">
					<BarChart projects={PROJECT_MOCK} />
				</Card>
				<Card classes="col-span-2">
					<BarChart projects={PROJECT_MOCK} />
				</Card>
			</div>
		</div>
	);
};
