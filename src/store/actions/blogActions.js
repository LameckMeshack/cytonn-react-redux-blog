// blog actions
import axios from "axios";
import {
  BLOGS_FAIL,
  BLOGS_REQUEST,
  BLOGS_SUCCESS,
  BLOG_FAIL,
  BLOG_SUCCESS,
  BLOG_REQUEST,
  BLOG_CREATE_REQUEST,
  BLOG_CREATE_SUCCESS,
  BLOG_CREATE_FAIL,
  BLOG_CREATE_RESET,
  BLOG_UPDATE_REQUEST,
  BLOG_UPDATE_SUCCESS,
  BLOG_UPDATE_FAIL,
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

//create a blog
export const createBlog = (blog) => async (dispatch, getState) => {
  try {
    dispatch({
      type: BLOG_CREATE_REQUEST,
    });

    // const {
    //   userLogin: { userInfo },
    // } = getState();

    const config = {
      headers: {
        "Content-Type": "application/json",
        // Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.post(
      "http://localhost:3000/blogs",
      blog,
      config
    );

    dispatch({
      type: BLOG_CREATE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: BLOG_CREATE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

//update blog action
export const updateBlog = (blog) => async (dispatch, getState) => {
  try {
    dispatch({
      type: BLOG_UPDATE_REQUEST,
    });

    // const {
    //   userLogin: { userInfo },
    // } = getState();

    const config = {
      headers: {
        "Content-Type": "application/json",
        // Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.put(
      `http://localhost:3000/blogs/${blog.id}`,
      blog,
      config
    );

    dispatch({
      type: BLOG_UPDATE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: BLOG_UPDATE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
