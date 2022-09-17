// blog reducers

import {
  BLOGS_REQUEST,
  BLOGS_SUCCESS,
  BLOGS_FAIL,
  BLOG_REQUEST,
  BLOG_SUCCESS,
  BLOG_FAIL,
} from "../constants/blogsConstants";

//initial blogs state
const initialState = {
  blogs: [],
  blog: {},
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

//single blog reducer
export const fetchBlogReducer = (state = initialState, action) => {
  switch (action.type) {
    case BLOG_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case BLOG_SUCCESS:
      return {
        ...state,
        loading: false,
        blog: action.payload,
      };
    case BLOG_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
