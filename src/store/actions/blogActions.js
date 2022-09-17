// blog actions
import axios from "axios";
import {
  BLOGS_FAIL,
  BLOGS_REQUEST,
  BLOGS_SUCCESS,
  BLOG_FAIL,
  BLOG_SUCCESS,
  BLOG_REQUEST,
} from "../constants/blogsConstants";

// fetching all blogs
export const fetchBlogs = () => async (dispatch) => {
  try {
    dispatch({ type: BLOGS_REQUEST });

    const { data } = await axios.get("http://localhost:3000/blogs");
    // console.log(data);

    dispatch({
      type: BLOGS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: BLOGS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

// fetching single blog
export const fetchBlog = (id) => async (dispatch) => {
  try {
    dispatch({ type: BLOG_REQUEST });

    const { data } = await axios.get(`http://localhost:3000/blogs/${id}`);
    // console.log(data);

    dispatch({
      type: BLOG_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: BLOG_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
