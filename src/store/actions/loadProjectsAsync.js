import { request } from "../../utils";

export const loadProjectsAsync =
	(isParams, search, status, page, limit) => () => {
		const loadRequest = isParams
			? request(
					`projects?search=${search}${[0, 1].includes(status) ? `&status=${status}` : ""}&page=${page}&limit=${limit}`,
				)
			: request("/projects");

		return loadRequest.then((projectsData) => {
			return projectsData;
		});
	};
