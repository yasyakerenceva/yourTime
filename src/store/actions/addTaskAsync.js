import { request } from "../../utils";
import { addTask } from "./addTask";

export const addTaskAsync = (projectId, content) => (dispatch) => {
	request(`/projects/${projectId}/tasks`, "POST", { name: content }).then(
		(task) => {
			dispatch(addTask(task.data));
		},
	);
};
