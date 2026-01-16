import { Link } from "react-router-dom";
import { Post } from "../../types/posts-type";

type PostCardProps = {
  post: Post;
};

const PostCard = ({ post }: PostCardProps) => {
  return (
    <Link to={post.link || `#`} className="block group">
      <div className="flex flex-col h-full">
        <div className="relative overflow-hidden  bg-gray-100 mb-4 aspect-video">
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
        <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-gray-700 transition-colors">
          {post.title}
        </h3>
        <p className="text-gray-600 text-sm mb-4 overflow-hidden" style={{
          display: '-webkit-box',
          WebkitLineClamp: 2,
          WebkitBoxOrient: 'vertical',
        }}>
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
    </Link>
  );
};

export default PostCard;
