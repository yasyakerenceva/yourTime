const mongoose = require("mongoose");

const TaskSchema = mongoose.Schema(
	{
		name: {
			type: String,
			required: true,
		},
		time: {
			type: Number,
			required: true,
			default: 0,
		},
	},
	{ timestamps: true },
);

const Task = mongoose.model("Task", TaskSchema);

module.exports = Task;
