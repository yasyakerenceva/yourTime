const bcrypt = require("bcrypt");
const User = require("../models/User");
const { generate } = require("../helpers/token");

// register
async function register(firstname, jobtitle, login, password) {
	const passwordHash = await bcrypt.hash(password, 10);

	const user = await User.create({
		firstname,
		jobtitle,
		login,
		password: passwordHash,
	});

	const token = generate({ id: user.id });

	return { user, token };
}

// login
async function login(login, password) {
	const user = await User.findOne({ login });

	if (!user) {
		throw new Error(
			"Пользователь не найден. Пожалуйста, зарегистрируйтесь.",
		);
	}

	const isPasswordMatch = await bcrypt.compare(password, user.password);

	if (!isPasswordMatch) {
		throw new Error("Неправильный пароль");
	}

	const token = generate({ id: user.id });

	return { user, token };
}

// edit (firstname, jobtitle, login)
function updateUser(id, userData) {
	return User.findByIdAndUpdate(id, userData, { returnDocument: "after" });
}

module.exports = {
	register,
	login,
	updateUser,
};
