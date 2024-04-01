const Project = require("../models/Project");
const STATUS = require("../constants/status");

// create
async function createProject(project) {
	const newProject = await Project.create(project);

	await newProject.populate("tasks");

	return newProject;
}

// edit
async function editProject(id, project) {
	const newProject = await Project.findByIdAndUpdate(id, project, {
		returnDocument: "after",
	});

	await newProject.populate("tasks");

	return newProject;
}

// delete
function deleteProject(id) {
	return Project.deleteOne({ _id: id });
}

// get projects with search and pagination
async function getProjects(
	search = "",
	tag = [0, 1],
	limit = 3,
	page = 1,
	user,
) {
	const [projects, count] = await Promise.all([
		Project.find({
			user,
			name: { $regex: search, $options: "i" },
			status: tag,
		})
			.limit(limit)
			.skip((page - 1) * limit)
			.sort({ createdAt: -1 })
			.populate("tasks"),
		Project.countDocuments({ name: { $regex: search, $options: "i" } }),
	]);

	return {
		projects,
		lastPage: Math.ceil(count / limit),
	};
}

// get project
function getProject(id) {
	return Project.findById(id).populate("tasks");
}

// get status
function getStatus() {
	return [
		{ id: STATUS.WORK, name: "В работе" },
		{ id: STATUS.DONE, name: "Завершенные" },
	];
}

module.exports = {
	createProject,
	editProject,
	deleteProject,
	getProjects,
	getProject,
	getStatus,
};
