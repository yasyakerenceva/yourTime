import { ACTION_TYPE } from "../type";

const initialUserState = {
	id: null,
	firstname: "",
	jobtitle: "",
	login: "",
	isAuth: false,
};

export const userReducer = (state = initialUserState, action) => {
	const { type, payload } = action;

	switch (type) {
		case ACTION_TYPE.SET_USER: {
			return {
				...state,
				...payload,
			};
		}
		case ACTION_TYPE.LOGOUT: {
			return initialUserState;
		}
		default:
			return state;
	}
};
