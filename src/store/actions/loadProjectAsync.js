import { request } from "../../utils";
import { setProjectData } from "./setProjectData";

export const loadProjectAsync = (projectId) => (dispatch) =>
	request(`/projects/${projectId}`).then((projectData) => {
		if (projectData.data) {
			dispatch(setProjectData(projectData.data));
		}

		return projectData;
	});
