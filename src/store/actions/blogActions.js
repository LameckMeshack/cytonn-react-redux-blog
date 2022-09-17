// blog actions
import axios from "axios";
import {
  BLOGS_FAIL,
  BLOGS_REQUEST,
  BLOGS_SUCCESS,
} from "../constants/blogsConstants";

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
