const mongoose = require("mongoose");
const status = require("../constants/status");

const ProjectSchema = mongoose.Schema(
	{
		name: {
			type: String,
			required: true,
		},
		status: {
			type: Number,
			default: status.WORK,
		},
		time: {
			type: Number,
			required: true,
			default: 0,
		},
		tasks: [
			{
				type: mongoose.Schema.Types.ObjectId,
				ref: "Task",
			},
		],
		user: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "User",
		},
	},
	{ timestamps: true },
);

const Project = mongoose.model("Project", ProjectSchema);

module.exports = Project;
