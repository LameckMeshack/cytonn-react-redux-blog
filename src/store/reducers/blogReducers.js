// blog reducers

import {
  BLOGS_REQUEST,
  BLOGS_SUCCESS,
  BLOGS_FAIL,
} from "../constants/blogsConstants";

//initial blogs state
const initialState = {
  blogs: [],
  loading: false,
  error: null,
};

//blog reducer
export const fetchBlogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case BLOGS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case BLOGS_SUCCESS:
      return {
        ...state,
        loading: false,
        blogs: action.payload,
      };
    case BLOGS_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
