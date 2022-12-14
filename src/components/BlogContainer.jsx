import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import BlogCard from "./BlogCard";
import Error from "./Error";
import { fetchBlogs } from "../store/actions/blogActions";
import Search from "./Search";
// import action

function BlogContainer() {
  const dispatch = useDispatch();

  const blogList = useSelector((state) => state.blogList);
  const { loading, error, blogs } = blogList;

  useEffect(() => {
    dispatch(fetchBlogs());
  }, [dispatch]);

  return (
    // component
    <>
      <Search />

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-4 mb-12">
        <article>
          <h2 className="text-2xl font-extrabold text-gray-900">BLOG</h2>
          <section className="mt-6 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-x-6 gap-y-8">
            {loading ? (
              <div className="text-center">
                <h2 className="text-2xl font-extrabold text-gray-900">
                  Loading...
                </h2>
              </div>
            ) : error ? (
              <Error error={error} />
            ) : (
              blogs.map((blog) => <BlogCard key={blog.id} {...blog} />)
            )}
          </section>
        </article>
      </section>
    </>
  );
}

export default BlogContainer;
