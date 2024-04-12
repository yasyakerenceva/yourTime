export const getFormattedTime = (time) => {
	const hours = Math.round(time / (1000 * 60 * 60))
		.toString()
		.padStart(2, "0");
	const minutes = Math.round((time / (1000 * 60)) % 60)
		.toString()
		.padStart(2, "0");
	const seconds = Math.round((time / 1000) % 60)
		.toString()
		.padStart(2, "0");

	return [hours, minutes, seconds];
};
