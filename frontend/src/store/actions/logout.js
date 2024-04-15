import { ACTION_TYPE } from "../type";

export const logout = () => {
	return {
		type: ACTION_TYPE.LOGOUT,
	};
};
