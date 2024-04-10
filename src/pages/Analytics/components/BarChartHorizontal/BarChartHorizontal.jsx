import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	BarElement,
	Title,
	Tooltip,
	Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { getAxisScaleMaxValue, getFormattedTime } from "../../../../utils";

ChartJS.register(
	CategoryScale,
	LinearScale,
	BarElement,
	Title,
	Tooltip,
	Legend,
);

export const BarChartHorizontal = ({ projects }) => {
	const projectsFiltered = projects
		.sort((a, b) => b.fullTime - a.fullTime)
		.slice(0, 3)
		.filter(({ fullTime }) => fullTime !== 0);

	const options = {
		responsive: true,
		indexAxis: "y",
		plugins: {
			legend: {
				display: false,
			},
			title: {
				display: true,
				text: "Время работы на топ-3 проектах.",
			},
			tooltip: {
				displayColors: false,
				backgroundColor: "#ececec",
				titleColor: "#000",
				titleFont: { weight: "normal" },
				titleAlign: "center",
				bodyColor: "#000",
				callbacks: {
					label: function (context) {
						const hours = Math.floor(Number(context.raw));
						const minutes = Math.round(
							(Number(context.raw) - hours) * 60,
						);

						return `${hours}ч ${minutes}м`;
					},
				},
			},
		},
		scales: {
			x: {
				min: 0,
				max: getAxisScaleMaxValue(projectsFiltered),
			},
		},
	};

	const data = {
		labels: projectsFiltered.map(({ name }) => name),
		datasets: [
			{
				data: projectsFiltered.map(({ fullTime }) => {
					const [hours, minutes] = getFormattedTime(fullTime);
					return (Number(hours) + Number(minutes) / 60).toFixed(2);
				}),
				backgroundColor: "#8da190",
				hoverBackgroundColor: "#3b523f",
			},
		],
	};
	return <Bar options={options} data={data} />;
};
