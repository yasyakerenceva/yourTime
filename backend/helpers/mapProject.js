const mongoose = require("mongoose");
const mapTask = require("./mapTask");

module.exports = function (project) {
	return {
		id: project.id,
		name: project.name,
		status: project.status,
		time: project.time,
		tasks: project.tasks.map((task) =>
			mongoose.isObjectIdOrHexString(task) ? task : mapTask(task),
		),
		createdAt: project.createdAt.toLocaleDateString(),
		updatedAt: project.updatedAt.toLocaleDateString(),
		fullTime:
			project.tasks.reduce((acc, curr) => acc + curr.time, 0) +
			project.time,
	};
};
