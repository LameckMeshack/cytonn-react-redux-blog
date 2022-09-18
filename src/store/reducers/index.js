import { combineReducers } from "redux";
import authReducer from "./authReducers";
import { fetchBlogReducer, fetchBlogsReducer } from "./blogReducers";

//combining reducers
export const rootReducer = combineReducers({
  blogList: fetchBlogsReducer,
  blog: fetchBlogReducer,
  userInfo: authReducer,
});
