const express = require("express");
const {
	createProject,
	getProjects,
	getProject,
	editProject,
	deleteProject,
	getStatus,
} = require("../controllers/project");
const { addTask, editTask, deleteTask } = require("../controllers/task");
const authenticated = require("../middlewares/authenticated");
const mapProject = require("../helpers/mapProject");
const mapTask = require("../helpers/mapTask");

const router = express.Router({ mergeParams: true });

router.get("/", authenticated, async (req, res) => {
	const { search, status, limit, page } = req.query;
	const { projects, lastPage } = await getProjects(
		search,
		status,
		limit,
		page,
		req.user.id,
	);

	res.send({ data: { lastPage, projects: projects.map(mapProject) } });
});

router.get("/status", authenticated, async (req, res) => {
	const status = await getStatus();
	res.send({ data: status });
});

router.get("/:id", authenticated, async (req, res) => {
	try {
		const project = await getProject(req.params.id);

		res.send({ data: mapProject(project) });
	} catch (e) {
		res.send({ error: "Такая страница не существует" });
	}
});

router.post("/", authenticated, async (req, res) => {
	const { name } = req.body;

	const newProject = await createProject({ name, user: req.user.id });

	res.send({ data: mapProject(newProject) });
});

router.patch("/:id", authenticated, async (req, res) => {
	const { name, status, time } = req.body;

	const updatedProject = await editProject(req.params.id, {
		name,
		status,
		time,
	});

	res.send({ data: mapProject(updatedProject) });
});

router.delete("/:id", authenticated, async (req, res) => {
	await deleteProject(req.params.id);

	res.send({ error: null });
});

// TASKS
router.post("/:id/tasks", authenticated, async (req, res) => {
	const { name } = req.body;
	const newTask = await addTask(req.params.id, {
		name,
	});

	res.send({ data: mapTask(newTask) });
});

router.patch("/:projectId/tasks/:taskId", authenticated, async (req, res) => {
	const { projectId, taskId } = req.params;
	const { name, time } = req.body;

	const updatedTask = await editTask(projectId, taskId, { name, time });

	res.send({ data: mapTask(updatedTask) });
});

router.delete("/:projectId/tasks/:taskId", authenticated, async (req, res) => {
	const { projectId, taskId } = req.params;
	await deleteTask(projectId, taskId);

	res.send({ error: null });
});

module.exports = router;
