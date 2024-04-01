const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
	firstname: {
		type: String,
		default: "",
	},
	jobtitle: {
		type: String,
		default: "",
	},
	login: {
		type: String,
		unique: true,
		required: true,
	},
	password: {
		type: String,
		required: true,
	},
});

const User = mongoose.model("User", UserSchema);

module.exports = User;
