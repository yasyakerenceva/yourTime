export const getFormattedTime = (time) => {
	let hours = Math.floor(time / (1000 * 60 * 60));
	let minutes = Math.floor((time / (1000 * 60)) % 60);
	let seconds = Math.floor((time / 1000) % 60);

	hours = String(hours).padStart(2, "0");
	minutes = String(minutes).padStart(2, "0");
	seconds = String(seconds).padStart(2, "0");

	return [hours, minutes, seconds];
};
