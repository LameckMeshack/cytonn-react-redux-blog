import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { fetchBlog, updateBlog } from "../store/actions/blogActions";

function UpdateForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const params = useParams();
  //get the id from the url
  const id = params.id;
  // console.log(id);

  //get the blog from the store
  const UpdateData = useSelector((state) => state.blog);
  const { blog } = UpdateData;
  console.log(blog);

  const [blogData, setblogData] = useState({
    id: params.id,
    title: "",
    body: "",
    image: "",
  });

  useEffect(() => {
    // function to filter blog
    dispatch(fetchBlog(id));
  }, [dispatch, id]);

  const handleChange = (e) => {
    setblogData({ ...blogData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // dispatch action
    dispatch(updateBlog(blogData));
    // clearing the form
    setblogData({
      title: "",
      body: "",
      image: "",
    });

    // redirect to home
    navigate("/");

    alert("Blog Updated Successfully");
  };

  return (
    <>
      <div className="block p-6 rounded-lg shadow-lg mt-6 mx-auto bg-white max-w-md">
        <form onSubmit={handleSubmit}>
          <div className="form-group mb-6">
            <input
              onChange={handleChange}
              type="text"
              // edittable
              // value={initial.title}
              name="title"
              className="form-control block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              placeholder="Title"
            />
          </div>
          <div className="form-group mb-6">
            <input
              onChange={handleChange}
              // value={initial.image}
              type="link"
              name="image"
              className="form-control block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              placeholder="Image Link"
            >
              {/* hello */}
            </input>
          </div>
          <div className="form-group mb-6">
            <textarea
              onChange={handleChange}
              type="text"
              name="body"
              // value={initial.body}
              className="
        form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
      "
              rows="8"
              placeholder="blog body"
            ></textarea>
          </div>

          <button
            type="submit"
            className="
      w-full
      px-6
      py-2.5
      bg-blue-600
      text-white
      font-medium
      text-xs
      leading-tight
      uppercase
      rounded
      shadow-md
      hover:bg-blue-700 hover:shadow-lg
      focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
      active:bg-blue-800 active:shadow-lg
      transition
      duration-150
      ease-in-out"
          >
            update
          </button>
        </form>
      </div>
    </>
  );
}

export default UpdateForm;
