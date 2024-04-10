import { ACTION_TYPE } from "../type";

export const setProjectsAllData = (projectData) => ({
	type: ACTION_TYPE.SET_PROJECTS_DATA,
	payload: projectData,
});
