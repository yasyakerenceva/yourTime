const Project = require("../models/Project");
const STATUS = require("../constants/status");
const Task = require("../models/Task");

// create
async function createProject(project) {
	const newProject = await Project.create(project);

	await newProject.populate("tasks");

	return newProject;
}

// edit
async function editProject(id, project) {
	const prevProject = await Project.findOne({ _id: id });

	if (project.time) {
		project.time = project.time + prevProject.time;
	}

	const newProject = await Project.findByIdAndUpdate(id, project, {
		returnDocument: "after",
	});

	await newProject.populate("tasks");

	return newProject;
}

// delete
async function deleteProject(id) {
	const project = await Project.findOne({ _id: id });
	if (project.tasks) {
		await Task.deleteMany({ _id: { $in: project.tasks } });
	}
	return await Project.deleteOne({ _id: id });
}

// get projects with search and pagination
async function getProjects(search = "", tag = -1, limit, page = 1, user) {
	const [projects, count] = await Promise.all([
		Project.find({
			user,
			name: { $regex: search, $options: "i" },
			status: tag > -1 ? tag : [0, 1],
		})
			.limit(limit)
			.skip((page - 1) * limit)
			.sort({ createdAt: -1 })
			.populate("tasks"),
		Project.countDocuments({
			user,
			name: { $regex: search, $options: "i" },
			status: tag > -1 ? tag : [0, 1],
		}),
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
