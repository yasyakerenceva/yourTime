import { request } from "../../utils";
import { setProjectData } from "./setProjectData";

export const saveProjectAsync = (projectId, newProjectData) => (dispatch) => {
	const saveRequest = projectId
		? request(`/projects/${projectId}`, "PATCH", newProjectData)
		: request("/projects", "POST", newProjectData);

	return saveRequest.then((updatedProject) => {
		dispatch(setProjectData(updatedProject.data));

		return updatedProject.data;
	});
};
