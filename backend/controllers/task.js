const Project = require("../models/Project");
const Task = require("../models/Task");

// add
async function addTask(projectId, task) {
	const newTask = await Task.create(task);

	await Project.findByIdAndUpdate(projectId, { $push: { tasks: newTask } });

	return newTask;
}

// edit
async function editTask(taskId, task) {
	return await Task.updateOne(
		{ _id: taskId },
		{ $set: { name: task.name, time: task.time } },
	);
}

// delete
async function deleteTask(projectId, taskId) {
	await Task.deleteOne({ _id: taskId });

	await Project.findByIdAndUpdate(projectId, { $pull: { tasks: taskId } });
}

module.exports = {
	addTask,
	editTask,
	deleteTask,
};
