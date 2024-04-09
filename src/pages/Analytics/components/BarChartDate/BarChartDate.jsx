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
import { getDatesForLastSevenDays, getFormattedTime } from "../../../../utils";

ChartJS.register(
	CategoryScale,
	LinearScale,
	BarElement,
	Title,
	Tooltip,
	Legend,
);

export const BarChartDate = ({ projects }) => {
	const dates = getDatesForLastSevenDays().reverse();

	const modificationDates = dates.map((date) => {
		if (projects.find((project) => project.createdAt === date)) {
			return date;
		}
		return 0;
	});

	const fullTimeArray = modificationDates.map((date) => {
		const projectsFilter = projects.filter(
			({ createdAt }) => createdAt === date,
		);

		if (projectsFilter.length > 0) {
			return projectsFilter.reduce((acc, curr) => acc + curr.fullTime, 0);
		}
		return 0;
	});

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
						const minutes = Math.round(
							(Number(context.raw) - hours) * 60,
						);

						return `${hours}ч ${minutes}м`;
					},
				},
			},
		},
		scales: {
			y: {
				min: 0,
				max: 5,
			},
		},
	};

	const data = {
		labels: dates,
		datasets: [
			{
				data: fullTimeArray.map((fullTime) => {
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
