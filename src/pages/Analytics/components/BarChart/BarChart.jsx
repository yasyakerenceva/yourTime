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
import { getFormattedTime } from "../../../../utils";

ChartJS.register(
	CategoryScale,
	LinearScale,
	BarElement,
	Title,
	Tooltip,
	Legend,
);

export const BarChart = ({ projects }) => {
	const options = {
		responsive: true,
		plugins: {
			legend: {
				display: false,
			},
			// title: {
			// 	display: true,
			// 	text: "Chart.js Bar Chart",
			// },
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
						const minutes = Math.floor(
							(Number(context.raw) - hours) * 60,
						);

						return `Проект - ${context.label}: ${hours}ч ${minutes}м`;
					},
				},
			},
		},
		scales: {
			y: {
				min: 0,
				max: 20,
			},
		},
	};

	const data = {
		labels: projects.map(({ name }) => name),
		datasets: [
			{
				data: projects.map(({ fullTime }) => {
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
