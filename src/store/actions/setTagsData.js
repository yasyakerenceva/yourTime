import { ACTION_TYPE } from "../type";

export const setTagsData = (tagsData) => ({
	type: ACTION_TYPE.SET_TAGS_DATA,
	payload: tagsData,
});
