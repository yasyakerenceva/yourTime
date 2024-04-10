import { request } from "../../utils";
import { setProjectsAllData } from "./setProjectsAllData";

export const loadProjectsAllAsync = () => (dispatch) =>
	request("/projects").then(({ data: { projects: projectsData } }) => {
		dispatch(setProjectsAllData(projectsData));
		sessionStorage.setItem("projectsData", JSON.stringify(projectsData));
	});
