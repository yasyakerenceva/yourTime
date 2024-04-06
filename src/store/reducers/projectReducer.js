import { ACTION_TYPE } from "../type";

const initialProjectState = {
	id: "",
	name: "",
	time: null,
	status: 0,
	createdAt: null,
	fullTime: null,
	tasks: [],
};

export const projectReducer = (state = initialProjectState, action) => {
	const { type, payload } = action;

	switch (type) {
		case ACTION_TYPE.SET_PROJECT_DATA: {
			return {
				...state,
				...payload,
			};
		}
		case ACTION_TYPE.RESET_PROJECT_DATA: {
			return initialProjectState;
		}
		case ACTION_TYPE.ADD_TASK: {
			return {
				...state,
				tasks: [...state.tasks, payload],
			};
		}
		case ACTION_TYPE.REMOVE_TASK: {
			return {
				...state,
				tasks: state.tasks.filter((task) => task.id !== payload),
			};
		}
		default:
			return state;
	}
};
