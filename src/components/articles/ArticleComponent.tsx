import { FiArrowUpRight } from "react-icons/fi";
import { Link } from "react-router-dom";
import { postsData } from "../../data/posts-data";
import ArticleRow from "./ArticalRow";

const ArticleComponent = () => {
  const featuredPosts = postsData.slice(0, 3);

  return (
    <section className="py-10 space-y-6">
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div className="space-y-1">
          <h2 className="text-lg font-semibold text-gray-900">Articles</h2>
          <p className="text-sm text-gray-600">
            Practical insights on software engineering, AI, and career growth.
          </p>
        </div>
        <Link
          to="/articles"
          className="group inline-flex items-center gap-2 text-sm font-semibold text-gray-600 transition hover:text-blue-700"
        >
          <span>View all articles</span>
          <FiArrowUpRight className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </Link>
      </div>

      <div className="flex flex-col gap-4">
        {featuredPosts.map((post) => (
          <ArticleRow key={post.id} post={post} />
        ))}
      </div>
    </section>
  );
};

export default ArticleComponent;
