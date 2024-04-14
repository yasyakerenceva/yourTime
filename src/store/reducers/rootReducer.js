import { combineReducers } from "redux";
import { userReducer } from "./userReducer";
import { projectReducer } from "./projectReducer";
import { appReducer } from "./appReducer";

export const rootReducer = combineReducers({
	app: appReducer,
	user: userReducer,
	project: projectReducer,
});
