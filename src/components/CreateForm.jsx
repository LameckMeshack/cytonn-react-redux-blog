import React from "react";
import { useState } from "react";
import { createBlog } from "../store/actions/blogActions";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

function CreateForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  //   const [show, setShow] = useState(false);
  const [blogData, setblogData] = useState({
    title: "",
    body: "",
    image: "",
  });

  const handleChange = (e) => {
    setblogData({ ...blogData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // dispatch action
    dispatch(createBlog(blogData));
    // clearing the form
    setblogData({
      title: "",
      body: "",
      image: "",
    });

    // redirect to home
    navigate("/");

    // flash message
    // setShow(true);

    alert("Blog Created Successfully");
  };
  return (
    <>
      {/* {show && (
        <div class="w-1/2">
          <div
            class="px-4 py-4 rounded text-slate-800 bg-slate-300"
            role="alert"
          >
            A simple tailwind css alert message!
          </div>
        </div>
      )} */}
      <div className="block p-6 rounded-lg shadow-lg mt-6 mx-auto bg-white max-w-md">
        <form onSubmit={handleSubmit}>
          <div className="form-group mb-6">
            <input
              onChange={handleChange}
              type="text"
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
            />
          </div>
          <div className="form-group mb-6">
            <textarea
              onChange={handleChange}
              type="text"
              name="body"
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
            create
          </button>
        </form>
      </div>
    </>
  );
}

export default CreateForm;
