export const getFormattedTime = (time) => {
	const hours = Math.floor(time / (1000 * 60 * 60))
		.toString()
		.padStart(2, "0");
	const minutes = Math.floor((time / (1000 * 60)) % 60)
		.toString()
		.padStart(2, "0");
	const seconds = Math.floor((time / 1000) % 60)
		.toString()
		.padStart(2, "0");

	return [hours, minutes, seconds];
};
