import { request } from "../../utils";
import { CLOSE_MODAL } from "./closeModal";
import { setProjectData } from "./setProjectData";

export const addProjectAsync = (name) => (dispatch) => {
	const addRequest = request("/projects", "POST", { name });

	return addRequest.then((updatedPost) => {
		dispatch(setProjectData(updatedPost.data));
		dispatch(CLOSE_MODAL);

		return updatedPost.data;
	});
};
