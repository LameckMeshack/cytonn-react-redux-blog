import BlogCard from "./BlogCard";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

function BlogContainer() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  //fetch blogs from api
  const fetchBlogs = async () => {
    const response = await axios.get("http://localhost:3000/blogs");
    setBlogs(response.data);
    setLoading(false);
  };

  useEffect(() => {
    fetchBlogs();
  }, []);
  return (
    // component
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
          ) : (
            blogs.map((blog) => <BlogCard key={blog.id} {...blog} />)
          )}
        </section>
      </article>
    </section>
  );
}

export default BlogContainer;
