import { getFormattedTime } from "./getFormattedTime";

export const getAxisScaleMaxValue = (array) => {
	const scaleMax = array
		.map((item) => {
			const fullTime = item.hasOwnProperty("fullTime")
				? item.fullTime
				: item;

			const [hours, minutes] = getFormattedTime(fullTime);

			return (Number(hours) + Number(minutes) / 60).toFixed(2);
		})
		.sort()
		.at(-1);

	return Number(scaleMax) + 1;
};
