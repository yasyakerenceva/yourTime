const initialProjectsState = [];

export const projectsReducer = (state = initialProjectsState, action) => {
	const { type, payload } = action;

	switch (type) {
		case "SET_PROJECTS_DATA": {
			return [...payload];
		}

		default:
			return state;
	}
};
