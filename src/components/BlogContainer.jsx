import BlogCard from "./BlogCard";

function BlogContainer() {
  return (
    // component
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-4 mb-12">
      <article>
        <h2 className="text-2xl font-extrabold text-gray-900">BLOG</h2>
        <section className="mt-6 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-x-6 gap-y-8">
          {/* blog cards */}
          <BlogCard
            title="This is blog 1"
            id={1}
            image="https://images.unsplash.com/photo-1623479322729-28b25c16b011?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1740&q=80"
          />
          <BlogCard
            title="This is blog 2"
            id={1}
            image="https://images.unsplash.com/photo-1659849025892-f9318988ad00?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3435&q=80"
          />
        </section>
      </article>
    </section>
  );
}

export default BlogContainer;
