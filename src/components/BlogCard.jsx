import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function BlogCard({ id, title, image }) {
  return (
    <div>
      <article
        className="relative w-full h-64 bg-cover bg-center group rounded-lg overflow-hidden shadow-lg hover:shadow-2xl  transition duration-300 ease-in-out "
        style={{ backgroundImage: `url(${image})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 group-hover:opacity-75 transition duration-300 ease-in-out"></div>
        <div className="relative w-full h-full px-4 sm:px-6 lg:px-4 flex justify-center items-center">
          <h3 className="text-center">
            <Link
              className="text-white text-2xl font-bold text-center"
              to="blog/:id"
            >
              <span className="absolute inset-0"></span>
              {title || "Blog Title"}
            </Link>
          </h3>
        </div>
      </article>
    </div>
  );
}
//props validation
BlogCard.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default BlogCard;
