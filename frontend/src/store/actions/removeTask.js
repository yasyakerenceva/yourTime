import { ACTION_TYPE } from "../type";

export const removeTask = (taskId) => ({
	type: ACTION_TYPE.REMOVE_TASK,
	payload: taskId,
});
