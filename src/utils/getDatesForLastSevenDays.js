export const getDatesForLastSevenDays = () => {
	const today = new Date();
	const sevenDaysAgo = new Date(today);
	sevenDaysAgo.setDate(today.getDate() - 6);

	const dates = [];

	while (sevenDaysAgo <= today) {
		dates.push(new Date(sevenDaysAgo).toLocaleDateString());
		sevenDaysAgo.setDate(sevenDaysAgo.getDate() + 1);
	}

	return dates;
};
