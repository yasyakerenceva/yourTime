export const getActivePath = (path, id) => {
	switch (path) {
		case "/project": {
			return "/project";
		}
		case `/project/${id}`: {
			return `/project/${id}`;
		}
		default: {
			return "/projects";
		}
	}
};
