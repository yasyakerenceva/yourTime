import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export const PieChart = ({ tags, projects }) => {
	const options = {
		plugins: {
			legend: {
				display: true,
				position: "top",
				labels: {
					color: "#000",
				},
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
						return (
							Math.round((Number(context.raw) * 100) / projects.length) + "%"
						);
					},
				},
			},
		},
	};

	const data = {
		labels: tags.map(({ name }) => name),
		datasets: [
			{
				data: tags.map(
					({ id }) =>
						projects.filter(({ status }) => id === status).length,
				),
				backgroundColor: ["#8da190", "#3b523f"],
				hoverOffset: 4,
			},
		],
	};

	return <Pie data={data} options={options} />;
};
