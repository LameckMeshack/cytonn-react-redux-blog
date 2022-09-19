import { data } from "autoprefixer";
import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Search() {
  const blogList = useSelector((state) => state.blogList);
  const [searchResults, setsearchResults] = useState([]);
  const { loading, error, blogs } = blogList;
  //search by filtering from the store and displaying the result
  const handleSearch = (e) => {
    e.preventDefault();
    // search from the store data
    const search = blogs.filter((blog) => {
      return blog.title.toLowerCase().includes(e.target.value.toLowerCase());
    });
    setsearchResults(search);
    // display the result
    console.log(searchResults);
  };
  return (
    <div>
      <div className="max-w-2xl mx-auto">
        <form className="flex items-center">
          <label htmlFor="simple-search" className="sr-only">
            Search
          </label>
          <div className="relative w-full">
            <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
              <svg
                className="w-5 h-5 text-gray-500 dark:text-gray-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </div>
            <input
              type="text"
              id="simple-search"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search by Title"
              required
              onChange={handleSearch}
            />
          </div>
        </form>

        <div className="mt-4">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Related to the search
          </p>
          {searchResults.length > 0 ? (
            <ul className="mt-2">
              {searchResults.map((blog) => (
                <li key={blog.id}>
                  <Link
                    to={`/blog/${blog.id}`}
                    className="text-sm text-blue-500 dark:text-blue-400 hover:underline"
                  >
                    {blog.title}
                  </Link>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-sm text-gray-500 dark:text-gray-400">
              No results found
            </p>
          )}

          <div className="mt-2"></div>
        </div>
      </div>
    </div>
  );
}

export default Search;
