import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { postsData } from "../data/posts-data";
import { Post } from "../types/posts-type";

const PostDetailScreen = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  const post: Post | undefined = postsData.find((p) => p.id === id);

  if (!post) {
    return (
      <main className="max-w-[1020px] mx-auto px-5 py-10">
        <div className="text-center py-20">
          <p className="text-gray-600 text-lg">Post not found.</p>
          <button
            onClick={() => navigate("/tags")}
            className="mt-4 text-blue-600 hover:text-blue-700"
          >
            Back to Posts
          </button>
        </div>
      </main>
    );
  }

  const author = post.author || {
    name: "Abdishakur Mohamed",
    avatar: "/image-prof.jpg",
  };

  return (
    <main>
      <div className="max-w-[1020px] mx-auto px-5 py-20">
        {/* Header Section */}
        <div className="mb-8">
          {post.category && (
            <div className="text-sm text-gray-600 mb-4">
              {post.category}
            </div>
          )}
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight text-gray-900">
            {post.title}
          </h1>
          <p className="text-lg text-gray-700 mb-8 max-w-3xl">
            {post.description}
          </p>
          <div className="flex items-center gap-4">
            <img
              src={author.avatar}
              alt={author.name}
              className="w-10 h-10 rounded-full object-cover"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = "/image-prof.jpg";
              }}
            />
            <div>
              <div className="font-semibold text-gray-900">{author.name}</div>
              <div className="text-sm text-gray-500">
                {post.date} • {post.readTime}
              </div>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="mb-8">
          <img
            src={post.thumbnail}
            alt={post.title}
            className="w-full"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = "/landing.png";
            }}
          />
        </div>
        <div className="max-w-none">
          <p className="text-gray-700 leading-relaxed text-base whitespace-pre-line">
            {post.content || post.description}
          </p>
        </div>
      </div>
    </main>
  );
};

export default PostDetailScreen;
