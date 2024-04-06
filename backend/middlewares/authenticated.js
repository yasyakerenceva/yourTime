const User = require("../models/User");
const { verify } = require("../helpers/token");

module.exports = async function (req, res, next) {
	const tokenData = verify(req.cookies.token);

	const user = await User.findOne({ _id: tokenData.id });

	if (!user) {
		res.send({ error: "Авторизованный пользователь не найден" });
		return;
	}

	req.user = user;

	next();
};
