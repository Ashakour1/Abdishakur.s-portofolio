import { Link } from "react-router-dom";
import { Post } from "../../types/posts-type";

type ArticleCardProps = {
  post: Post;
};

const ArticleRow = ({ post }: ArticleCardProps) => {
  return (
    <Link to={`/tag/article/${post.id}`} className="block group">
      <div className="flex flex-col sm:flex-row gap-4 rounded-xl border border-gray-100 bg-white p-3">
        <div className="relative overflow-hidden bg-gray-100 rounded-lg w-full sm:w-60 shrink-0 aspect-video">
          <img
            src={post.thumbnail}
            alt={post.title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = "/landing.png"; // Fallback image
            }}
          />
        </div>
        <div className="flex flex-col justify-between min-h-[120px]">
          <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-gray-700 transition-colors">
            {post.title}
          </h3>
          <p
            className="text-gray-600 text-sm mb-4 overflow-hidden"
            style={{
              display: "-webkit-box",
              WebkitLineClamp: 2,
              WebkitBoxOrient: "vertical",
            }}
          >
            {post.description}
          </p>
          <div className="flex items-center gap-3 text-xs text-gray-500 mt-auto">
            <span>{post.date}</span>
            <span>•</span>
            <span>{post.readTime}</span>
            {post.comments > 0 && (
              <>
                <span>•</span>
                <span>{post.comments} comment{post.comments !== 1 ? "s" : ""}</span>
              </>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ArticleRow;
