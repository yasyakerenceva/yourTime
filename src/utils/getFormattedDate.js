export const getFormattedDate = (dateString) => {
	const date = new Date(Date.parse(dateString));

	return `${date.getDate().toString().padStart(2, "0")}.${(
		date.getMonth() + 1
	)
		.toString()
		.padStart(2, "0")}.${date.getFullYear()}`;
};
