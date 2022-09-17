import { combineReducers } from "redux";
import { fetchBlogsReducer } from "./blogReducers";

//combining reducers
export const rootReducer = combineReducers({
  blogList: fetchBlogsReducer,
});
