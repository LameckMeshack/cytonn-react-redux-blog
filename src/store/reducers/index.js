import { combineReducers } from "redux";
import { fetchBlogReducer, fetchBlogsReducer } from "./blogReducers";

//combining reducers
export const rootReducer = combineReducers({
  blogList: fetchBlogsReducer,
  blog: fetchBlogReducer,
});
