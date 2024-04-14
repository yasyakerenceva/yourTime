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
			project.tasks.reduce(
				(acc, curr) => acc + Math.floor(curr.time / 1000) * 1000,
				0,
			) + Math.floor(Math.floor(project.time / 1000) * 1000),
	};
};
