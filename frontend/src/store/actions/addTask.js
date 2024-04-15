import { ACTION_TYPE } from "../type";

export const addTask = (task) => ({
	type: ACTION_TYPE.ADD_TASK,
	payload: task,
});
