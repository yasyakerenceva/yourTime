import { ACTION_TYPE } from "../type";

export const setProjectData = (projectData) => ({
	type: ACTION_TYPE.SET_PROJECT_DATA,
	payload: projectData,
});
