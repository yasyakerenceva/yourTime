import { request } from "../../utils";
import { setTagsData } from "./setTagsData";

export const loadTagsAsync = () => (dispatch) =>
	request("/projects/status").then((tagsData) => {
		dispatch(setTagsData(tagsData.data));
		sessionStorage.setItem("tagsData", JSON.stringify(tagsData.data));
	});
