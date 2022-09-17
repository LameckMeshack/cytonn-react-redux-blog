import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { fetchBlog } from "../store/actions/blogActions";
import Error from "./Error";

function BlogComponent() {
  const dispatch = useDispatch();
  const params = useParams();
  const id = params.id;

  const blogData = useSelector((state) => state.blog);
  const { loading, error, blog } = blogData;
  //   console.log(blog);

  useEffect(() => {
    // function to filter blog
    dispatch(fetchBlog(id));
  }, [dispatch, id]);

  return (
    <div>
      {loading ? (
        <div className="text-center">
          <h2 className="text-2xl font-extrabold text-gray-900">Loading...</h2>
        </div>
      ) : error ? (
        <Error error={error} />
      ) : (
        <div className="max-w-screen-xl mx-auto">
          <main className="mt-10">
            <div
              className="mb-4 md:mb-0 w-full max-w-screen-md mx-auto relative"
              style={{ height: " 24em" }}
            >
              <div
                className="absolute left-0 bottom-0 w-full h-full z-10"
                style={{
                  background:
                    "linear-gradient(180deg,transparent,rgba(0,0,0,.7))",
                }}
              ></div>
              <img
                src={blog.image}
                alt="men"
                className="absolute left-0 top-0 w-full h-full z-0 object-cover"
              />
              <div className="p-4 absolute bottom-0 left-0 z-20">
                <Link
                  to="#"
                  className="px-4 py-1 bg-black text-gray-200 inline-flex items-center justify-center mb-2"
                >
                  Nutrition
                </Link>
                <h2 className="text-4xl font-semibold text-gray-100 leading-tight">
                  {blog.title}
                </h2>
                <div className="flex mt-3">
                  <img
                    src="https://randomuser.me/api/portraits/men/97.jpg"
                    alt="men"
                    className="h-10 w-10 rounded-full mr-2 object-cover"
                  />
                  <div>
                    <p className="font-semibold text-gray-200 text-sm">
                      {" "}
                      Mike Sullivan{" "}
                    </p>
                    <p className="font-semibold text-gray-400 text-xs">
                      {" "}
                      14 Aug{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="px-4 lg:px-0 mt-12 text-gray-700 max-w-screen-md mx-auto text-lg leading-relaxed">
              <div className="border-l-4 border-gray-500 pl-4 mb-6 italic rounded">
                {blog.body}
              </div>
            </div>
          </main>
        </div>
      )}
    </div>
  );
}

export default BlogComponent;
