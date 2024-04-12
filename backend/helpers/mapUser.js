module.exports = function (user) {
	return {
		id: user.id,
		firstname: user.firstname,
		jobtitle: user.jobtitle,
		login: user.login,
		isAuth: true,
	};
};
